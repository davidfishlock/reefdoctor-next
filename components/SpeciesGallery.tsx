import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { Species } from '@prisma/client'
import { isUVCCategory } from '../utils/uvcDefinitions'
import urljoin from 'url-join'
import { NextImage } from './NextImage'

type Props = {
    species?: Species
}

const baseImagePath = '/images/species/'

function getPathForSpecies(species: Species) {
    let pathFragments = [baseImagePath]

    pathFragments.push(species.category.toString())

    if (isUVCCategory(species.category) && species.uvcLevel) {
        pathFragments.push(species.uvcLevel.toString())
    }

    pathFragments.push(species.name)

    return urljoin(pathFragments)
}

function createImageSources(species: Species) {
    const speciesPath = getPathForSpecies(species)
    const imagesArray: string[] = Array(species.imageCount)
        .fill('')
        .map((item, index) => {
            return urljoin(speciesPath, `${index + 1}.jpg`)
        })
    return imagesArray
}

const SpeciesGallery: React.FC<Props> = ({ species }) => {
    if (!species) return null

    const imageSources = createImageSources(species)

    return (
        <SimpleGrid columns={3} spacing={3}>
            {imageSources.map((uri) => {
                return (
                    <NextImage
                        bg="gray.700"
                        src={uri}
                        alt=""
                        key={uri}
                        height="100px"
                        width="100px"
                        isAnimated
                    />
                )
            })}
        </SimpleGrid>
    )
}

export default SpeciesGallery
