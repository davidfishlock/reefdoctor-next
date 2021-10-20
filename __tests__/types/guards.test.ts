import { Category, UVCLevel } from '@prisma/client'
import {
    isCategory,
    isTutorialSessionType,
    isUVCLevel,
} from '../../types/guards'
import { TutorialSessionType } from '../../types/tutorial'

const invalidTypeTheories = [
    [0, false],
    ['NOT_A_VALID_VALUE', false],
    [() => 'something', false],
    [[1, 2, 3], false],
    [undefined, false],
    [null, false],
] as const

describe('guards', () => {
    describe('isTutorialSessionType', () => {
        const theories = [
            ...invalidTypeTheories,
            [TutorialSessionType.Workshop, true],
            [TutorialSessionType.Quiz, true],
            [TutorialSessionType.Exam, true],
        ] as const

        test.each(theories)(
            'Value %p returns isTutorialSessionType %p',
            (value, expected) => {
                const isValid = isTutorialSessionType(value)
                expect(isValid).toEqual(expected)
            }
        )
    })

    describe('isCategory', () => {
        const theories = [
            ...invalidTypeTheories,
            [Category.Fish, true],
            [Category.FishFamily, true],
            [Category.Invertebrate, true],
            [Category.Coral, true],
            [Category.Benthic, true],
            [Category.Seagrass, true],
        ] as const

        test.each(theories)(
            'Value %p returns isCategory %p',
            (value, expected) => {
                const isValid = isCategory(value)
                expect(isValid).toEqual(expected)
            }
        )
    })

    describe('isUVCLevel', () => {
        const theories = [
            ...invalidTypeTheories,
            [UVCLevel.NA, true],
            [UVCLevel.Indicator, true],
            [UVCLevel.Expert, true],
        ] as const

        test.each(theories)(
            'Value %p returns isUVCLevel %p',
            (value, expected) => {
                const isValid = isUVCLevel(value)
                expect(isValid).toEqual(expected)
            }
        )
    })
})
