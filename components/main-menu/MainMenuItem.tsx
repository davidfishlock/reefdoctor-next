import React from 'react'
import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { CATALOG } from '../../consts/client-routes'
import { NextImage } from '../common/NextImage'
import { Category } from '@prisma/client'
import { strings } from '../../consts/strings'

type Props = {
    image: string
    title: string
    isCatalog?: boolean
    category?: Category
}

const MainMenuItem: React.FC<Props> = ({
    image,
    title,
    category,
    isCatalog = false,
}) => (
    <Box position="relative" bgColor="black.50">
        <NextImage
            isAnimated
            src={image}
            alt=""
            position="absolute"
            left={0}
            top={0}
            right={0}
            bottom={0}
            objectFit={isCatalog ? 'contain' : 'cover'}
            targetOpacity={0.75}
        />

        <Flex flexDir="column" justifyContent="flex-end" minHeight={60}>
            <Flex
                bgColor="black.50"
                zIndex="1"
                p={3}
                justifyContent="space-between"
                alignItems="center"
            >
                <Text fontSize="lg">{title}</Text>
                <HStack>
                    {isCatalog ? (
                        <Link href={CATALOG} passHref>
                            <Button size="sm" colorScheme="green">
                                {strings.BUTTON_BROWSE_CATALOG}
                            </Button>
                        </Link>
                    ) : (
                        <>
                            <Button size="sm" colorScheme="blue">
                                {strings.BUTTON_WORKSHOP}
                            </Button>
                            <Button size="sm" colorScheme="blue">
                                {strings.BUTTON_QUIZ}
                            </Button>
                        </>
                    )}
                </HStack>
            </Flex>
        </Flex>
    </Box>
)

export default MainMenuItem
