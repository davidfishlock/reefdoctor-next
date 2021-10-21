import { Category } from '@prisma/client'

export function isUVCCategory(category: Category) {
    const uvcCategories: Category[] = [
        Category.Fish,
        Category.Benthic,
        Category.Invertebrate,
    ]
    return uvcCategories.includes(category)
}

export function hasNAItems(category: Category) {
    const naItemsCategories: Category[] = [Category.Fish, Category.Invertebrate]
    return naItemsCategories.includes(category)
}
