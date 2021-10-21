import { Category, UVCLevel } from '@prisma/client'
import { DEFAULT_FETCH_CONFIG } from '../constants/fetchConfig'
import { Tutorial, TutorialSessionType } from '../types/tutorial'
import { useFetch } from './useFetch'

export function useTutorial(
    category: Category,
    uvcLevel: UVCLevel,
    sessionType: TutorialSessionType
) {
    const { responseData, isLoading, error } = useFetch<Tutorial>(
        `/api/tutorial?${new URLSearchParams({
            category,
            uvcLevel,
            sessionType,
        })}`,
        DEFAULT_FETCH_CONFIG
    )

    return {
        tutorial: responseData,
        isLoading,
        error,
    }
}
