import { Center, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import QuizDialog from '../components/tutorial/QuizDialog'
import Tutorial from '../components/tutorial/Tutorial'
import WorkshopDialog from '../components/tutorial/WorkshopDialog'
import { strings } from '../constants/strings'
import { TutorialProvider } from '../contexts/TutorialContext'
import { Page } from '../types/page'
import { isTutorialQuery } from '../types/queries'
import { TutorialSessionType } from '../types/tutorial'

const TutorialPage: Page = () => {
    const router = useRouter()

    if (!router.isReady) return null

    if (!router.query || !isTutorialQuery(router.query))
        return (
            <Center boxSize="full">
                <Text>{strings.TUTORIAL_LOAD_ERROR}</Text>
            </Center>
        )

    const { category, uvcLevel, sessionType } = router.query

    return (
        <>
            <TutorialProvider>
                <Tutorial
                    category={category}
                    uvcLevel={uvcLevel}
                    tutorialSessionType={sessionType}
                />
            </TutorialProvider>

            {sessionType == TutorialSessionType.Workshop && <WorkshopDialog />}
            {sessionType == TutorialSessionType.Quiz && <QuizDialog />}
        </>
    )
}

TutorialPage.layout = 'full'

export default TutorialPage
