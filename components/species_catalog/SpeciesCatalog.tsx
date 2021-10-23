import { Box, Center, Flex, Spinner } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { useCatalogContext } from '../../contexts/CatalogContext'
import { AnimatedBox, AnimatedFlex } from '../common/Animation'
import SpeciesDetails from './SpeciesDetails'
import SpeciesSelector from './SpeciesSelector'
import SpeciesThumbnails from './SpeciesThumbnails'

const childAnimations = {
    hide: {
        opacity: 0,
        transition: {
            duration: 0.3,
        },
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.5,
        },
    },
}

const SpeciesCatalog: React.FC = ({}) => {
    const { isLoading, selectedSpecies } = useCatalogContext()

    return (
        <AnimatedFlex
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
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
                <AnimatePresence exitBeforeEnter>
                    <Flex
                        flexDir={{ base: 'column', xl: 'row' }}
                        flexGrow={1}
                        overflowY="auto"
                        justifyItems={'flex-start'}
                        paddingBottom={{ base: 6, md: 0 }}
                    >
                        <AnimatedBox
                            key={`species-details${selectedSpecies?.id ?? 0}`}
                            variants={childAnimations}
                            initial="hide"
                            animate="show"
                            exit="hide"
                            paddingLeft={{ base: 0, md: 12 }}
                            paddingTop={{ base: 9, md: 0 }}
                            flexGrow={{ base: 0, xl: 1 }}
                        >
                            <SpeciesDetails />
                        </AnimatedBox>
                        <AnimatedBox
                            key={`species-thumbnails${
                                selectedSpecies?.id ?? 0
                            }`}
                            variants={childAnimations}
                            initial="hide"
                            animate="show"
                            exit="hide"
                            width={{ base: '100%', xl: 'auto' }}
                            paddingLeft={{ base: 0, md: 12 }}
                            paddingTop={{ base: 6, xl: 0 }}
                            flexShrink={0}
                        >
                            <SpeciesThumbnails />
                        </AnimatedBox>
                    </Flex>
                </AnimatePresence>
            )}
        </AnimatedFlex>
    )
}

export default SpeciesCatalog
