import { forwardRef, Text, TextProps } from '@chakra-ui/react'
import React from 'react'

const NABadge: React.FC<TextProps> = forwardRef<TextProps, 'div'>((props) => {
    return (
        <Text
            fontWeight="bold"
            fontSize="md"
            background="red"
            borderRadius={6}
            px={2}
            py={1}
            {...props}
        >
            N/A
        </Text>
    )
})

export default NABadge
