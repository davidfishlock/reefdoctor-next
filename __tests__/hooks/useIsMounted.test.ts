import { renderHook } from '@testing-library/react-hooks'
import { useIsMounted } from '../../hooks/useIsMounted'

describe('useIsMounted', () => {
    test('returns true when mounted and false when unmounted', () => {
        const { unmount, result } = renderHook(() => useIsMounted())

        expect(result.current()).toEqual(true)

        unmount()

        expect(result.current()).toEqual(false)
    })
})
