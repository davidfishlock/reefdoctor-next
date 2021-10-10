import React from 'react'
import { Box, VisuallyHidden, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import { NextImage } from './NextImage'

const Header: React.FC = () => {
    return (
        <Box p={6}>
            <NextLink href="/" passHref>
                <Link>
                    <NextImage
                        height={['56px', '56px', '64px']}
                        width={['303px', '303px', '347px']}
                        src="/images/Logo_White.png"
                        alt="Reef Doctor"
                        loading="eager"
                    />
                    <VisuallyHidden>Home</VisuallyHidden>
                </Link>
            </NextLink>
        </Box>
    )
}

export default Header
