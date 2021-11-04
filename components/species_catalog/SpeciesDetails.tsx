import { Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import { testId } from '../../constants/testId'
import { useCatalogContext } from '../../contexts/CatalogContext'
import { getSpeciesDetails } from '../../utils/species'
import SpeciesDetailsList from '../common/SpeciesDetailsList'

const SpeciesDetails: React.FC = () => {
    const { selectedSpecies } = useCatalogContext()

    const details = selectedSpecies ? getSpeciesDetails(selectedSpecies) : []

    return (
        <Stack
            data-testid={testId.CATALOG_SPECIES_DETAILS}
            key={`species-details${selectedSpecies?.id || 0}`}
            spacing={3}
        >
            <Heading as="h2" size="lg" marginBottom={3}>
                {selectedSpecies?.name}
            </Heading>
            <SpeciesDetailsList details={details} />
        </Stack>
    )
}

export default SpeciesDetails
