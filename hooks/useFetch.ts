import { useEffect, useState } from 'react'

export function useFetch<T>(
    request: RequestInfo,
    init?: RequestInit,
    isReady: boolean = true
) {
    const [data, setData] = useState<T | undefined>(undefined)
    const [error, setError] = useState<Error | undefined>(undefined)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (!isReady) return

        const abortController = new AbortController()
        setIsLoading(true)
        ;(async () => {
            try {
                const response = await fetch(request, {
                    ...init,
                    signal: abortController.signal,
                })
                setData(await response?.json())
                setIsLoading(false)
            } catch (error: unknown) {
                if (error instanceof Error) {
                    if (error.name === 'AbortError') {
                        return
                    }
                    setError(error)
                }

                setIsLoading(false)
            }
        })()
        return () => {
            abortController.abort()
        }
    }, [init, request, isReady])

    return { data, isLoading, error }
}
