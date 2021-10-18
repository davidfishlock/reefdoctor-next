import { Species } from '.prisma/client'
import { Category, Prisma, UVCLevel } from '@prisma/client'
import urljoin from 'url-join'
import prisma from '../../../prisma/client'
import {
    Question,
    Tutorial,
    TutorialSessionType,
} from '../../../types/Tutorial'
import { shuffle } from '../../../utils/Array'
import { getImagePathForSpecies } from '../../../utils/Species'

const QUESTION_COUNT = 25
const MAX_NA_ITEMS_COUNT = 5

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

export default async function handle(
    req: {
        method: string
        query: {
            category: Category
            uvcLevel: UVCLevel
            sessionType: TutorialSessionType
        }
    },
    res: { json: (tutorial: Tutorial) => void }
) {
    if (req.method === 'GET') {
        const { category, uvcLevel } = req.query
        const speciesQuery = getTutorialSpeciesQuery(category, uvcLevel)
        let species = (await prisma.species.findMany(speciesQuery)).slice(
            0,
            QUESTION_COUNT
        )

        if (category === Category.Fish || category === Category.Invertebrate) {
            const naItems = (
                await prisma.species.findMany({
                    where: {
                        category: category,
                        uvcLevel: UVCLevel.NA,
                    },
                })
            ).slice(0, MAX_NA_ITEMS_COUNT)

            species = [...species, ...naItems]
        }

        const questions: Question[] = shuffle(species)
            .slice(0, QUESTION_COUNT)
            .map(getQuestion)

        res.json({ questions })
    } else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`
        )
    }
}
