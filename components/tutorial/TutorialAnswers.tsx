import React from 'react'
import {
    Heading,
    ListItem,
    OrderedList,
    Flex,
    Wrap,
    HStack,
    Button,
} from '@chakra-ui/react'
import { Tutorial } from '../../types/Tutorial'

type Props = {
    tutorial: Tutorial
}

const TutorialAnswers: React.FC<Props> = ({ tutorial }) => {
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
                    <ListItem fontSize="lg" key={`answer-${index}`}>
                        {question.species.name}
                    </ListItem>
                ))}
            </OrderedList>
        </Flex>
    )
}

export default TutorialAnswers
