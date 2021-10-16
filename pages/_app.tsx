import type { AppProps } from 'next/app'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import theme from '../theme'
import { getFetcher, showError } from '../requests'
import { SWRConfig } from 'swr'
import RootLayout from '../components/frame/RootLayout'
import 'focus-visible/dist/focus-visible'
import React from 'react'
import { Page } from '../types/Page'

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
