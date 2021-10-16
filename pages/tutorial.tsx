import {
    Spinner,
    Center,
    Text,
    useDisclosure,
    Box,
    Flex,
} from '@chakra-ui/react'
import { useTutorial } from '../requests'
import { Category, UVCLevel } from '@prisma/client'
import React, { useState } from 'react'
import { Question, TutorialSessionType } from '../types/Tutorial'
import Carousel from '../components/common/Carousel'
import { Page } from '../types/Page'
import PageCommands from '../components/common/PageCommands'
import SpeciesInfoModal from '../components/tutorial/SpeciesInfoModal'
import TutorialItem from '../components/tutorial/TutorialItem'
import TutorialCommands from '../components/tutorial/TutorialCommands'
import TutorialAnswers from '../components/tutorial/TutorialAnswers'
import { formatString } from '../utils/Strings'
import { strings } from '../consts/Strings'
import { isTutorialSessionType } from '../types/Guards'
import { useRouter } from "next/router"

type Props = {
    sessionType: TutorialSessionType
    category: Category
    uvcLevel: UVCLevel
}

const Tutorial: Page<Props> = () => {
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedItem, setSelectedItem] = useState<Question>()
    const [isCurrentAnswerVisible, setIsCurrentAnswerVisible] = useState(false)
    const [isAnswersScreenVisible, setIsAnswersScreenVisible] = useState(false)

    const router = useRouter()
    const { category, uvcLevel, sessionType } = router.query

    const { tutorial, isLoading, error } = useTutorial(
        category as Category,
        uvcLevel as UVCLevel,
        router.isReady
    )

    const {
        isOpen: isInfoDialogOpen,
        onOpen: openInfoDialog,
        onClose: closeInfoDialog,
    } = useDisclosure()

    const onSelectedIndexChanged = (index: number) => {
        setIsCurrentAnswerVisible(false)
        setSelectedIndex(index)
    }

    if (!router.isReady || isLoading) {
        return (
            <Center boxSize="full">
                <Spinner size="xl" />
            </Center>
        )
    }

    if (!tutorial || error || !isTutorialSessionType(sessionType)) {
        return (
            <Center boxSize="full">
                <Text>{strings.TUTORIAL_LOAD_ERROR}
                </Text>
            </Center>
        )
    }

    return (
        <>
            <PageCommands>
                <TutorialCommands
                    tutorial={tutorial}
                    currentQuestionIndex={selectedIndex}
                    onShowCurrentAnswer={() => setIsCurrentAnswerVisible(true)}
                    onShowSpeciesInfo={openInfoDialog}
                    onShowAllAnswers={() => setIsAnswersScreenVisible(true)}
                    onHideAllAnswers={() => setIsAnswersScreenVisible(false)}
                    sessionType={sessionType}
                    isAnswersScreenVisible={isAnswersScreenVisible}
                />
            </PageCommands>

            {selectedItem?.species && (
                <SpeciesInfoModal
                    isOpen={isInfoDialogOpen}
                    onClose={closeInfoDialog}
                    species={selectedItem.species}
                />
            )}

            {!isAnswersScreenVisible && (
                <Flex flexDirection="column" boxSize="full">
                    <Box flexGrow={1} minHeight={0}>
                        <Carousel<Question>
                            items={tutorial.questions}
                            onSelectedIndexChanged={onSelectedIndexChanged}
                            selectedIndex={selectedIndex}
                            onSelectedItemChanged={setSelectedItem}
                            onRenderItem={(question, index) => (
                                <TutorialItem
                                    key={`question-${index}`}
                                    question={question}
                                    isAnswerVisible={isCurrentAnswerVisible}
                                    index={index}
                                />
                            )}
                        />
                    </Box>
                    <Center>
                        <Text fontSize="xl" marginTop={6}>
                            {formatString(
                                strings.TUTORIAL_QUESTION_NUMBER,
                                selectedIndex + 1,
                                tutorial.questions.length
                            )}
                        </Text>
                    </Center>
                </Flex>
            )}

            {isAnswersScreenVisible && <TutorialAnswers tutorial={tutorial} />}
        </>
    )
}

Tutorial.layout = 'full'

export default Tutorial
