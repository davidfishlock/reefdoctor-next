import React from 'react'
import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react'

type Props = {
    image: string
    title: string
    isCatalogItem?: boolean
}

const MainMenuItem: React.FC<Props> = ({ image, title, isCatalogItem = false }) => (
    <Box bgImage={`url(${image}), linear-gradient(#000, #000)`} bgPosition="center" bgSize={isCatalogItem? "contain" : "cover"} bgRepeat='no-repeat'>
        <Flex
            flexDir="column"
            justifyContent="flex-end"
            bgColor="black.25"
            minHeight={60}
        >
            <Flex bgColor="black.50" zIndex="1" p={3} justifyContent="space-between" alignItems='center'>
                <Text fontSize='lg'>{title}</Text>
                <HStack>
                    {isCatalogItem ? (
                        <Button size="sm" colorScheme="green">Browse Catalog</Button>
                    ) : (
                        <>
                            <Button size="sm" colorScheme="blue">Workshop</Button>
                            <Button size="sm" colorScheme="blue">Quiz</Button>
                        </>
                    )}
                </HStack>
            </Flex>
        </Flex>
    </Box>
)

export default MainMenuItem
