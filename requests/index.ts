import { createStandaloneToast } from '@chakra-ui/toast'
import { Category, Species, UVCLevel } from '@prisma/client'
import useSWR from 'swr'
import { useFetch } from '../hooks/useFetch'
import { isCategory, isUVCLevel } from '../types/guards'
import { Tutorial } from '../types/tutorial'
import { getSortedSpeciesByName } from '../utils/array'

const fetchConfig = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
}

export const getFetcher = (info: RequestInfo) =>
    fetch(info, fetchConfig).then((res) => res.json())

export function showError(error: Error, key: string) {
    const toast = createStandaloneToast()

    if (!toast.isActive(key)) {
        toast({
            id: key,
            title: 'Error loading data',
            description: 'Please check your network connection.',
            status: 'error',
        })
    }

    console.log(error)
}

export function useAllSpecies(category: Category, uvcLevel: UVCLevel) {
    const { data, error } = useSWR<Species[], Error | undefined>(
        `/api/species?${new URLSearchParams({ category, uvcLevel })}`
    )

    return {
        speciesList: data ? getSortedSpeciesByName(data) : [],
        isLoading: !error && !data,
        error: error,
    }
}

export function useTutorial(
    category: Category,
    uvcLevel: UVCLevel,
    isReady: boolean
) {
    if (isReady && (!isCategory(category) || !isUVCLevel(uvcLevel))) {
        throw new Error('useTutorial parameters were invalid')
    }

    const { data, isLoading, error } = useFetch<Tutorial>(
        `/api/tutorial?${new URLSearchParams({
            category,
            uvcLevel,
        })}`,
        fetchConfig,
        isReady
    )

    return {
        tutorial: data,
        isLoading,
        error,
    }
}
