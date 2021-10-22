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
import React from 'react'
import { strings } from '../../constants/strings'
import { useCatalogContext } from '../../contexts/CatalogContext'
import { isUVCCategory } from '../../utils/uvcDefinitions'
import SelectableList from '../common/SelectableList'

const SpeciesSelector: React.FC = () => {
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

    return (
        <Stack spacing={3} w={'100%'} boxSize="full">
            <HStack spacing={3}>
                <FormControl id="category">
                    <FormLabel>Category</FormLabel>
                    <Select
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
                            {strings.CATEGORY_FISH}
                        </option>
                        <option value={Category.Benthic}>
                            {strings.CATEGORY_BENTHIC}
                        </option>
                        <option value={Category.Invertebrate}>
                            {strings.CATEGORY_INVERTEBRATE}
                        </option>
                        <option value={Category.Coral}>
                            {strings.CATEGORY_CORAL}
                        </option>
                        <option value={Category.Seagrass}>
                            {strings.CATEGORY_SEAGRASS}
                        </option>
                        <option value={Category.FishFamily}>
                            {strings.CATEGORY_FISH_FAMILIES}
                        </option>
                    </Select>
                </FormControl>

                <FormControl
                    id="uvcLevel"
                    isDisabled={!isUVCCategory(selectedCategory)}
                >
                    <FormLabel>UVC Level</FormLabel>
                    <Select
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
                    <FormLabel marginTop={1}>Species</FormLabel>
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
                    items={speciesList}
                    selectedItem={selectedSpecies}
                    onSelectedItemChanged={(species) =>
                        dispatch({ type: 'selectSpecies', species })
                    }
                    onRenderItem={(species) => <Text>{species.name}</Text>}
                />
            )}
        </Stack>
    )
}

export default SpeciesSelector
