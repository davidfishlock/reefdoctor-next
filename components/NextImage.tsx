import React, { useEffect, useState } from 'react'
import { Box, BoxProps, chakra } from '@chakra-ui/react'
import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { AnimatedBox } from './Animation'

export const BackgroundImage = chakra(Image, {
    baseStyle: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        objectFit: 'cover',
        objectPosition: 'center',
        transition: 'opacity 0.3s',
    },
})

export const NextImage = (
    props: BoxProps & {
        src: string
        alt: string
        loading?: 'lazy' | 'eager'
        isAnimated?: boolean
    }
) => {
    const { src, alt, loading, isAnimated, ...rest } = props
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        setIsLoaded(false)
    }, [src])

    return (
        <Box {...rest}>
            <AnimatedBox
                position="relative"
                opacity={isLoaded ? 1 : 0}
                animate={isAnimated ? { opacity: isLoaded ? 1 : 0 } : {}}
                transition={{ duration: 0.2 }}
                height="100%"
                width="100%"
            >
                <Image
                    objectFit="cover"
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
