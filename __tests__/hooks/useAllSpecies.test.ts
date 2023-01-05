import { Category, UVCLevel } from '@prisma/client'
import { renderHook } from '@testing-library/react'
import * as useSWR from 'swr'
import { SWRResponse } from 'swr'
import { SPECIES } from '../../constants/apiRoutes'
import { useAllSpecies } from '../../hooks/useAllSpecies'
import { defaultSpecies } from '../testData'

const unorderedSpecies = [
    { ...defaultSpecies, name: 'Species B' },
    { ...defaultSpecies, name: 'Species D' },
    { ...defaultSpecies, name: 'Species A' },
    { ...defaultSpecies, name: 'Species C' },
] as const

const useSWRSpy = jest.spyOn(useSWR, 'default')

const initialState = {
    data: undefined,
    error: undefined,
} as SWRResponse<any, any>

const loadedState = {
    ...initialState,
    data: unorderedSpecies,
} as SWRResponse<any, any>

const errorState = {
    ...initialState,
    error: new Error(),
} as SWRResponse<any, any>

describe('useAllSpecies', () => {
    test('calls useSWR with expected values', async () => {
        useSWRSpy.mockImplementation(() => initialState)

        renderHook(() => useAllSpecies(Category.Fish, UVCLevel.Indicator))

        expect(useSWRSpy).toBeCalledTimes(1)
        expect(useSWRSpy).toBeCalledWith(
            `${SPECIES}?category=${Category.Fish}&uvcLevel=${UVCLevel.Indicator}`
        )
    })

    test('returns calculated loading state from SWR', async () => {
        useSWRSpy.mockImplementation(() => initialState)

        const { result } = renderHook(() =>
            useAllSpecies(Category.Fish, UVCLevel.Indicator)
        )

        expect(result.current.isLoading).toEqual(true)
    })

    test('returns sorted species', async () => {
        useSWRSpy.mockImplementation(() => loadedState)

        const { result } = renderHook(() =>
            useAllSpecies(Category.Fish, UVCLevel.Indicator)
        )

        expect(result.current.speciesList[0].name).toEqual('Species A')
        expect(result.current.speciesList[1].name).toEqual('Species B')
        expect(result.current.speciesList[2].name).toEqual('Species C')
        expect(result.current.speciesList[3].name).toEqual('Species D')
    })

    test('returns error state', async () => {
        useSWRSpy.mockImplementation(() => errorState)

        const { result } = renderHook(() =>
            useAllSpecies(Category.Fish, UVCLevel.Indicator)
        )

        expect(result.current.error).toEqual(errorState.error)
    })
})
