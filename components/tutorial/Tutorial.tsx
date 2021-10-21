import {
    Box,
    Center,
    Flex,
    Spinner,
    Text,
    useDisclosure,
} from '@chakra-ui/react'
import { Category, UVCLevel } from '@prisma/client'
import React, { useContext, useEffect } from 'react'
import { strings } from '../../constants/strings'
import {
    TutorialContext,
    TutorialContextProps,
} from '../../contexts/TutorialContext'
import { Question, TutorialSessionType } from '../../types/tutorial'
import { getSpeciesDetails, isNASpecies } from '../../utils/species'
import { formatString } from '../../utils/strings'
import Carousel from '../common/Carousel'
import Dialog from '../common/Dialog'
import PageCommands from '../common/PageCommands'
import SpeciesDetailsList from '../common/SpeciesDetailsList'
import TutorialAnswers from './TutorialAnswers'
import TutorialCommands from './TutorialCommands'
import TutorialItem from './TutorialItem'

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

    if (!tutorial || error) {
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
                <Dialog
                    isOpen={isInfoDialogOpen}
                    onClose={closeInfoDialog}
                    header={selectedQuestion.species.name}
                    body={
                        isNASpecies(selectedQuestion.species) ? (
                            <Text>{strings.TUTORIAL_SPECIES_NA}</Text>
                        ) : (
                            <SpeciesDetailsList
                                details={getSpeciesDetails(
                                    selectedQuestion.species
                                )}
                            />
                        )
                    }
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
