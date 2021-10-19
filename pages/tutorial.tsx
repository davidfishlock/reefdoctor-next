import { Category, UVCLevel } from '@prisma/client'
import { useRouter } from 'next/router'
import React from 'react'
import QuizDialog from '../components/tutorial/QuizDialog'
import Tutorial from '../components/tutorial/Tutorial'
import WorkshopDialog from '../components/tutorial/WorkshopDialog'
import { TutorialProvider } from '../contexts/TutorialContext'
import { Page } from '../types/page'
import { TutorialSessionType } from '../types/tutorial'

const TutorialPage: Page = () => {
    const router = useRouter()
    const { category, uvcLevel, sessionType } = router.query

    if (!router.isReady) return null

    return (
        <>
            <TutorialProvider>
                <Tutorial
                    category={category as Category}
                    uvcLevel={uvcLevel as UVCLevel}
                    tutorialSessionType={sessionType as TutorialSessionType}
                />
            </TutorialProvider>

            {sessionType == TutorialSessionType.Workshop && <WorkshopDialog />}
            {sessionType == TutorialSessionType.Quiz && <QuizDialog />}
        </>
    )
}

TutorialPage.layout = 'full'

export default TutorialPage
