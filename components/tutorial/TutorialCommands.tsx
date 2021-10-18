import { Button, HStack, Icon, Tooltip } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import React, { useContext } from 'react'
import {
    FaArrowLeft,
    FaCheck,
    FaCheckDouble,
    FaInfo,
    FaQuestion,
} from 'react-icons/fa'
import { HOMEPAGE } from '../../consts/ClientRoutes'
import { strings } from '../../consts/Strings'
import {
    TutorialContext,
    TutorialContextProps,
} from '../../contexts/TutorialContext'
import { formatString } from '../../utils/Strings'
type Props = {
    onShowSpeciesInfo: () => void
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

const TutorialCommands: React.FC<Props> = ({ onShowSpeciesInfo }) => {
    const router = useRouter()

    const {
        tutorial,
        sessionType,
        setIsCurrentAnswerVisible,
        isAnswersScreenVisible,
        setIsAnswersScreenVisible,
        selectedQuestionIndex,
    } = useContext(TutorialContext) as TutorialContextProps

    if (!tutorial || !sessionType) return null

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
                                    onClick={() =>
                                        setIsCurrentAnswerVisible(true)
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
                                    {...commandButton}
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
                                {...commandButton}
                                onClick={() => setIsAnswersScreenVisible(true)}
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
                        <Button
                            {...commandButton}
                            onClick={() => setIsAnswersScreenVisible(false)}
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
