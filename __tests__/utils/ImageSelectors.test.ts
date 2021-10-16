import { getRandomBackgroundImage } from '../../utils/ImageSelectors'

describe('ImageSelectors', () => {
    describe('getRandomBackgroundImage', () => {
        const randomTheories = [
            [0, '/path/1.jpg'],
            [0.2, '/path/2.jpg'],
            [0.4, '/path/3.jpg'],
            [0.6, '/path/4.jpg'],
            [0.8, '/path/5.jpg'],
            [0.999, '/path/5.jpg'],
        ] as const

        it.each(randomTheories)(
            'random value %s generates background uri %s',
            (randomValue, expected) => {
                jest.spyOn(global.Math, 'random').mockReturnValue(randomValue)
                const backgroundUri = getRandomBackgroundImage()
                expect(backgroundUri).toEqual(expected)
            }
        )
    })
})
