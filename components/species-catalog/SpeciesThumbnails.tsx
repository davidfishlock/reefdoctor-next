import React, { useState } from 'react'
import { Grid, useBreakpointValue } from '@chakra-ui/react'
import { Species } from '@prisma/client'
import { isUVCCategory } from '../../utils/uvcDefinitions'
import urljoin from 'url-join'
import ImageGallery from './ImageGallery'
import usePortal from 'react-useportal'
import useLockBodyViewport from '../../hooks/useLockBodyViewPort'
import SpeciesThumbnailItem from './SpeciesThumbnailItem'

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

const SpeciesThumbnails: React.FC<Props> = ({ species }) => {
    const [galleryStartIndex, setGalleryStartIndex] = useState(0)
    const {
        openPortal: openGallery,
        closePortal: closeGallery,
        Portal,
        isOpen: isGalleryOpen,
    } = usePortal()

    const heroImageGridSpan = useBreakpointValue({
        base: undefined,
        xl: '1 / span 2',
    })
    useLockBodyViewport(isGalleryOpen)

    if (!species) return null

    const imageSources = createImageSources(species)

    return (
        <>
            {isGalleryOpen && (
                <Portal>
                    <ImageGallery
                        species={species}
                        images={imageSources}
                        startIndex={galleryStartIndex}
                        onCloseRequested={() => closeGallery()}
                    />
                </Portal>
            )}

            <Grid
                templateColumns={{
                    base: 'repeat(auto-fill, 100px)',
                    xl: '100px 100px 100px 100px',
                    '2xl': '100px 100px 100px 100px 100px',
                }}
                autoRows="100px"
                gap={3}
                width="100%"
            >
                {imageSources.map((uri, index) => (
                    <SpeciesThumbnailItem
                        key={`thumbnail-${index}`}
                        src={uri}
                        alt={`${species.name} - Thumbnail ${index + 1}`}
                        isHeroImage={index === 0}
                        onClick={(e) => {
                            setGalleryStartIndex(index)
                            openGallery(e)
                        }}
                    />
                ))}
            </Grid>
        </>
    )
}

export default SpeciesThumbnails
