import { Category, Species, UVCLevel } from '@prisma/client'
import React, { createContext, ReactNode, useEffect, useReducer } from 'react'
import { useAllSpecies } from '../hooks/useAllSpecies'
import { isUVCCategory } from '../utils/uvcDefinitions'

type ReducerState = {
    selectedCategory: Category
    selectedUVCLevel: UVCLevel
    selectedSpecies?: Species
}

export type CatalogState = ReducerState & {
    speciesList: Species[]
    isLoading: boolean
    error?: Error
    dispatch: React.Dispatch<CatalogAction>
}

const CatalogContext = createContext<CatalogState | undefined>(undefined)

const initialState: ReducerState = {
    selectedCategory: Category.Fish,
    selectedUVCLevel: UVCLevel.Indicator,
}

type CatalogAction =
    | { type: 'selectCategory'; category: Category }
    | { type: 'selectUVCLevel'; uvcLevel: UVCLevel }
    | { type: 'selectSpecies'; species: Species | undefined }

const reducer = (state: ReducerState, action: CatalogAction) => {
    switch (action.type) {
        case 'selectCategory': {
            return {
                ...state,
                selectedCategory: action.category,
            }
        }
        case 'selectUVCLevel': {
            return {
                ...state,
                selectedUVCLevel: action.uvcLevel,
            }
        }
        case 'selectSpecies': {
            return {
                ...state,
                selectedSpecies: action.species,
            }
        }
        default:
            return state
    }
}

type Props = {
    children: ReactNode
}

export const CatalogProvider: React.FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const { selectedCategory, selectedUVCLevel, selectedSpecies } = state

    const { speciesList, isLoading, error } = useAllSpecies(
        selectedCategory,
        isUVCCategory(selectedCategory) ? selectedUVCLevel : UVCLevel.NA
    )

    useEffect(() => {
        if (
            speciesList?.length &&
            !speciesList.find((species) => species === selectedSpecies)
        ) {
            dispatch({
                type: 'selectSpecies',
                species: speciesList.length ? speciesList[0] : undefined,
            })
        }
    }, [speciesList, selectedSpecies, dispatch])

    return (
        <CatalogContext.Provider
            value={{
                speciesList,
                isLoading,
                error,
                selectedCategory,
                selectedUVCLevel,
                selectedSpecies,
                dispatch,
            }}
        >
            {children}
        </CatalogContext.Provider>
    )
}

export const useCatalogContext = () => {
    const context = React.useContext(CatalogContext)

    if (context === undefined) {
        throw new Error(
            'useCatalogContext must be used within a CatalogProvider'
        )
    }

    return context
}
