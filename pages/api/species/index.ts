import { Species } from '.prisma/client'
import prisma from '../../../prisma/client'
import { Category, UVCLevel } from '@prisma/client'

export default async function handle(
    req: { method: string; query: { category: Category; uvcLevel: UVCLevel } },
    res: { json: (species: Species[]) => void }
) {
    if (req.method === 'GET') {
        const { category, uvcLevel } = req.query

        const species = await prisma.species.findMany({
            where: {
                category: category,
                uvcLevel: uvcLevel,
            },
        })

        res.json(species)
    } else {
        throw new Error(
            `The HTTP ${req.method} method is not supported at this route.`
        )
    }
}
