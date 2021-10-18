import { Box, Center, HStack, Image, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { strings } from '../../constants/strings'
import {
    TutorialContext,
    TutorialContextProps,
} from '../../contexts/TutorialContext'
import { Question } from '../../types/tutorial'
import { isNASpecies } from '../../utils/species'
import { formatString } from '../../utils/strings'
import { AnimatedCenter } from '../common/Animation'
import NABadge from './NABadge'

type Props = {
    question: Question
    index: number
}

const TutorialItem: React.FC<Props> = ({ question, index }) => {
    const { isCurrentAnswerVisible } = useContext(
        TutorialContext
    ) as TutorialContextProps

    return (
        <Box boxSize="full" flex="none" position="relative">
            <Center key={`image-${index}`} boxSize="full">
                <Image
                    boxSize="full"
                    objectFit="contain"
                    alt={formatString(
                        strings.TUTORIAL_QUESTION_IMAGE,
                        index + 1
                    )}
                    src={question.imageUri}
                />
            </Center>
            {isCurrentAnswerVisible && (
                <AnimatedCenter
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, type: 'spring' }}
                    position="absolute"
                    left="0"
                    top="0"
                    boxSize="full"
                >
                    <HStack bgColor="black.75" borderRadius={6} p={3}>
                        {isNASpecies(question.species) && (
                            <NABadge marginRight={1} />
                        )}
                        <Text fontSize="2xl">{question.species.name}</Text>
                    </HStack>
                </AnimatedCenter>
            )}
        </Box>
    )
}

export default TutorialItem
