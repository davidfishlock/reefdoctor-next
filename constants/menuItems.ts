import { Category } from '@prisma/client'

export const mainMenuItems = [
    {
        image: '/images/menu-items/fish.jpg',
        category: Category.Fish,
    },
    {
        image: '/images/menu-items/invertebrate.jpg',
        category: Category.Invertebrate,
    },
    {
        image: '/images/menu-items/benthic.jpg',
        category: Category.Benthic,
    },
    {
        image: '/images/menu-items/fish-families.jpg',
        category: Category.FishFamily,
    },
    {
        image: '/images/menu-items/coral.jpg',
        category: Category.Coral,
    },
    {
        image: '/images/menu-items/seagrass.jpg',
        category: Category.Seagrass,
    },
]
