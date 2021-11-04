import { Button } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

type CarouselNavigateButtonProps = {
    icon: ReactNode
    onClick: () => void
    isDisabled: boolean
    label: string
    left?: number
    right?: number
    testId: string
}

const CarouselNavigateButton: React.FC<CarouselNavigateButtonProps> = ({
    icon,
    onClick,
    isDisabled,
    label,
    left,
    right,
    testId,
}) => {
    return (
        <Button
            data-testid={testId}
            aria-label={label}
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
