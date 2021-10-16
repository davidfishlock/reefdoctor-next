import React from 'react'
import { AnimatedBox } from '../common/Animation'
import { AnimatePresence } from 'framer-motion'
import { NextImage } from '../common/NextImage'

type Props = {
    src: string
    isVisible: boolean
}

export const PageBackground: React.FC<Props> = ({ src, isVisible }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <AnimatedBox
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    position="fixed"
                    boxSize="full"
                >
                    <NextImage src={src} alt="" boxSize="full" isAnimated />
                </AnimatedBox>
            )}
        </AnimatePresence>
    )
}
