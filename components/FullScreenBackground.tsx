import React from 'react'
import Image from 'next/image'
import { AnimatedBox } from './Animation'
import { AnimatePresence } from 'framer-motion'

type Props = {
    src: string
    isVisible: boolean
}

export const FullScreenBackground: React.FC<Props> = ({ src, isVisible }) => {
    return (
        <AnimatePresence>
            {isVisible && (
                <AnimatedBox
                    key="background-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    position="fixed"
                    height="100vh"
                    width="100vw"
                >
                    <Image
                        src={src}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        objectPosition="center"
                    />
                </AnimatedBox>
            )}
        </AnimatePresence>
    )
}
