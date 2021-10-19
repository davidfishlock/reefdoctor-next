import { Category, Species, UVCLevel } from '@prisma/client'

export const defaultSpecies: Species = {
    id: 1,
    name: 'A Name',
    imageCount: 1,
    details: 'Some Details',
    category: Category.Fish,
    uvcLevel: UVCLevel.Indicator,
}
