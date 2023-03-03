import { Box, Icon } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { useHotkeys } from 'react-hotkeys-hook'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { useSwipeable } from 'react-swipeable'
import { strings } from '../../constants/strings'
import { testId } from '../../constants/testId'
import { AnimatedFlex } from '../common/Animation'
import CarouselNavigateButton from './CarouselNavigateButton'

type Props<ItemType> = {
    label: string
    items: ItemType[]
    selectedIndex: number
    onRenderItem: (item: ItemType, index: number) => ReactNode
    onSelectedIndexChanged: (index: number) => void
    nextButtonLabel?: string
    previousButtonLabel?: string
}

function Carousel<ItemType>({
    label,
    items,
    selectedIndex = 0,
    onRenderItem,
    onSelectedIndexChanged,
    nextButtonLabel = strings.CAROUSEL_NEXT_BUTTON,
    previousButtonLabel = strings.CAROUSEL_PREVIOUS_BUTTON,
}: Props<ItemType>) {
    const movePrevious = () => {
        if (selectedIndex === 0) return
        onSelectedIndexChanged(selectedIndex - 1)
    }

    const moveNext = () => {
        if (selectedIndex === items.length - 1) return
        onSelectedIndexChanged(selectedIndex + 1)
    }

    useHotkeys('left', movePrevious, { keydown: true }, [movePrevious])
    useHotkeys('right', moveNext, { keydown: true }, [moveNext])

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => moveNext(),
        onSwipedRight: () => movePrevious(),
    })

    return (
        <Box
            aria-live="polite"
            aria-label={label}
            aria-atomic={false}
            role="group"
            aria-roledescription="carousel"
            data-testid={testId.CAROUSEL}
            position="relative"
            overflow="hidden"
            boxSize="full"
        >
            <AnimatedFlex
                boxSize="full"
                initial={{ translateX: `-${selectedIndex * 100}%` }}
                animate={{ translateX: `-${selectedIndex * 100}%` }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                {...swipeHandlers}
            >
                {items.map((item, index) => (
                    <Box
                        key={`carousel-item-${index}`}
                        aria-hidden={selectedIndex != index}
                        role="group"
                        aria-roledescription="slide"
                        tabIndex={-1}
                        boxSize="full"
                        flex="none"
                        position="relative"
                    >
                        {onRenderItem(item, index)}
                    </Box>
                ))}
            </AnimatedFlex>

            <CarouselNavigateButton
                testId={testId.CAROUSEL_PREVIOUS}
                icon={<Icon as={FaArrowLeft} />}
                onClick={movePrevious}
                left={0}
                isDisabled={selectedIndex === 0}
                label={previousButtonLabel}
            />

            <CarouselNavigateButton
                testId={testId.CAROUSEL_NEXT}
                icon={<Icon as={FaArrowRight} />}
                onClick={moveNext}
                right={0}
                isDisabled={selectedIndex === items.length - 1}
                label={nextButtonLabel}
            />
        </Box>
    )
}

export default Carousel
