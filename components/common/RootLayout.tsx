import React, { ReactNode } from 'react'
import Header from './Header'
import { Flex, Box } from '@chakra-ui/react'
import {
    backgroundsCount,
    backgroundsExtension,
    backgroundsPath,
    getRandomBackgroundImage,
} from '../../utils/backgrounds'
import { PageBackground } from './PageBackground'
import { useRouter } from 'next/router'
import { HOMEPAGE } from '../../consts/client-routes'

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
            <PageBackground
                src={backgroundImageUri}
                isVisible={router.pathname === HOMEPAGE}
            />

            <Flex flexDir="column">
                <header>
                    <Header />
                </header>

                <main>
                    <Box px={{ base: 6, md: 9 }} pb={{ base: 6, md: 9 }}>
                        {children}
                    </Box>
                </main>
            </Flex>
        </Box>
    )
}

export default RootLayout
