import React, { useState } from 'react'
import { Box, Text, Image, Center } from '@chakra-ui/react'
import GalleryNavigateButton from './GalleryNavigateButton'
import { AnimatedFlex } from '../common/Animation'
import { Species } from '@prisma/client'
import FocusLock from '@chakra-ui/focus-lock'
import { useHotkeys } from 'react-hotkeys-hook'

type GalleryProps = {
    species: Species
    images: string[]
    startIndex: number
    onCloseRequested: () => void
}

const ImageGallery: React.FC<GalleryProps> = ({
    species,
    images,
    startIndex,
    onCloseRequested,
}) => {
    const [currentSlide, setCurrentSlide] = useState(startIndex)

    const slidesCount = images.length

    const movePrevious = () => {
        setCurrentSlide((s) => (s === 0 ? slidesCount - 1 : s - 1))
    }
    const moveNext = () => {
        setCurrentSlide((s) => (s === slidesCount - 1 ? 0 : s + 1))
    }

    useHotkeys('left', movePrevious, { keydown: true })
    useHotkeys('right', moveNext, { keydown: true })

    return (
        <FocusLock>
            <Box
                position="fixed"
                left={0}
                top={0}
                right={0}
                bottom={0}
                height="100vh"
                width="100vw"
                bg="black.75"
                overflow="hidden"
            >
                <AnimatedFlex
                    boxSize="full"
                    initial={{ translateX: `-${currentSlide * 100}%` }}
                    animate={{ translateX: `-${currentSlide * 100}%` }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    {images.map((image, index) => (
                        <Center
                            key={`image-${index}`}
                            boxSize="full"
                            flex="none"
                            p={12}
                            onClick={(e) => {
                                if (e.target === e.currentTarget) {
                                    onCloseRequested()
                                }
                            }}
                        >
                            <Image
                                maxHeight="100%"
                                maxWidth="100%"
                                objectFit="contain"
                                alt={`${species.name} - Image ${index + 1}`}
                                src={image}
                            />
                        </Center>
                    ))}
                </AnimatedFlex>

                <GalleryNavigateButton
                    icon="&#10094;"
                    onClick={movePrevious}
                    left={0}
                    isDisabled={currentSlide === 0}
                />

                <GalleryNavigateButton
                    icon="&#10095;"
                    onClick={moveNext}
                    right={0}
                    isDisabled={currentSlide === images.length - 1}
                />

                <Center pos="absolute" w="full" bottom="0" p={5}>
                    <Text
                        borderRadius={3}
                        bg="black.50"
                        p={3}
                        color="white"
                        fontSize="xs"
                    >
                        {currentSlide + 1} / {slidesCount}
                    </Text>
                </Center>
            </Box>
        </FocusLock>
    )
}

export default ImageGallery
