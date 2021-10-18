import { Category, Species, UVCLevel } from '@prisma/client'
import React, { createContext, useState } from 'react'
import { useAllSpecies } from '../requests'
import { isUVCCategory } from '../utils/uvcDefinitions'

export type CatalogContextProps = {
    speciesList: Species[]
    isLoading: boolean
    error?: Error
    selectedCategory: Category
    setSelectedCategory: (category: Category) => void
    selectedUVCLevel: UVCLevel
    setSelectedUVCLevel: (uvcLevel: UVCLevel) => void
    selectedSpecies?: Species
    setSelectedSpecies: (species: Species) => void
}

export const CatalogContext = createContext<CatalogContextProps | null>(null)

export const CatalogProvider: React.FC = ({ children }) => {
    const [selectedCategory, setSelectedCategory] = React.useState<Category>(
        Category.Fish
    )
    const [selectedUVCLevel, setSelectedUVCLevel] = React.useState<UVCLevel>(
        UVCLevel.Indicator
    )
    const [selectedSpecies, setSelectedSpecies] = useState<Species>()

    const { speciesList, isLoading, error } = useAllSpecies(
        selectedCategory,
        isUVCCategory(selectedCategory) ? selectedUVCLevel : UVCLevel.NA
    )

    return (
        <CatalogContext.Provider
            value={{
                speciesList,
                isLoading,
                error,
                selectedCategory,
                setSelectedCategory,
                selectedUVCLevel,
                setSelectedUVCLevel,
                selectedSpecies,
                setSelectedSpecies,
            }}
        >
            {children}
        </CatalogContext.Provider>
    )
}
