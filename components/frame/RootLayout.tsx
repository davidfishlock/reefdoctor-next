import React, { ReactNode } from 'react'
import Header from './Header'
import { Flex, Box, chakra } from '@chakra-ui/react'
import { getRandomBackgroundImage } from '../../utils/ImageSelectors'
import { PageBackground } from './PageBackground'
import { HOMEPAGE } from '../../consts/ClientRoutes'
import { PageLayout } from '../../types/Page'
import { useRouter } from 'next/router'

type Props = {
    children: ReactNode
    layout: PageLayout
}

const backgroundImageUri = getRandomBackgroundImage()

const RootLayout: React.FC<Props> = ({ children, layout }) => {
    const router = useRouter()

    return (
        <>
            <PageBackground
                src={backgroundImageUri}
                isVisible={router.pathname === HOMEPAGE}
            />

            <Flex
                id="content"
                flexDir="column"
                height={layout === 'full' ? '100%' : 'auto'}
            >
                <chakra.header>
                    <Header />
                </chakra.header>

                <chakra.main flexGrow={1} minHeight={0}>
                    <Box
                        px={{ base: 6, md: 9 }}
                        pb={{ base: 6, md: 9 }}
                        boxSize="full"
                    >
                        {children}
                    </Box>
                </chakra.main>
            </Flex>
        </>
    )
}

export default RootLayout
