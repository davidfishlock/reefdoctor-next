import React from 'react'
import { Box } from '@chakra-ui/react'
import NextLink from 'next/link'
import { NextImage } from './NextImage'
import { useClickable } from '@chakra-ui/clickable'
import { useRouter } from 'next/router'
import { HOMEPAGE } from '../../consts/client-routes'
import { strings } from '../../consts/strings'

const Header: React.FC = () => {
    const router = useRouter()
    const homePageClickable = useClickable({
        onClick: () => router.push(HOMEPAGE)
    })
    const isAtHomePage = router.pathname === HOMEPAGE

    return (
        <Box px={{ base: 6, md: 9 }} py={{ base: 6, md: 9 }}>
            <NextLink href={HOMEPAGE}>
                <Box display='inline-block' {...(!isAtHomePage && homePageClickable)}>
                    <NextImage
                        src="/images/logo-white.png"
                        alt={isAtHomePage ? strings.HOMEPAGE_LOGO : strings.HOMEPAGE_LINK}
                        loading="eager"
                        height={{ base: '56px', md: '64px' }}
                        width={{ base: '303px', md: '347px' }}
                    />
                </Box>
            </NextLink>
        </Box>
    )
}

export default Header
