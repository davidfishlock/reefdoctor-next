import { getSortedSpeciesByName, shuffle } from '../../utils/array'
import { defaultSpecies } from '../testData'

const species = [
    { ...defaultSpecies, id: 3, name: 'Species D' },
    { ...defaultSpecies, id: 2, name: 'Species C' },
    { ...defaultSpecies, id: 1, name: 'Species B' },
    { ...defaultSpecies, id: 0, name: 'Species A' },
]

describe('array', () => {
    describe('getSortedSpeciesByName', () => {
        test('arranges species by name', () => {
            const sortedSpecies = getSortedSpeciesByName(species)

            expect(sortedSpecies[0]).toEqual(species[3])
            expect(sortedSpecies[1]).toEqual(species[2])
            expect(sortedSpecies[2]).toEqual(species[1])
            expect(sortedSpecies[3]).toEqual(species[0])
        })

        test('does not mutate original array', () => {
            const originalInput = [...species]

            getSortedSpeciesByName(species)

            expect(species).toEqual(originalInput)
        })
    })

    describe('shuffle', () => {
        test('places items in order defined by random', () => {
            jest.spyOn(global.Math, 'random').mockReturnValue(1)

            const shuffledSpecies = shuffle(species)

            expect(shuffledSpecies[0]).toEqual(species[3])
            expect(shuffledSpecies[1]).toEqual(species[2])
            expect(shuffledSpecies[2]).toEqual(species[1])
            expect(shuffledSpecies[3]).toEqual(species[0])
        })

        test('does not mutate original array', () => {
            const originalInput = [...species]

            shuffle(species)

            expect(species).toEqual(originalInput)
        })
    })
})
