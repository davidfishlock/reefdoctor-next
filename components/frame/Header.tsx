import { useClickable } from '@chakra-ui/clickable'
import { Box, Flex } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { HOMEPAGE } from '../../constants/clientRoutes'
import { strings } from '../../constants/strings'
import { NextImage } from '../common/NextImage'

export const PAGE_COMMANDS_MOUNT_POINT = 'page-commands'

const Header: React.FC = () => {
    const router = useRouter()
    const homePageClickable = useClickable({
        onClick: () => router.back(),
    })
    const isAtHomePage = router.pathname === HOMEPAGE

    return (
        <Flex
            flexDirection={{ base: 'column', md: 'row' }}
            px={{ base: 6, md: 9 }}
            py={{ base: 6, md: 9 }}
            justifyContent="space-between"
            alignItems={{ base: 'flex-start', md: 'center' }}
        >
            <NextLink href={HOMEPAGE}>
                <Box
                    display="inline-block"
                    {...(!isAtHomePage && homePageClickable)}
                >
                    <NextImage
                        src="/images/logo-white.png"
                        alt={
                            isAtHomePage
                                ? strings.HOMEPAGE_LOGO
                                : strings.HOMEPAGE_LINK
                        }
                        loading="eager"
                        height={{ base: '56px', md: '64px' }}
                        width={{ base: '303px', md: '347px' }}
                    />
                </Box>
            </NextLink>

            <Box
                id={PAGE_COMMANDS_MOUNT_POINT}
                marginTop={{ base: 6, md: 0 }}
            />
        </Flex>
    )
}

export default Header
