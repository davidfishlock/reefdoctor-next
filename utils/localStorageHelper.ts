export function getLocalStorageValue<T>(key: string, fallbackValue: T) {
    if (typeof window === 'undefined') {
        console.error(
            'getLocalStorageValue: should not be called prior to hydration. Consider wrapping the call with useEffect'
        )
        return fallbackValue
    }

    try {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : fallbackValue
    } catch (error) {
        console.log(error)
        return fallbackValue
    }
}

export function setLocalStorageValue(key: string, value: unknown) {
    if (typeof window === 'undefined') {
        console.error(
            'setLocalStorageValue: should not be called prior to hydration. Consider wrapping the call with useEffect'
        )
        return
    }

    try {
        window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.log(error)
    }
}
