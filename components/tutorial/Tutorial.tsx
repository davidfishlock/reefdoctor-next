import { Box, Center, Spinner, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { strings } from '../../constants/strings'
import { testId } from '../../constants/testId'
import { useTutorialContext } from '../../contexts/TutorialContext'
import { Question } from '../../types/tutorial'
import { getSpeciesDetails, isNASpecies } from '../../utils/species'
import { formatString } from '../../utils/strings'
import { AnimatedFlex } from '../common/Animation'
import Carousel from '../common/Carousel'
import Dialog from '../common/Dialog'
import PageCommands from '../common/PageCommands'
import SpeciesDetailsList from '../common/SpeciesDetailsList'
import TutorialAnswers from './TutorialAnswers'
import TutorialCommands from './TutorialCommands'
import TutorialItem from './TutorialItem'

const Tutorial: React.FC = () => {
    const {
        tutorial,
        isLoading,
        error,
        isAnswersScreenVisible,
        selectedQuestion,
        selectedQuestionIndex,
        dispatch,
    } = useTutorialContext()

    const {
        isOpen: isInfoDialogOpen,
        onOpen: openInfoDialog,
        onClose: closeInfoDialog,
    } = useDisclosure()

    const onSelectedIndexChanged = (index: number) => {
        dispatch({ type: 'setSelectedQuestionIndex', index })
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
                <AnimatedFlex
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    flexDirection="column"
                    boxSize="full"
                >
                    <Center marginBottom={6}>
                        <Text
                            aria-live="polite"
                            data-testid={testId.TUTORIAL_QUESTION_NUMBER}
                            fontSize="xl"
                        >
                            {formatString(
                                strings.TUTORIAL_QUESTION_NUMBER,
                                selectedQuestionIndex + 1,
                                tutorial.questions.length
                            )}
                        </Text>
                    </Center>
                    <Box flexGrow={1} minHeight={0}>
                        <Carousel<Question>
                            label={strings.TUTORIAL_QUESTIONS_CAROUSEL}
                            nextButtonLabel={strings.TUTORIAL_NEXT_QUESTION}
                            previousButtonLabel={
                                strings.TUTORIAL_PREVIOUS_QUESTION
                            }
                            items={tutorial.questions}
                            onSelectedIndexChanged={onSelectedIndexChanged}
                            selectedIndex={selectedQuestionIndex}
                            onRenderItem={(question, index) => (
                                <TutorialItem
                                    key={`question-${index}`}
                                    question={question}
                                    index={index}
                                />
                            )}
                        />
                    </Box>
                </AnimatedFlex>
            )}

            {isAnswersScreenVisible && <TutorialAnswers />}
        </>
    )
}

export default Tutorial
