import { Category, UVCLevel } from '@prisma/client'
import { TutorialSessionType } from './Tutorial'

export function isTutorialSessionType(
    value: unknown
): value is TutorialSessionType {
    return isString(value) && Object.keys(TutorialSessionType).includes(value)
}

export function isCategory(value: unknown): value is Category {
    return isString(value) && Object.keys(Category).includes(value)
}

export function isUVCLevel(value: unknown): value is UVCLevel {
    return isString(value) && Object.keys(UVCLevel).includes(value)
}

export function isString(value: unknown): value is string {
    return typeof value === 'string'
}
