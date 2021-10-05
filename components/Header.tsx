import React from 'react'
import { Box, Link, Image, VisuallyHidden } from '@chakra-ui/react'

const Header: React.FC = () => {
    return (
        <Box p={6}>
            <Link href="/">
                <Image src="images/Logo_White.png" h={[14, 14, 16]} alt="Reef Doctor" />
                <VisuallyHidden>Home</VisuallyHidden>
            </Link>
        </Box>
    )
}

export default Header
