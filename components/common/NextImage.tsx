import { Box, BoxProps } from '@chakra-ui/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { AnimatedBox } from './Animation'

export const NextImage = (
    props: BoxProps & {
        src: string
        alt: string
        loading?: 'lazy' | 'eager'
        isAnimated?: boolean
        objectFit?: 'cover' | 'contain'
        targetOpacity?: number
    }
) => {
    const {
        src,
        alt,
        loading,
        isAnimated,
        targetOpacity = 1,
        objectFit = 'cover',
        ...rest
    } = props
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(false)
    }, [src])

    return (
        <Box {...rest}>
            <AnimatedBox
                position="relative"
                opacity={isLoaded ? targetOpacity : 0}
                animate={
                    isAnimated ? { opacity: isLoaded ? targetOpacity : 0 } : {}
                }
                transition={{ duration: 0.2 }}
                boxSize="full"
            >
                <Image
                    objectFit={objectFit}
                    layout="fill"
                    src={src}
                    alt={alt}
                    loading={loading}
                    onLoadingComplete={() => {
                        setIsLoaded(true)
                    }}
                />
            </AnimatedBox>
        </Box>
    )
}
