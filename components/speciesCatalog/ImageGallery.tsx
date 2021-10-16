import React, { useState } from 'react'
import { Box, Text, Image, Center } from '@chakra-ui/react'
import { Species } from '@prisma/client'
import FocusLock from '@chakra-ui/focus-lock'
import Carousel from '../common/Carousel'

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
    const [selectedIndex, setSelectedIndex] = useState(startIndex)

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
            >
                <Carousel<string>
                    items={images}
                    selectedIndex={selectedIndex}
                    onSelectedIndexChanged={(index) => setSelectedIndex(index)}
                    onRenderItem={(image, index) => (
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
                    )}
                />

                <Center pos="absolute" w="full" bottom="0" p={5}>
                    <Text
                        borderRadius={3}
                        bg="black.50"
                        p={3}
                        color="white"
                        fontSize="xs"
                    >
                        {selectedIndex + 1} / {images.length}
                    </Text>
                </Center>
            </Box>
        </FocusLock>
    )
}

export default ImageGallery
