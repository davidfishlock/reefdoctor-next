import {
    Spinner,
    Center,
    Text,
    useDisclosure,
    Box,
    Flex,
} from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import {
    TutorialContext,
    TutorialContextProps,
} from '../../contexts/TutorialContext'
import { Question, TutorialSessionType } from '../../types/Tutorial'
import { isTutorialSessionType } from '../../types/Guards'
import { strings } from '../../consts/Strings'
import PageCommands from '../common/PageCommands'
import TutorialCommands from './TutorialCommands'
import SpeciesInfoModal from './SpeciesInfoModal'
import Carousel from '../common/Carousel'
import TutorialItem from './TutorialItem'
import { formatString } from '../../utils/Strings'
import TutorialAnswers from './TutorialAnswers'
import { Category, UVCLevel } from '@prisma/client'

type Props = {
    category: Category
    uvcLevel: UVCLevel
    tutorialSessionType: TutorialSessionType
}

const Tutorial: React.FC<Props> = ({
    category,
    uvcLevel,
    tutorialSessionType,
}) => {
    const {
        initialize,
        tutorial,
        isLoading,
        error,
        sessionType,
        isAnswersScreenVisible,
        setIsCurrentAnswerVisible,
        setSelectedQuestionIndex,
        selectedQuestion,
        setSelectedQuestion,
        selectedQuestionIndex,
    } = useContext(TutorialContext) as TutorialContextProps

    useEffect(() => {
        initialize(category, uvcLevel, tutorialSessionType)
    }, [initialize, category, uvcLevel, tutorialSessionType])

    const {
        isOpen: isInfoDialogOpen,
        onOpen: openInfoDialog,
        onClose: closeInfoDialog,
    } = useDisclosure()

    const onSelectedIndexChanged = (index: number) => {
        setIsCurrentAnswerVisible(false)
        setSelectedQuestionIndex(index)
    }

    if (isLoading) {
        return (
            <Center boxSize="full">
                <Spinner size="xl" />
            </Center>
        )
    }

    if (!tutorial || error || !isTutorialSessionType(sessionType)) {
        return (
            <Center boxSize="full">
                <Text>{strings.TUTORIAL_LOAD_ERROR}</Text>
            </Center>
        )
    }

    return (
        <>
            <PageCommands>
                <TutorialCommands onShowSpeciesInfo={openInfoDialog} />
            </PageCommands>

            {selectedQuestion?.species && (
                <SpeciesInfoModal
                    isOpen={isInfoDialogOpen}
                    onClose={closeInfoDialog}
                    species={selectedQuestion.species}
                />
            )}

            {!isAnswersScreenVisible && (
                <Flex flexDirection="column" boxSize="full">
                    <Box flexGrow={1} minHeight={0}>
                        <Carousel<Question>
                            items={tutorial.questions}
                            onSelectedIndexChanged={onSelectedIndexChanged}
                            selectedIndex={selectedQuestionIndex}
                            onSelectedItemChanged={setSelectedQuestion}
                            onRenderItem={(question, index) => (
                                <TutorialItem
                                    key={`question-${index}`}
                                    question={question}
                                    index={index}
                                />
                            )}
                        />
                    </Box>
                    <Center>
                        <Text fontSize="xl" marginTop={6}>
                            {formatString(
                                strings.TUTORIAL_QUESTION_NUMBER,
                                selectedQuestionIndex + 1,
                                tutorial.questions.length
                            )}
                        </Text>
                    </Center>
                </Flex>
            )}

            {isAnswersScreenVisible && <TutorialAnswers />}
        </>
    )
}

export default Tutorial
