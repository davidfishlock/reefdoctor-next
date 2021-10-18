import React, { createContext, useState } from 'react'
import { Question, Tutorial, TutorialSessionType } from '../types/Tutorial'
import { useTutorial } from '../requests'
import { Category, UVCLevel } from '@prisma/client'

export type TutorialContextProps = {
    initialize: (
        category: Category,
        uvcLevel: UVCLevel,
        sessionType: TutorialSessionType
    ) => void
    tutorial?: Tutorial
    isLoading: boolean
    error?: Error
    sessionType?: TutorialSessionType
    selectedQuestionIndex: number
    setSelectedQuestionIndex: (index: number) => void
    selectedQuestion?: Question
    setSelectedQuestion: (question: Question) => void
    isCurrentAnswerVisible: boolean
    setIsCurrentAnswerVisible: (isVisible: boolean) => void
    isAnswersScreenVisible: boolean
    setIsAnswersScreenVisible: (isVisible: boolean) => void
}

export const TutorialContext = createContext<TutorialContextProps | null>(null)

export const TutorialProvider: React.FC = ({ children }) => {
    const [isReady, setIsReady] = React.useState(false)
    const [category, setCategory] = React.useState<Category>()
    const [sessionType, setSessionType] = React.useState<TutorialSessionType>()
    const [uvcLevel, setUvcLevel] = React.useState<UVCLevel>()
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0)
    const [selectedQuestion, setSelectedQuestion] = useState<Question>()
    const [isCurrentAnswerVisible, setIsCurrentAnswerVisible] = useState(false)
    const [isAnswersScreenVisible, setIsAnswersScreenVisible] = useState(false)

    const { tutorial, isLoading, error } = useTutorial(
        category as Category,
        uvcLevel as UVCLevel,
        isReady
    )

    const initialize = (
        category: Category,
        uvcLevel: UVCLevel,
        sessionType: TutorialSessionType
    ) => {
        setCategory(category)
        setUvcLevel(uvcLevel)
        setSessionType(sessionType)
        setIsReady(true)
    }

    return (
        <TutorialContext.Provider
            value={{
                initialize,
                tutorial,
                isLoading,
                error,
                sessionType,
                selectedQuestionIndex,
                setSelectedQuestionIndex,
                selectedQuestion,
                setSelectedQuestion,
                isCurrentAnswerVisible,
                setIsCurrentAnswerVisible,
                isAnswersScreenVisible,
                setIsAnswersScreenVisible,
            }}
        >
            {children}
        </TutorialContext.Provider>
    )
}
