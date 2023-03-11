import { Center, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { strings } from '../../constants/strings'
import { testId } from '../../constants/testId'
import { useTutorialContext } from '../../contexts/TutorialContext'
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
    const { isCurrentAnswerVisible, selectedQuestionIndex } =
        useTutorialContext()

    return (
        <>
            <Center boxSize="full">
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
            {isCurrentAnswerVisible && selectedQuestionIndex === index && (
                <AnimatedCenter
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, type: 'spring' }}
                    position="absolute"
                    left="0"
                    top="0"
                    boxSize="full"
                >
                    <HStack bgColor="blackAlpha.800" borderRadius={6} p={3}>
                        {isNASpecies(question.species) && (
                            <NABadge marginRight={1} />
                        )}
                        <Text
                            aria-live="polite"
                            data-testid={testId.TUTORIAL_CURRENT_ANSWER}
                            fontSize="2xl"
                        >
                            {question.species.name}
                        </Text>
                    </HStack>
                </AnimatedCenter>
            )}
        </>
    )
}

export default TutorialItem
