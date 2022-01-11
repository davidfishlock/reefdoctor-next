import { Category, UVCLevel } from '@prisma/client'
import React, { createContext, ReactNode, useEffect, useReducer } from 'react'
import { TUTORIAL } from '../constants/apiRoutes'
import { DEFAULT_FETCH_CONFIG } from '../constants/fetchConfig'
import { useFetch } from '../hooks/useFetch'
import { Question, Tutorial, TutorialSessionType } from '../types/tutorial'

type ReducerState = {
    selectedQuestionIndex: number
    selectedQuestion?: Question
    isCurrentAnswerVisible: boolean
    isAnswersScreenVisible: boolean
}

export type TutorialState = ReducerState & {
    tutorial?: Tutorial
    isLoading: boolean
    error?: Error
    sessionType?: TutorialSessionType
    dispatch: React.Dispatch<TutorialAction>
}

export const TutorialContext = createContext<TutorialState | undefined>(
    undefined
)

const initialState: ReducerState = {
    selectedQuestionIndex: 0,
    isCurrentAnswerVisible: false,
    isAnswersScreenVisible: false,
}

type TutorialAction =
    | { type: 'setSelectedQuestionIndex'; index: number }
    | { type: 'setSelectedQuestion'; question: Question | undefined }
    | { type: 'setIsCurrentAnswerVisible'; isVisible: boolean }
    | { type: 'setIsAnswersScreenVisible'; isVisible: boolean }

const reducer = (state: ReducerState, action: TutorialAction) => {
    switch (action.type) {
        case 'setSelectedQuestionIndex': {
            return {
                ...state,
                selectedQuestionIndex: action.index,
                isCurrentAnswerVisible: false,
            }
        }
        case 'setSelectedQuestion': {
            return {
                ...state,
                selectedQuestion: action.question,
            }
        }
        case 'setIsCurrentAnswerVisible': {
            return {
                ...state,
                isCurrentAnswerVisible: action.isVisible,
            }
        }
        case 'setIsAnswersScreenVisible': {
            return {
                ...state,
                isAnswersScreenVisible: action.isVisible,
            }
        }
        default:
            return state
    }
}

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
    const [state, dispatch] = useReducer(reducer, initialState)

    const {
        selectedQuestionIndex,
        selectedQuestion,
        isCurrentAnswerVisible,
        isAnswersScreenVisible,
    } = state

    const {
        responseData: tutorial,
        isLoading,
        error,
    } = useFetch<Tutorial>(
        `${TUTORIAL}?${new URLSearchParams({
            category,
            uvcLevel,
            sessionType,
        })}`,
        DEFAULT_FETCH_CONFIG
    )

    useEffect(() => {
        dispatch({
            type: 'setSelectedQuestion',
            question: tutorial?.questions[selectedQuestionIndex],
        })
    }, [tutorial, selectedQuestionIndex, dispatch])

    return (
        <TutorialContext.Provider
            value={{
                tutorial,
                isLoading,
                error,
                sessionType,
                selectedQuestionIndex,
                selectedQuestion,
                isCurrentAnswerVisible,
                isAnswersScreenVisible,
                dispatch,
            }}
        >
            {children}
        </TutorialContext.Provider>
    )
}

export const useTutorialContext = () => {
    const context = React.useContext(TutorialContext)

    if (context === undefined) {
        throw new Error(
            'useTutorialContext must be used within a TutorialProvider'
        )
    }

    return context
}
