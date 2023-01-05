import { Box, BoxProps } from '@chakra-ui/react'
import Image from 'next/legacy/image'
import React, { useEffect, useState } from 'react'
import { useIsMounted } from '../../hooks/useIsMounted'
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

    const isMounted = useIsMounted()
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
                        if (!isMounted()) return
                        setIsLoaded(true)
                    }}
                />
            </AnimatedBox>
        </Box>
    )
}
