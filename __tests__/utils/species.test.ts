import { Category, UVCLevel } from '@prisma/client'
import {
    getImagePathForSpecies,
    getSpeciesDetails,
    isNASpecies,
} from '../../utils/species'
import { defaultSpecies } from '../testData'

describe('species', () => {
    describe('getSpeciesDetails', () => {
        test('splits species details string on ~ character and returns array', () => {
            const expectedArray = ['line 1', 'line 2', 'line 3']
            const inputString = expectedArray.join('~')
            const species = { ...defaultSpecies, details: inputString }

            const details = getSpeciesDetails(species)

            expect(details).toEqual(expectedArray)
        })
    })

    describe('isNASpecies', () => {
        const speciesTheories = [
            [Category.Fish, UVCLevel.NA, true],
            [Category.Invertebrate, UVCLevel.NA, true],
            [Category.FishFamily, UVCLevel.NA, false],
            [Category.Coral, UVCLevel.NA, false],
            [Category.Fish, UVCLevel.Indicator, false],
            [Category.Fish, UVCLevel.Expert, false],
        ] as const

        test.each(speciesTheories)(
            'Category %p and level %p returns isNA %p',
            (category, uvcLevel, expected) => {
                const species = {
                    ...defaultSpecies,
                    category: category,
                    uvcLevel: uvcLevel,
                }
                const isNA = isNASpecies(species)
                expect(isNA).toEqual(expected)
            }
        )
    })

    describe('getImagePathForSpecies', () => {
        const speciesTheories = [
            [
                {
                    ...defaultSpecies,
                    name: 'Species A',
                    category: Category.Fish,
                    uvcLevel: UVCLevel.Indicator,
                },
                '/images/species/Fish/Indicator/Species A',
            ],
            [
                {
                    ...defaultSpecies,
                    name: 'Species B',
                    category: Category.Coral,
                    uvcLevel: UVCLevel.NA,
                },
                '/images/species/Coral/Species B',
            ],
            [
                {
                    ...defaultSpecies,
                    name: 'Species C',
                    category: Category.Benthic,
                    uvcLevel: UVCLevel.Expert,
                },
                '/images/species/Benthic/Expert/Species C',
            ],
            [
                {
                    ...defaultSpecies,
                    name: 'Species D',
                    category: Category.FishFamily,
                    uvcLevel: UVCLevel.NA,
                },
                '/images/species/FishFamily/Species D',
            ],
        ] as const

        test.each(speciesTheories)(
            'Species returns expected image path',
            (species, expected) => {
                const imagePath = getImagePathForSpecies(species)
                expect(imagePath).toEqual(expected)
            }
        )
    })
})
