import {
    getLocalStorageValue,
    setLocalStorageValue,
} from '../../utils/localStorageHelper'
import { defaultSpecies } from '../testDefaults'

describe('localStorageHelper', () => {
    describe('setLocalStorageValue', () => {
        test('stringifies value and calls set on localStorage with provided key', () => {
            const key = 'Some Key'
            const storageSpy = jest.spyOn(Storage.prototype, 'setItem')

            setLocalStorageValue(key, defaultSpecies)

            expect(storageSpy).toBeCalledTimes(1)
            expect(storageSpy).toBeCalledWith(
                key,
                JSON.stringify(defaultSpecies)
            )
        })
    })

    describe('getLocalStorageValue', () => {
        test('parses and returns string value from key', () => {
            const key = 'Some Key'
            const storageSpy = jest
                .spyOn(Storage.prototype, 'getItem')
                .mockReturnValue(JSON.stringify(defaultSpecies))

            const returnValue = getLocalStorageValue(key, 'some fallback')

            expect(storageSpy).toBeCalledTimes(1)
            expect(storageSpy).toBeCalledWith(key)
            expect(returnValue).toEqual(defaultSpecies)
        })

        test('returns fallback value if not found', () => {
            const fallbackValue = 'A fallback'
            const storageSpy = jest
                .spyOn(Storage.prototype, 'getItem')
                .mockReturnValue(null)

            const returnValue = getLocalStorageValue('Some Key', fallbackValue)

            expect(storageSpy).toBeCalledTimes(1)
            expect(returnValue).toEqual(fallbackValue)
        })
    })
})
