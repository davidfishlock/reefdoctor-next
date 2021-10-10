import React from 'react'
import { Heading, List, ListIcon, ListItem, Stack } from '@chakra-ui/react'
import { Species } from '@prisma/client'
import { InfoIcon } from '@chakra-ui/icons'

type Props = {
    species?: Species
}

const SpeciesDetails: React.FC<Props> = ({ species }) => {
    const details = species?.details?.split('~')
    return (
        <Stack spacing={3}>
            <Heading as="h2" size="lg" marginBottom={3}>
                {species?.name}
            </Heading>
            <List spacing={6} marginBottom={3}>
                {details?.map((text, index) => (
                    <ListItem key={index} marginBottom={6}>
                        <ListIcon
                            verticalAlign="initial"
                            marginRight={3}
                            height="12px"
                            width="12px"
                            as={InfoIcon}
                            color="green.500"
                        />
                        {text}
                    </ListItem>
                ))}
            </List>
        </Stack>
    )
}

export default SpeciesDetails
