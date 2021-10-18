import { Category, UVCLevel } from '@prisma/client'
import { useRouter } from 'next/router'
import React from 'react'
import Tutorial from '../components/tutorial/Tutorial'
import { TutorialProvider } from '../contexts/TutorialContext'
import { Page } from '../types/Page'
import { TutorialSessionType } from '../types/Tutorial'

const TutorialPage: Page = () => {
    const router = useRouter()
    const { category, uvcLevel, sessionType } = router.query

    if (!router.isReady) return null

    return (
        <TutorialProvider>
            <Tutorial
                category={category as Category}
                uvcLevel={uvcLevel as UVCLevel}
                tutorialSessionType={sessionType as TutorialSessionType}
            />
        </TutorialProvider>
    )
}

TutorialPage.layout = 'full'

export default TutorialPage
