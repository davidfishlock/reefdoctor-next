import { Category, UVCLevel } from '@prisma/client'
import { isCategory, isTutorialSessionType, isUVCLevel } from './guards'
import { TutorialSessionType } from './tutorial'

export type SpeciesQuery = {
    category: Category
    uvcLevel: UVCLevel
}

export function isSpeciesQuery(query: {
    [key: string]: string | string[] | undefined
}): query is SpeciesQuery {
    return isCategory(query.category) && isUVCLevel(query.uvcLevel)
}

export type TutorialQuery = {
    category: Category
    uvcLevel: UVCLevel
    sessionType: TutorialSessionType
}

export function isTutorialQuery(query: {
    [key: string]: string | string[] | undefined
}): query is TutorialQuery {
    return (
        isCategory(query.category) &&
        isUVCLevel(query.uvcLevel) &&
        isTutorialSessionType(query.sessionType)
    )
}
