import React from 'react'
import { Heading, List, ListIcon, ListItem, Stack } from '@chakra-ui/react'
import { Species } from '@prisma/client'
import { InfoIcon } from '@chakra-ui/icons'
import { getSpeciesDetails } from '../../utils/Species'
import SpeciesDetailsList from '../common/SpeciesDetailsList'

type Props = {
    species?: Species
}

const SpeciesDetails: React.FC<Props> = ({ species }) => {
    const details = species ? getSpeciesDetails(species) : []

    return (
        <Stack spacing={3}>
            <Heading as="h2" size="lg" marginBottom={3}>
                {species?.name}
            </Heading>
            <SpeciesDetailsList details={details} />
        </Stack>
    )
}

export default SpeciesDetails
