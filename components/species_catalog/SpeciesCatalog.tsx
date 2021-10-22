import { Box, Center, Flex, Spinner } from '@chakra-ui/react'
import React from 'react'
import { useCatalogContext } from '../../contexts/CatalogContext'
import SpeciesDetails from './SpeciesDetails'
import SpeciesSelector from './SpeciesSelector'
import SpeciesThumbnails from './SpeciesThumbnails'

const SpeciesCatalog: React.FC = ({}) => {
    const { isLoading } = useCatalogContext()

    return (
        <Flex
            flexDir={{ base: 'column', md: 'row' }}
            width="100%"
            height={{ base: 'auto', md: '100%' }}
        >
            <Box width={{ base: '100%', md: 300, lg: 350 }} flexShrink={0}>
                <SpeciesSelector />
            </Box>

            {isLoading ? (
                <Center boxSize="full" flexGrow={1} padding={20}>
                    <Spinner size="xl" />
                </Center>
            ) : (
                <Flex
                    flexDir={{ base: 'column', xl: 'row' }}
                    flexGrow={1}
                    overflowY="auto"
                    justifyItems={'flex-start'}
                    paddingBottom={{ base: 6, md: 0 }}
                >
                    <Box
                        paddingLeft={{ base: 0, md: 12 }}
                        paddingTop={{ base: 9, md: 0 }}
                        flexGrow={{ base: 0, xl: 1 }}
                    >
                        <SpeciesDetails />
                    </Box>
                    <Box
                        width={{ base: '100%', xl: 'auto' }}
                        paddingLeft={{ base: 0, md: 12 }}
                        paddingTop={{ base: 6, xl: 0 }}
                        flexShrink={0}
                    >
                        <SpeciesThumbnails />
                    </Box>
                </Flex>
            )}
        </Flex>
    )
}

export default SpeciesCatalog
