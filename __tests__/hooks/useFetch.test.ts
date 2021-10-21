import { renderHook } from '@testing-library/react-hooks'
import { useFetch } from '../../hooks/useFetch'

const mockRequest = 'https://someurl.com'
const mockInit = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
}
const mockData = { example: 'some data' }
const mockResponse = {
    json: () => Promise.resolve(mockData),
} as Response

const fetchMock = jest.fn(() => Promise.resolve(mockResponse))

global.fetch = fetchMock

describe('useFetch', () => {
    test("shouldn't do anything if not ready", () => {
        renderHook(() => useFetch(mockRequest, mockInit, false))

        expect(fetch).not.toBeCalled()
    })

    test('calls fetch with expected values when ready', async () => {
        const { waitForNextUpdate } = renderHook(() =>
            useFetch(mockRequest, mockInit, true)
        )

        await waitForNextUpdate()

        expect(fetch).toBeCalledTimes(1)
        expect(fetch).toBeCalledWith(mockRequest, {
            ...mockInit,
            signal: expect.any(AbortSignal),
        })
    })

    test('applies relevant loading states and returns response from fetch', async () => {
        const { result, waitForNextUpdate } = renderHook(() =>
            useFetch(mockRequest, mockInit, true)
        )

        expect(result.current.isLoading).toEqual(true)

        await waitForNextUpdate()

        expect(result.current.responseData).toEqual(mockData)
        expect(result.current.isLoading).toEqual(false)
        expect(result.current.error).toBeUndefined()
    })

    test('returns error state from fetch', async () => {
        const mockError = new Error('There was an error')
        fetchMock.mockImplementationOnce(() => Promise.reject(mockError))

        const { result, waitForNextUpdate } = renderHook(() =>
            useFetch(mockRequest, mockInit, true)
        )

        await waitForNextUpdate()

        expect(result.current.responseData).toEqual(undefined)
        expect(result.current.isLoading).toEqual(false)
        expect(result.current.error).toEqual(mockError)
    })
})
