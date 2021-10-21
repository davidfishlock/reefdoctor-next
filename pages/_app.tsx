import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import 'focus-visible/dist/focus-visible'
import type { AppProps } from 'next/app'
import React from 'react'
import { SWRConfig } from 'swr'
import RootLayout from '../components/frame/RootLayout'
import { DEFAULT_FETCH_CONFIG } from '../constants/fetchConfig'
import theme from '../theme'
import { Page } from '../types/page'
import { showErrorToast } from '../utils/toast'

function App({ Component, pageProps }: AppProps) {
    return (
        <SWRConfig
            value={{
                revalidateOnFocus: false,
                onError: showErrorToast,
                fetcher: (info: RequestInfo) =>
                    fetch(info, DEFAULT_FETCH_CONFIG).then((res) => res.json()),
                provider: () => new Map(),
            }}
        >
            <ChakraProvider theme={theme}>
                <CSSReset />
                <RootLayout layout={(Component as Page).layout ?? 'scrolling'}>
                    <Component {...pageProps} />
                </RootLayout>
            </ChakraProvider>
        </SWRConfig>
    )
}

export default App
