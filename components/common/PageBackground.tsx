import React from 'react'
import { AnimatedBox } from './Animation'
import { AnimatePresence } from 'framer-motion'
import { NextImage } from './NextImage'

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
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    position="fixed"
                    boxSize="full"
                >
                    <NextImage src={src} alt="" boxSize="full" />
                </AnimatedBox>
            )}
        </AnimatePresence>
    )
}
