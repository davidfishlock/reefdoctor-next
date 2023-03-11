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
    const isAtHomePage = router.pathname === HOMEPAGE

    return (
        <Flex
            flexDirection={'row'}
            flexWrap={'wrap'}
            px={{ base: 6, md: 9 }}
            py={{ base: 6, md: 9 }}
            sx={{ rowGap: 12 }}
            justifyContent="space-between"
            alignItems={{ base: 'flex-start', sm: 'center' }}
        >
            <h1>
                <NextLink href={HOMEPAGE}>
                    <Box display="inline-block" marginRight={6}>
                        <NextImage
                            src="/images/logo-white.png"
                            alt={strings.REEF_DOCTOR_BRAND}
                            loading="eager"
                            height={{ base: '56px', md: '64px' }}
                            width={{ base: '303px', md: '347px' }}
                        />
                    </Box>
                </NextLink>
            </h1>

            <Box id={PAGE_COMMANDS_MOUNT_POINT} marginTop={2} />
        </Flex>
    )
}

export default Header
