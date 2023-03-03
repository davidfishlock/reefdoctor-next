import {
    FormControl,
    FormLabel,
    HStack,
    Select,
    Stack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import { Category, Species, UVCLevel } from '@prisma/client'
import React, { useEffect, useRef } from 'react'
import { strings } from '../../constants/strings'
import { testId } from '../../constants/testId'
import { useCatalogContext } from '../../contexts/CatalogContext'
import { getStringForCategory } from '../../utils/strings'
import { isUVCCategory } from '../../utils/uvcDefinitions'
import SelectableList from '../common/SelectableList'

const SpeciesSelector: React.FC = () => {
    const categorySelectRef = useRef<HTMLSelectElement>(null)
    const {
        speciesList,
        selectedSpecies,
        selectedCategory,
        selectedUVCLevel,
        dispatch,
    } = useCatalogContext()

    const isMobileView = useBreakpointValue({
        base: true,
        md: false,
    })

    useEffect(() => {
        if (categorySelectRef.current) {
            categorySelectRef.current.focus()
        }
    }, [categorySelectRef])

    return (
        <Stack spacing={3} w={'100%'} boxSize="full">
            <HStack spacing={3}>
                <FormControl id="category">
                    <FormLabel>{strings.CATEGORY}</FormLabel>
                    <Select
                        ref={categorySelectRef}
                        data-testid={testId.CATALOG_CATEGORY_SELECT}
                        onChange={(event) => {
                            const category: Category =
                                Category[
                                    event.target.value as keyof typeof Category
                                ]
                            dispatch({ type: 'selectCategory', category })
                        }}
                        value={selectedCategory}
                    >
                        <option value={Category.Fish}>
                            {getStringForCategory(Category.Fish)}
                        </option>
                        <option value={Category.Benthic}>
                            {getStringForCategory(Category.Benthic)}
                        </option>
                        <option value={Category.Invertebrate}>
                            {getStringForCategory(Category.Invertebrate)}
                        </option>
                        <option value={Category.Coral}>
                            {getStringForCategory(Category.Coral)}
                        </option>
                        <option value={Category.Seagrass}>
                            {getStringForCategory(Category.Seagrass)}
                        </option>
                        <option value={Category.FishFamily}>
                            {getStringForCategory(Category.FishFamily)}
                        </option>
                    </Select>
                </FormControl>

                <FormControl
                    id="uvcLevel"
                    isDisabled={!isUVCCategory(selectedCategory)}
                >
                    <FormLabel>{strings.UVC_LEVEL}</FormLabel>
                    <Select
                        data-testid={testId.CATALOG_UVC_SELECT}
                        value={selectedUVCLevel}
                        onChange={(event) => {
                            const uvcLevel: UVCLevel =
                                UVCLevel[
                                    event.target.value as keyof typeof UVCLevel
                                ]
                            dispatch({ type: 'selectUVCLevel', uvcLevel })
                        }}
                    >
                        <option value={UVCLevel.Indicator}>
                            {strings.UVC_LEVEL_INDICATOR}
                        </option>
                        <option value={UVCLevel.Expert}>
                            {strings.UVC_LEVEL_EXPERT}
                        </option>
                    </Select>
                </FormControl>
            </HStack>

            {isMobileView === true && speciesList && (
                <FormControl width="100%">
                    <FormLabel marginTop={1}>{strings.SPECIES}</FormLabel>
                    <Select
                        value={selectedSpecies?.id}
                        onChange={(event) => {
                            const species = speciesList.find(
                                (item) => item.id === Number(event.target.value)
                            )

                            if (!species) {
                                throw new Error(
                                    'SpeciesSelector: Selected species not found'
                                )
                            }

                            dispatch({ type: 'selectSpecies', species })
                        }}
                    >
                        {speciesList.map((species) => (
                            <option key={species.id} value={species.id}>
                                {species.name}
                            </option>
                        ))}
                    </Select>
                </FormControl>
            )}

            {isMobileView === false && speciesList && (
                <SelectableList<Species>
                    label={strings.SPECIES}
                    items={speciesList}
                    selectedItem={selectedSpecies}
                    onSelectedItemChanged={(species) =>
                        dispatch({ type: 'selectSpecies', species })
                    }
                    onRenderItem={(species) => <Text>{species.name}</Text>}
                    getItemId={(item) => `species-${item.id}`}
                />
            )}
        </Stack>
    )
}

export default SpeciesSelector
