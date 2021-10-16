import { Species } from '.prisma/client'
import prisma from '../../../prisma/client'
import { Category, Prisma, UVCLevel } from '@prisma/client'
import { shuffle } from '../../../utils/Array'
import { QUESTION_COUNT } from '../../../consts/TutorialSession'
import { Question, Tutorial } from '../../../types/Tutorial'
import urljoin from 'url-join'
import { getImagePathForSpecies } from '../../../utils/Species'

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
    req: { method: string; query: { category: Category; uvcLevel: UVCLevel } },
    res: { json: (tutorial: Tutorial) => void }
) {
    if (req.method === 'GET') {
        const { category, uvcLevel } = req.query
        const speciesQuery = getTutorialSpeciesQuery(category, uvcLevel)
        const eligibleSpecies = await prisma.species.findMany(speciesQuery)

        const questions: Question[] = shuffle(eligibleSpecies)
            .slice(0, QUESTION_COUNT)
            .map(getQuestion)

        res.json({ questions })
    } else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`
        )
    }
}
