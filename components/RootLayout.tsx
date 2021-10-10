import React, { ReactNode } from 'react'
import Header from './Header'
import { Flex, Box } from '@chakra-ui/react'
import {
    backgroundsCount,
    backgroundsExtension,
    backgroundsPath,
    getRandomBackgroundImage,
} from '../utils/backgrounds'
import { FullScreenBackground } from './FullScreenBackground'
import { useRouter } from 'next/router'

type Props = {
    children: ReactNode
    isHomePage?: boolean
}

const backgroundImageUri = getRandomBackgroundImage(
    backgroundsPath,
    backgroundsCount,
    backgroundsExtension
)

const RootLayout: React.FC<Props> = ({ children, isHomePage = false }) => {
    const router = useRouter()

    return (
        <Box>
            <FullScreenBackground
                src={backgroundImageUri}
                isVisible={router.pathname === '/'}
            />

            <Flex flexDir="column">
                <header>
                    <Header />
                </header>

                <main>
                    <Box px={6} pb={6}>
                        {children}
                    </Box>
                </main>
            </Flex>
        </Box>
    )
}

export default RootLayout
