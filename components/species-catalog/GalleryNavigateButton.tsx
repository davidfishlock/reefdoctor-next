import React from 'react'
import { Text, TextProps } from '@chakra-ui/react'
import { useClickable } from '@chakra-ui/clickable'
import { AnimatedBox } from '../common/Animation'

type GalleryNavigateButtonProps = {
    icon: string
    onClick: () => void
    isDisabled?: boolean
}

const GalleryNavigateButton: React.FC<TextProps & GalleryNavigateButtonProps> =
    ({ icon, onClick, isDisabled, left, right }) => {
        const clickable = useClickable({
            onClick,
            isDisabled,
            unselectable: 'on',
        })

        return (
            <AnimatedBox
                {...clickable}
                left={left}
                right={right}
                position="absolute"
                top="50%"
                p={4}
                transform="translate(0, -50%)"
                width="auto"
                opacity={0.7}
                _disabled={{ opacity: 0, pointerEvents: 'none' }}
                whileHover={{
                    opacity: 1,
                    backgroundColor: 'black',
                }}
            >
                <Text color="white" fontWeight="bold" fontSize="2xl">
                    {icon}
                </Text>
            </AnimatedBox>
        )
    }

export default GalleryNavigateButton
