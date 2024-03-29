import { FocusLock } from '@chakra-ui/focus-lock'
import { Box, Center, Image, Text } from '@chakra-ui/react'
import { Species } from '@prisma/client'
import React, { useState } from 'react'
import { strings } from '../../constants/strings'
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
                bg="blackAlpha.800"
            >
                <Carousel<string>
                    label={strings.IMAGE_GALLERY_CAROUSEL}
                    nextButtonLabel={strings.IMAGE_GALLERY_NEXT}
                    previousButtonLabel={strings.IMAGE_GALLERY_PREVIOUS}
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
                        aria-live="polite"
                        borderRadius={3}
                        bg="blackAlpha.600"
                        p={3}
                        color="white"
                        fontSize="xs"
                    >
                        Image {selectedIndex + 1} of {images.length}
                    </Text>
                </Center>
            </Box>
        </FocusLock>
    )
}

export default ImageGallery
