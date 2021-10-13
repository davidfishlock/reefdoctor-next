import type { NextPage } from 'next'
import { Flex, Box } from '@chakra-ui/react'
import SpeciesSelector from '../components/species-catalog/SpeciesSelector'
import { useState } from 'react'
import { Species } from '@prisma/client'
import SpeciesDetails from '../components/species-catalog/SpeciesDetails'
import Head from 'next/head'
import SpeciesThumbnails from '../components/species-catalog/SpeciesThumbnails'
import { strings } from '../consts/strings'

const Catalog: NextPage = () => {
    const [selectedSpecies, setSelectedSpecies] = useState<Species>()

    return (
        <>
            <Head>
                <title>{strings.SPECIES_CATALOG_TITLE}</title>
                <meta
                    name="description"
                    content={strings.SPECIES_CATALOG_DESCRIPTION}
                />
            </Head>
            <Flex flexDir={{ base: 'column', md: 'row' }}>
                <Box width={{ base: '100%', md: 300, lg: 350 }} flexShrink={0}>
                    <SpeciesSelector onSpeciesSelected={setSelectedSpecies} />
                </Box>
                <Flex
                    flexDir={{ base: 'column', xl: 'row' }}
                    flexGrow={1}
                    alignItems="flex-start"
                >
                    <Box
                        paddingLeft={{ base: 0, md: 12 }}
                        paddingTop={{ base: 12, md: 0 }}
                        flexGrow={1}
                    >
                        <SpeciesDetails species={selectedSpecies} />
                    </Box>
                    <Box
                        width={{ base: '100%', xl: 'auto' }}
                        paddingLeft={{ base: 0, md: 12 }}
                        paddingTop={{ base: 6, xl: 0 }}
                        flexShrink={0}
                    >
                        <SpeciesThumbnails species={selectedSpecies} />
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}

export default Catalog
