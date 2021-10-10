import type { NextPage } from 'next'
import { Flex, Box } from '@chakra-ui/react'
import SpeciesSelector from '../components/SpeciesSelector'
import { useState } from 'react'
import { Species } from '@prisma/client'
import SpeciesDetails from '../components/SpeciesDetails'
import Head from 'next/head'
import SpeciesGallery from '../components/SpeciesGallery'

const Catalog: NextPage = () => {
    const [selectedSpecies, setSelectedSpecies] = useState<Species>()

    return (
        <>
            <Head>
                <title>ReefDoctor | UVC Training - Species Catalog</title>
                <meta
                    name="description"
                    content="Select a category and UVC level to browse available species. Select a species to view identification details and sample images."
                />
            </Head>
            <Flex flexDir={['column', 'column', 'row']}>
                <Box width={['100%', '100%', 300, 350]} flexShrink={0}>
                    <SpeciesSelector onSpeciesSelected={setSelectedSpecies} />
                </Box>
                <Flex
                    flexDir={['column', 'column', 'column', 'column', 'row']}
                    flexGrow={1}
                    alignItems="flex-start"
                >
                    <Box
                        paddingLeft={[0, 0, 12]}
                        paddingTop={[6, 6, 0]}
                        flexGrow={1}
                    >
                        <SpeciesDetails species={selectedSpecies} />
                    </Box>
                    <Box
                        paddingLeft={[0, 0, 12]}
                        paddingTop={[6, 6, 0]}
                        flexShrink={0}
                    >
                        <SpeciesGallery species={selectedSpecies} />
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}

export default Catalog
