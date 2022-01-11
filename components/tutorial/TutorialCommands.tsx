import {
    Button,
    HStack,
    Icon,
    Tooltip,
    useBreakpointValue,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import {
    FaArrowLeft,
    FaCheck,
    FaCheckDouble,
    FaInfo,
    FaQuestion,
} from 'react-icons/fa'
import { HOMEPAGE } from '../../constants/clientRoutes'
import { strings } from '../../constants/strings'
import { testId } from '../../constants/testId'
import { useTutorialContext } from '../../contexts/TutorialContext'
import { formatString } from '../../utils/strings'
import { AnimatedHStack } from '../common/Animation'
type Props = {
    onShowSpeciesInfo: () => void
}

const commandTooltip = {
    hasArrow: true,
    openDelay: 500,
}

const TutorialCommands: React.FC<Props> = ({ onShowSpeciesInfo }) => {
    const router = useRouter()

    const commandButtonStyle = {
        fontSize: '2xl',
        colorScheme: 'blue',
        size: useBreakpointValue({ base: 'md', md: 'lg' }),
    }

    const {
        tutorial,
        sessionType,
        isAnswersScreenVisible,
        selectedQuestionIndex,
        dispatch,
    } = useTutorialContext()

    if (!tutorial || !sessionType) return null

    return (
        <>
            {!isAnswersScreenVisible && (
                <AnimatedHStack
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    direction="row"
                    spacing={3}
                >
                    {sessionType === 'Workshop' && (
                        <>
                            <Tooltip
                                {...commandTooltip}
                                label={strings.COMMAND_SHOW_ANSWER}
                            >
                                <Button
                                    data-testid={
                                        testId.TUTORIAL_SHOW_CURRENT_ANSWER
                                    }
                                    {...commandButtonStyle}
                                    onClick={() =>
                                        dispatch({
                                            type: 'setIsCurrentAnswerVisible',
                                            isVisible: true,
                                        })
                                    }
                                >
                                    <Icon as={FaQuestion} />
                                </Button>
                            </Tooltip>

                            <Tooltip
                                {...commandTooltip}
                                label={strings.COMMAND_SPECIES_INFO}
                            >
                                <Button
                                    data-testid={testId.TUTORIAL_SHOW_DETAILS}
                                    {...commandButtonStyle}
                                    onClick={onShowSpeciesInfo}
                                >
                                    <Icon as={FaInfo} />
                                </Button>
                            </Tooltip>
                        </>
                    )}

                    {selectedQuestionIndex ===
                        tutorial.questions.length - 1 && (
                        <Tooltip
                            {...commandTooltip}
                            label={strings.COMMAND_GO_TO_ANSWERS}
                        >
                            <Button
                                data-testid={testId.TUTORIAL_SHOW_ALL_ANSWERS}
                                {...commandButtonStyle}
                                onClick={() =>
                                    dispatch({
                                        type: 'setIsAnswersScreenVisible',
                                        isVisible: true,
                                    })
                                }
                            >
                                <Icon as={FaCheckDouble} />
                            </Button>
                        </Tooltip>
                    )}
                </AnimatedHStack>
            )}

            {isAnswersScreenVisible && (
                <HStack spacing={3}>
                    <Tooltip
                        {...commandTooltip}
                        label={strings.COMMAND_BACK_TO_QUESTIONS}
                    >
                        <Button
                            data-testid={testId.TUTORIAL_BACK_TO_QUESTIONS}
                            {...commandButtonStyle}
                            onClick={() =>
                                dispatch({
                                    type: 'setIsAnswersScreenVisible',
                                    isVisible: false,
                                })
                            }
                        >
                            <Icon as={FaArrowLeft} />
                        </Button>
                    </Tooltip>
                    <NextLink href={HOMEPAGE}>
                        <Tooltip
                            {...commandTooltip}
                            label={formatString(
                                strings.COMMAND_FINISH,
                                sessionType.toLocaleLowerCase()
                            )}
                        >
                            <Button
                                data-testid={testId.TUTORIAL_COMPLETE}
                                {...commandButtonStyle}
                                colorScheme="green"
                                onClick={() => router.back()}
                            >
                                <Icon as={FaCheck} />
                            </Button>
                        </Tooltip>
                    </NextLink>
                </HStack>
            )}
        </>
    )
}

export default TutorialCommands
