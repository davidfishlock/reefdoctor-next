import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const globalStyles = {
    'html, body, #__next': {
        height: '100%',
    },
    '.js-focus-visible :focus:not([data-focus-visible-added])': {
        outline: 'none',
        boxShadow: 'none',
    },
    ':not(select)::-webkit-scrollbar': {
        width: 2,
    },
    ':not(select)::-webkit-scrollbar-track': {
        background: 'blackAlpha.200',
        '-webkit-border-radius': 2,
        borderRadius: 2,
    },
    ':not(select)::-webkit-scrollbar-thumb': {
        '-webkit-border-radius': 2,
        borderRadius: 2,
        background: 'whiteAlpha.200',
    },
    ':not(select)::-webkit-scrollbar-thumb:hover': {
        background: 'whiteAlpha.300',
    },
}

const index = extendTheme({
    config,
    styles: {
        global: globalStyles,
    },
})
export default index
