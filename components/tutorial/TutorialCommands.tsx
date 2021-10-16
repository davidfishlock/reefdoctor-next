import React from 'react'
import { Button, HStack, Icon, Tooltip } from '@chakra-ui/react'
import { formatString } from '../../utils/Strings'
import { strings } from '../../consts/Strings'
import { Tutorial, TutorialSessionType } from '../../types/Tutorial'
import {
    FaCheck,
    FaArrowLeft,
    FaCheckDouble,
    FaInfo,
    FaQuestion,
} from 'react-icons/fa'
import { HOMEPAGE } from '../../consts/ClientRoutes'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
type Props = {
    tutorial: Tutorial
    sessionType: TutorialSessionType
    currentQuestionIndex: number
    onShowCurrentAnswer: () => void
    onShowSpeciesInfo: () => void
    onShowAllAnswers: () => void
    onHideAllAnswers: () => void
    isAnswersScreenVisible: boolean
}

const commandButton = {
    fontSize: '2xl',
    colorScheme: 'blue',
    size: 'lg',
}

const commandTooltip = {
    hasArrow: true,
    openDelay: 500,
}

const TutorialCommands: React.FC<Props> = ({
    tutorial,
    sessionType,
    currentQuestionIndex,
    onShowCurrentAnswer,
    onShowSpeciesInfo,
    onShowAllAnswers,
    onHideAllAnswers,
    isAnswersScreenVisible,
}) => {
    const router = useRouter()

    return (
        <>
            {!isAnswersScreenVisible && (
                <HStack spacing={3}>
                    {sessionType === 'Workshop' && (
                        <>
                            <Tooltip
                                {...commandTooltip}
                                label={strings.COMMAND_SHOW_ANSWER}
                            >
                                <Button
                                    {...commandButton}
                                    onClick={onShowCurrentAnswer}
                                >
                                    <Icon as={FaQuestion} />
                                </Button>
                            </Tooltip>

                            <Tooltip
                                {...commandTooltip}
                                label={strings.COMMAND_SPECIES_INFO}
                            >
                                <Button
                                    {...commandButton}
                                    onClick={onShowSpeciesInfo}
                                >
                                    <Icon as={FaInfo} />
                                </Button>
                            </Tooltip>
                        </>
                    )}

                    {currentQuestionIndex === tutorial.questions.length - 1 && (
                        <Tooltip
                            {...commandTooltip}
                            label={strings.COMMAND_GO_TO_ANSWERS}
                        >
                            <Button
                                {...commandButton}
                                onClick={onShowAllAnswers}
                            >
                                <Icon as={FaCheckDouble} />
                            </Button>
                        </Tooltip>
                    )}
                </HStack>
            )}

            {isAnswersScreenVisible && (
                <HStack spacing={3}>
                    <Tooltip
                        {...commandTooltip}
                        label={strings.COMMAND_BACK_TO_QUESTIONS}
                    >
                        <Button {...commandButton} onClick={onHideAllAnswers}>
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
                                {...commandButton}
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
