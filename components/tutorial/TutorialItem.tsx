import React from 'react'
import { Box, Center, Image, Text } from '@chakra-ui/react'
import { formatString } from '../../utils/Strings'
import { strings } from '../../consts/Strings'
import { AnimatedCenter } from '../common/Animation'
import { Question } from '../../types/Tutorial'

type Props = {
    question: Question
    isAnswerVisible: boolean
    index: number
}

const TutorialItem: React.FC<Props> = ({
    question,
    isAnswerVisible,
    index,
}) => {
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
            {isAnswerVisible && (
                <AnimatedCenter
                    initial={{ scale: 0.4, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4, type: 'spring' }}
                    position="absolute"
                    left="0"
                    top="0"
                    boxSize="full"
                >
                    <Text
                        fontSize="2xl"
                        borderRadius={6}
                        bgColor="black.75"
                        p={3}
                    >
                        {question.species.name}
                    </Text>
                </AnimatedCenter>
            )}
        </Box>
    )
}

export default TutorialItem
