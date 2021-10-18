import { Heading, Stack } from '@chakra-ui/react'
import React, { useContext } from 'react'
import {
    CatalogContext,
    CatalogContextProps,
} from '../../contexts/CatalogContext'
import { getSpeciesDetails } from '../../utils/species'
import SpeciesDetailsList from '../common/SpeciesDetailsList'

const SpeciesDetails: React.FC = () => {
    const { selectedSpecies } = useContext(
        CatalogContext
    ) as CatalogContextProps

    const details = selectedSpecies ? getSpeciesDetails(selectedSpecies) : []

    return (
        <Stack spacing={3}>
            <Heading as="h2" size="lg" marginBottom={3}>
                {selectedSpecies?.name}
            </Heading>
            <SpeciesDetailsList details={details} />
        </Stack>
    )
}

export default SpeciesDetails
