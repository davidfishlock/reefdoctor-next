import { Category } from '@prisma/client'
import { isUVCCategory } from '../../utils/uvcDefinitions'

describe('uvcDefinitions', () => {
    describe('isUVCCategory', () => {
        const categoryTheories = [
            [Category.Fish, true],
            [Category.Invertebrate, true],
            [Category.Benthic, true],
            [Category.Coral, false],
            [Category.FishFamily, false],
            [Category.Seagrass, false],
        ] as const

        test.each(categoryTheories)(
            'Category %p returns isUVCCategory %p',
            (category, expected) => {
                const isUVC = isUVCCategory(category)
                expect(isUVC).toEqual(expected)
            }
        )
    })
})
