import { Box, Icon } from '@chakra-ui/react'
import React, { ReactNode, useCallback, useEffect } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { strings } from '../../constants/strings'
import { AnimatedFlex } from '../common/Animation'
import CarouselNavigateButton from './CarouselNavigateButton'

type Props<ItemType> = {
    items: ItemType[]
    selectedIndex: number
    onRenderItem: (item: ItemType, index: number) => ReactNode
    onSelectedIndexChanged: (index: number) => void
    onSelectedItemChanged?: (item: ItemType) => void
}

function Carousel<ItemType>({
    items,
    selectedIndex = 0,
    onRenderItem,
    onSelectedIndexChanged,
    onSelectedItemChanged,
}: Props<ItemType>) {
    const movePrevious = useCallback(() => {
        if (selectedIndex === 0) return
        onSelectedIndexChanged(selectedIndex - 1)
    }, [selectedIndex, onSelectedIndexChanged])

    const moveNext = useCallback(() => {
        if (selectedIndex === items.length - 1) return
        onSelectedIndexChanged(selectedIndex + 1)
    }, [selectedIndex, onSelectedIndexChanged, items.length])

    useEffect(() => {
        onSelectedItemChanged?.(items[selectedIndex])
    }, [selectedIndex, items, onSelectedItemChanged])

    useHotkeys('left', movePrevious, { keydown: true }, [movePrevious])
    useHotkeys('right', moveNext, { keydown: true }, [moveNext])

    return (
        <Box
            data-testid="carousel-root"
            position="relative"
            overflow="hidden"
            boxSize="full"
        >
            <AnimatedFlex
                boxSize="full"
                initial={{ translateX: `-${selectedIndex * 100}%` }}
                animate={{ translateX: `-${selectedIndex * 100}%` }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                {items.map((item, index) => onRenderItem(item, index))}
            </AnimatedFlex>

            <CarouselNavigateButton
                icon={<Icon as={FaArrowLeft} />}
                onClick={movePrevious}
                left={0}
                isDisabled={selectedIndex === 0}
                label={strings.CAROUSEL_PREVIOUS_BUTTON}
            />

            <CarouselNavigateButton
                icon={<Icon as={FaArrowRight} />}
                onClick={moveNext}
                right={0}
                isDisabled={selectedIndex === items.length - 1}
                label={strings.CAROUSEL_NEXT_BUTTON}
            />
        </Box>
    )
}

export default Carousel
