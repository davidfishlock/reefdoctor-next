import React, { useState } from 'react'
import {
    FormLabel,
    FormControl,
    Select,
    Spinner,
    Stack,
    HStack,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import { Category, Species, UVCLevel } from '@prisma/client'
import { useAllSpecies } from '../../requests'
import { isUVCCategory } from '../../utils/UvcDefinitions'
import { strings } from '../../consts/Strings'
import SelectableList from '../common/SelectableList'

type Props = {
    onSpeciesSelected?: (species: Species) => void
}

const SpeciesSelector: React.FC<Props> = ({ onSpeciesSelected }) => {
    const [selectedCategory, setSelectedCategory] = useState<Category>(
        Category.Fish
    )
    const [selectedUVCLevel, setSelectedUVCLevel] = useState<UVCLevel>(
        UVCLevel.Indicator
    )
    const [selectedSpecies, setSelectedSpecies] = useState<Species>()

    const { speciesList, isLoading } = useAllSpecies(
        selectedCategory,
        isUVCCategory(selectedCategory) ? selectedUVCLevel : UVCLevel.NA
    )

    const isMobileView = useBreakpointValue({
        base: true,
        md: false,
    })

    React.useEffect(() => {
        if (selectedSpecies) {
            onSpeciesSelected?.(selectedSpecies)
        }
    }, [selectedSpecies, onSpeciesSelected])

    // After a new category is loaded, auto select the first item
    if (
        speciesList?.length &&
        !speciesList.find((species) => species === selectedSpecies)
    ) {
        setSelectedSpecies(speciesList[0])
    }

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
                            setSelectedCategory(category)
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
                            setSelectedUVCLevel(uvcLevel)
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

            {isMobileView ? (
                <FormControl id="species" width="100%">
                    <FormLabel>Species</FormLabel>
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

                            setSelectedSpecies(species)
                        }}
                    >
                        {speciesList.map((species) => (
                            <option key={species.id} value={species.id}>
                                {species.name}
                            </option>
                        ))}
                    </Select>
                </FormControl>
            ) : (
                <SelectableList<Species>
                    items={speciesList}
                    selectedItem={selectedSpecies}
                    onSelectedItemChanged={setSelectedSpecies}
                    onRenderItem={(species) => <Text>{species.name}</Text>}
                ></SelectableList>
            )}
        </Stack>
    )
}

export default SpeciesSelector
