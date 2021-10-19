import { Category } from '@prisma/client'
import { strings } from './strings'

export const mainMenuItems = [
    {
        image: '/images/menu-items/fish.jpg',
        title: strings.CATEGORY_FISH,
        category: Category.Fish,
    },
    {
        image: '/images/menu-items/invertebrate.jpg',
        title: strings.CATEGORY_INVERTEBRATE,
        category: Category.Invertebrate,
    },
    {
        image: '/images/menu-items/benthic.jpg',
        title: strings.CATEGORY_BENTHIC,
        category: Category.Benthic,
    },
    {
        image: '/images/menu-items/fish-families.jpg',
        title: strings.CATEGORY_FISH_FAMILIES,
        category: Category.FishFamily,
    },
    {
        image: '/images/menu-items/coral.jpg',
        title: strings.CATEGORY_CORAL,
        category: Category.Coral,
    },
    {
        image: '/images/menu-items/seagrass.jpg',
        title: strings.CATEGORY_SEAGRASS,
        category: Category.Seagrass,
    },
]
