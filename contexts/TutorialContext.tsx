import { Category, UVCLevel } from '@prisma/client'
import React, { createContext, ReactNode, useState } from 'react'
import { useTutorial } from '../hooks/useTutorial'
import { Question, Tutorial, TutorialSessionType } from '../types/tutorial'

export type TutorialContextProps = {
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

type ProviderProps = {
    category: Category
    uvcLevel: UVCLevel
    sessionType: TutorialSessionType
    children: ReactNode
}

export const TutorialProvider: React.FC<ProviderProps> = ({
    category,
    uvcLevel,
    sessionType,
    children,
}) => {
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0)
    const [selectedQuestion, setSelectedQuestion] = useState<Question>()
    const [isCurrentAnswerVisible, setIsCurrentAnswerVisible] = useState(false)
    const [isAnswersScreenVisible, setIsAnswersScreenVisible] = useState(false)

    const { tutorial, isLoading, error } = useTutorial(
        category,
        uvcLevel,
        sessionType
    )

    return (
        <TutorialContext.Provider
            value={{
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
