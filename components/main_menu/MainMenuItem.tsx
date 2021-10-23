import { Flex, HStack, Text } from '@chakra-ui/react'
import React from 'react'
import { AnimatedBox } from '../common/Animation'
import { NextImage } from '../common/NextImage'

type Props = {
    image: string
    imageFit?: 'contain' | 'cover'
    title: string
    buttons: React.ReactNode
}

const menuItemAnimations = {
    hidden: { scale: 0.7, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            type: 'spring',
            duration: 0.3,
        },
    },
}

const MainMenuItem: React.FC<Props> = ({
    image,
    imageFit = 'cover',
    title,
    buttons,
}) => {
    return (
        <AnimatedBox
            position="relative"
            bgColor="blackAlpha.600"
            variants={menuItemAnimations}
        >
            <NextImage
                isAnimated
                src={image}
                alt=""
                position="absolute"
                left={0}
                top={0}
                right={0}
                bottom={0}
                objectFit={imageFit}
                targetOpacity={0.75}
            />

            <Flex flexDir="column" justifyContent="flex-end" minHeight={60}>
                <Flex
                    bgColor="blackAlpha.600"
                    zIndex="1"
                    p={3}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <Text fontSize="lg">{title}</Text>
                    <HStack>{buttons}</HStack>
                </Flex>
            </Flex>
        </AnimatedBox>
    )
}

export default MainMenuItem
