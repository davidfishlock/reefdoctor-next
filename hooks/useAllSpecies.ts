import { Category, Species, UVCLevel } from '@prisma/client'
import useSWR from 'swr'
import { SPECIES } from '../constants/apiRoutes'
import { getSortedSpeciesByName } from '../utils/array'

export function useAllSpecies(category: Category, uvcLevel: UVCLevel) {
    const { data, error } = useSWR<Species[], Error | undefined>(
        `${SPECIES}?${new URLSearchParams({ category, uvcLevel })}`
    )

    return {
        speciesList: data ? getSortedSpeciesByName(data) : [],
        isLoading: !error && !data,
        error: error,
    }
}
