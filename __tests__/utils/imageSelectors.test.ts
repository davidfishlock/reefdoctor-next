import { getRandomBackgroundImage } from '../../utils/imageSelectors'

describe('ImageSelectors', () => {
    describe('getRandomBackgroundImage', () => {
        const randomTheories = [
            [0, '/images/backgrounds/1.jpg'],
            [0.25, '/images/backgrounds/2.jpg'],
            [0.5, '/images/backgrounds/3.jpg'],
            [0.75, '/images/backgrounds/4.jpg'],
            [0.99, '/images/backgrounds/4.jpg'],
        ] as const

        test.each(randomTheories)(
            'random value %s generates background uri %s',
            (randomValue, expected) => {
                jest.spyOn(global.Math, 'random').mockReturnValue(randomValue)
                const backgroundUri = getRandomBackgroundImage()
                expect(backgroundUri).toEqual(expected)
            }
        )
    })
})
