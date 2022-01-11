import { Text, TextProps } from '@chakra-ui/react'
import React from 'react'
import { strings } from '../../constants/strings'

const NABadge: React.FC<TextProps> = ({ fontSize = 'md', ...props }) => (
    <Text
        fontWeight="bold"
        fontSize={fontSize}
        background="red"
        borderRadius={6}
        px={2}
        py={1}
        {...props}
    >
        {strings.UVC_LEVEL_NA}
    </Text>
)

export default NABadge
