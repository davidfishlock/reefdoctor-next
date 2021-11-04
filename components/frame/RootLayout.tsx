import { Box, chakra, Flex } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { ReactNode } from 'react'
import { HOMEPAGE } from '../../constants/clientRoutes'
import { testId } from '../../constants/testId'
import { PageLayout } from '../../types/page'
import { getRandomBackgroundImage } from '../../utils/imageSelectors'
import Header from './Header'
import { PageBackground } from './PageBackground'

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
                data-testid={testId.ROOT_LAYOUT}
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
