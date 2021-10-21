import { Species } from '.prisma/client'
import { Category, Prisma, UVCLevel } from '@prisma/client'
import { constants } from 'http2'
import { NextApiRequest, NextApiResponse } from 'next'
import urljoin from 'url-join'
import { strings } from '../../../constants/strings'
import prisma from '../../../prisma/client'
import { isTutorialQuery } from '../../../types/queries'
import { TutorialSessionType } from '../../../types/tutorial'
import { shuffle } from '../../../utils/array'
import { validateHttpMethod } from '../../../utils/requestHandlers'
import { getImagePathForSpecies } from '../../../utils/species'
import { hasNAItems } from '../../../utils/uvcDefinitions'

export const QUESTION_COUNT = 25
export const MAX_NA_ITEMS_COUNT = 5

function getTutorialSpeciesQuery(
    category: Category,
    uvcLevel: UVCLevel
): Prisma.SpeciesFindManyArgs {
    if (uvcLevel === UVCLevel.Expert) {
        return {
            where: {
                category: category,
                OR: [
                    {
                        uvcLevel: UVCLevel.Indicator,
                    },
                    { uvcLevel: UVCLevel.Expert },
                ],
            },
        }
    }

    return {
        where: {
            category: category,
            uvcLevel: uvcLevel,
        },
    }
}

function getQuestion(species: Species) {
    const imageIndex = Math.floor(Math.random() * species.imageCount)
    return {
        species,
        imageUri: urljoin(
            getImagePathForSpecies(species),
            `${imageIndex + 1}.jpg`
        ),
    }
}

function areNAItemsRequired(
    sessionType: TutorialSessionType,
    category: Category
) {
    return sessionType == TutorialSessionType.Quiz && hasNAItems(category)
}

function selectSpecies(
    normalSpecies: Species[],
    naSpecies: Species[],
    maxQuestions: number,
    maxNAItems: number
): Species[] {
    const selectedNASpecies = shuffle(naSpecies).slice(0, maxNAItems)
    const selectedNormalSpecies = shuffle(normalSpecies).slice(
        0,
        maxQuestions - selectedNASpecies.length
    )
    return shuffle([...selectedNASpecies, ...selectedNormalSpecies])
}

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse
) {
    if (!validateHttpMethod(request.method, ['GET'])) {
        response.status(constants.HTTP_STATUS_METHOD_NOT_ALLOWED)
        response.send(strings.API_ERROR_METHOD_UNSUPPORTED)
        return
    }

    if (!isTutorialQuery(request.query)) {
        response.status(constants.HTTP_STATUS_BAD_REQUEST)
        response.send(strings.API_ERROR_INVALID_QUERY)
        return
    }

    const { category, uvcLevel, sessionType } = request.query

    const speciesQuery = getTutorialSpeciesQuery(category, uvcLevel)
    const normalSpecies = await prisma.species.findMany(speciesQuery)
    const naSpecies = areNAItemsRequired(sessionType, category)
        ? await prisma.species.findMany({
              where: {
                  category,
                  uvcLevel: UVCLevel.NA,
              },
          })
        : []

    const questions = selectSpecies(
        normalSpecies,
        naSpecies,
        QUESTION_COUNT,
        MAX_NA_ITEMS_COUNT
    ).map(getQuestion)

    response.json({ questions })
}
