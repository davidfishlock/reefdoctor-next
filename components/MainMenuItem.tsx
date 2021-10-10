import React from 'react'
import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { CATALOG } from '../consts/client-routes'
import { BackgroundImage } from './NextImage'

type Props = {
    image: string
    title: string
    isCatalog?: boolean
    categoryId?: number
}

const MainMenuItem: React.FC<Props> = ({
    image,
    title,
    categoryId,
    isCatalog = false,
}) => (
    <Box position="relative" bgColor="black.50">
        <BackgroundImage
            src={image}
            layout="fill"
            alt=""
            objectFit={isCatalog ? 'contain' : 'cover'}
            opacity={0.75}
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
                                Browse Catalog
                            </Button>
                        </Link>
                    ) : (
                        <>
                            <Button size="sm" colorScheme="blue">
                                Workshop
                            </Button>
                            <Button size="sm" colorScheme="blue">
                                Quiz
                            </Button>
                        </>
                    )}
                </HStack>
            </Flex>
        </Flex>
    </Box>
)

export default MainMenuItem
