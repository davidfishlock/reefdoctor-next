import type { AppProps } from 'next/app'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import theme from '../theme'
import { getFetcher, showError } from '../requests'
import { SWRConfig } from 'swr'
import RootLayout from '../components/common/RootLayout'
import 'focus-visible/dist/focus-visible'

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
                <RootLayout>
                    <Component {...pageProps} />
                </RootLayout>
            </ChakraProvider>
        </SWRConfig>
    )
}

export default App
