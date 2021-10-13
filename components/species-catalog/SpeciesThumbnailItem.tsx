import React, { useState } from 'react'
import { AspectRatio, Grid, useBreakpointValue } from '@chakra-ui/react'
import { Species } from '@prisma/client'
import { isUVCCategory } from '../../utils/uvcDefinitions'
import urljoin from 'url-join'
import { NextImage } from '../common/NextImage'
import ImageGallery from './ImageGallery'
import usePortal from 'react-useportal'
import useLockBodyViewport from '../../hooks/useLockBodyViewPort'
import { useClickable } from '@chakra-ui/clickable'

type Props = {
    src: string
    alt: string
    isHeroImage: boolean
    onClick: (e: React.MouseEvent<HTMLElement>) => void
}

const SpeciesThumbnailItem: React.FC<Props> = ({
    src,
    alt,
    isHeroImage,
    onClick,
}) => {
    const heroImageGridSpan = useBreakpointValue({
        base: undefined,
        xl: '1 / span 2',
    })
    const clickable = useClickable({
        onClick,
        unselectable: 'on',
    })

    return (
        <AspectRatio
            ratio={1}
            gridColumn={isHeroImage ? heroImageGridSpan : undefined}
            gridRow={isHeroImage ? heroImageGridSpan : undefined}
            {...clickable}
        >
            <NextImage bg="gray.700" src={src} alt={alt} isAnimated />
        </AspectRatio>
    )
}

export default SpeciesThumbnailItem
