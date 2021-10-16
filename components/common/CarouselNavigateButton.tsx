import React, { ReactNode } from 'react'
import { Text, Box, Button } from '@chakra-ui/react'
import { useClickable } from '@chakra-ui/clickable'

type CarouselNavigateButtonProps = {
    icon: ReactNode
    onClick: () => void
    isDisabled: boolean
    left?: number
    right?: number
}

const CarouselNavigateButton: React.FC<CarouselNavigateButtonProps> = ({
    icon,
    onClick,
    isDisabled,
    left,
    right,
}) => {
    return (
        <Button
            fontSize="2xl"
            disabled={isDisabled}
            onClick={onClick}
            left={left}
            right={right}
            position="absolute"
            top="50%"
            py={10}
            px={6}
            transform="translate(0, -50%)"
        >
            {icon}
        </Button>
    )
}

export default CarouselNavigateButton
