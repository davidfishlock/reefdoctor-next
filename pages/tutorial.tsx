import { Center, Text } from '@chakra-ui/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import React from 'react'
import QuizDialog from '../components/tutorial/QuizDialog'
import Tutorial from '../components/tutorial/Tutorial'
import WorkshopDialog from '../components/tutorial/WorkshopDialog'
import { strings } from '../constants/strings'
import { TutorialProvider } from '../contexts/TutorialContext'
import { isCategory, isTutorialSessionType, isUVCLevel } from '../types/guards'
import { Page } from '../types/page'
import { TutorialSessionType } from '../types/tutorial'

const TutorialPage: Page = () => {
    const router = useRouter()
    const { category, uvcLevel, sessionType } = router.query

    const pageTitle = `ReefDoctor | UVC Training - ${uvcLevel} ${category} ${sessionType}`

    if (!router.isReady) {
        return (
            <Head>
                <title>{pageTitle}</title>
            </Head>
        )
    }

    if (
        !isCategory(category) ||
        !isUVCLevel(uvcLevel) ||
        !isTutorialSessionType(sessionType)
    )
        return (
            <>
                <Head>
                    <title>ReefDoctor | UVC Training - Tutorial Error</title>
                </Head>
                <Center boxSize="full">
                    <Text>{strings.TUTORIAL_LOAD_ERROR}</Text>
                </Center>
            </>
        )

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <TutorialProvider
                category={category}
                uvcLevel={uvcLevel}
                sessionType={sessionType}
            >
                <Tutorial />
            </TutorialProvider>

            {sessionType == TutorialSessionType.Workshop && <WorkshopDialog />}
            {sessionType == TutorialSessionType.Quiz && <QuizDialog />}
        </>
    )
}

TutorialPage.layout = 'full'

export default TutorialPage
