import { Box, ListItem } from '@chakra-ui/react'
import React, { ReactNode, useEffect, useRef } from 'react'
import { testId } from '../../constants/testId'

type Props<ItemType> = {
    item: ItemType
    isSelected: boolean
    onSelected: (item: ItemType) => void
    children: ReactNode
}

function SelectableListItem<ItemType>({
    item,
    isSelected,
    onSelected,
    children,
}: Props<ItemType>) {
    const boxRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (isSelected && boxRef.current) {
            boxRef.current.scrollIntoView({ block: 'nearest' })
        }
    }, [isSelected])

    return (
        <Box
            data-testid={testId.SELECTABLE_LIST_ITEM}
            ref={boxRef}
            background={isSelected ? 'blue.400' : undefined}
        >
            <ListItem
                userSelect="none"
                px={4}
                py={1}
                _hover={{ backgroundColor: 'whiteAlpha.300' }}
                onClick={() => onSelected(item)}
            >
                {children}
            </ListItem>
        </Box>
    )
}

export default SelectableListItem
