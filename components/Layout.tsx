import React, { ReactNode } from 'react'
import Header from './Header'
import { Flex, Box } from '@chakra-ui/react'

type Props = {
    children: ReactNode
}

const Layout: React.FC<Props> = (props) => (
    <Flex flexDir="column">
        <header>
            <Header />
        </header>

        <main>
            <Box px={6}>{props.children}</Box>
        </main>
    </Flex>
)

export default Layout
