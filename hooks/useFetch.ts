import { useEffect, useReducer } from 'react'

type RequestState<T> = {
    isLoading: boolean
    responseData?: T
    error?: Error
}

type RequestAction<T> =
    | { type: 'initialized' }
    | { type: 'completed'; data: T }
    | { type: 'error'; error: Error }

export function useFetch<T>(
    request: RequestInfo,
    init?: RequestInit,
    isReady: boolean = true
) {
    const initialRequestState: RequestState<T> = {
        isLoading: true,
        responseData: undefined,
        error: undefined,
    }

    const requestStateReducer = (
        state: RequestState<T>,
        action: RequestAction<T>
    ): RequestState<T> => {
        switch (action.type) {
            case 'initialized':
                return { ...initialRequestState }
            case 'completed':
                return {
                    isLoading: false,
                    responseData: action.data,
                    error: undefined,
                }
            case 'error':
                return {
                    isLoading: false,
                    responseData: undefined,
                    error: action.error,
                }
            default:
                return state
        }
    }

    const [requestState, dispatch] = useReducer(
        requestStateReducer,
        initialRequestState
    )

    useEffect(() => {
        if (!isReady) return

        const abortController = new AbortController()
        dispatch({ type: 'initialized' })
        ;(async () => {
            try {
                const response = await fetch(request, {
                    ...init,
                    signal: abortController.signal,
                })
                dispatch({ type: 'completed', data: await response?.json() })
            } catch (error: unknown) {
                if (error instanceof Error) {
                    if (error.name === 'AbortError') {
                        return
                    }

                    dispatch({ type: 'error', error })
                }
            }
        })()

        return () => {
            abortController.abort()
        }
    }, [init, request, isReady])

    return requestState
}
