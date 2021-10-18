import React from 'react'
import { List, ListIcon, ListItem } from '@chakra-ui/react'
import { InfoIcon } from '@chakra-ui/icons'

type Props = {
    details: string[]
}

const SpeciesDetailsList: React.FC<Props> = ({ details }) => {
    return (
        <List spacing={6}>
            {details.map((text, index) => (
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
    )
}

export default SpeciesDetailsList
