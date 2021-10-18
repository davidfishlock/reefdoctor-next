import React, { useContext } from 'react'
import { Box, Center, HStack, Image, Text } from '@chakra-ui/react'
import { formatString } from '../../utils/Strings'
import { strings } from '../../consts/Strings'
import { AnimatedCenter } from '../common/Animation'
import { Question } from '../../types/Tutorial'
import { isNASpecies } from '../../utils/Species'
import NABadge from './NABadge'
import {
    TutorialContext,
    TutorialContextProps,
} from '../../contexts/TutorialContext'

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
