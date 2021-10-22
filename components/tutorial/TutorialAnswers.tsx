import {
    Flex,
    Heading,
    HStack,
    ListItem,
    OrderedList,
    Text,
} from '@chakra-ui/react'
import React from 'react'
import { useTutorialContext } from '../../contexts/TutorialContext'
import { isNASpecies } from '../../utils/species'
import NABadge from './NABadge'

const TutorialAnswers: React.FC = () => {
    const { tutorial } = useTutorialContext()

    if (!tutorial) return null

    return (
        <Flex flexDirection="column" boxSize="full">
            <Heading>Answers</Heading>

            <OrderedList
                marginTop={6}
                spacing={3}
                sx={{
                    columnCount: { base: 1, sm: 2, md: 2, lg: 3, xl: 4 },
                    columnFill: 'auto',
                }}
                flexGrow={1}
            >
                {tutorial.questions.map((question, index) => (
                    <ListItem
                        fontSize="xl"
                        key={`answer-${index}`}
                        marginRight={6}
                    >
                        <HStack>
                            {isNASpecies(question.species) && (
                                <NABadge fontSize="sm" />
                            )}
                            <Text>{question.species.name}</Text>
                        </HStack>
                    </ListItem>
                ))}
            </OrderedList>
        </Flex>
    )
}

export default TutorialAnswers
