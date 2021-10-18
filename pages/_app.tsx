import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import 'focus-visible/dist/focus-visible'
import type { AppProps } from 'next/app'
import React from 'react'
import { SWRConfig } from 'swr'
import RootLayout from '../components/frame/RootLayout'
import { getFetcher, showError } from '../requests'
import theme from '../theme'
import { Page } from '../types/page'

function App({ Component, pageProps }: AppProps) {
    return (
        <SWRConfig
            value={{
                revalidateOnFocus: false,
                onError: showError,
                fetcher: getFetcher,
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
