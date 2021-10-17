import React, { ReactNode, useCallback, useState } from 'react'
import { Box, List } from '@chakra-ui/react'
import SelectableListItem from './SelectableListItem'
import { useHotkeys } from 'react-hotkeys-hook'

type Props<ItemType> = {
    items: ItemType[]
    selectedItem?: ItemType
    onSelectedItemChanged: (item: ItemType) => void
    onRenderItem: (item: ItemType, index: number) => ReactNode
}

function SelectableList<ItemType>({
    items,
    selectedItem,
    onSelectedItemChanged,
    onRenderItem,
}: Props<ItemType>) {
    const [hasFocus, setHasFocus] = useState(false)

    const movePrevious = useCallback(
        (event: KeyboardEvent) => {
            if (!hasFocus || !selectedItem) return
            const currentIndex = items.indexOf(selectedItem)
            if (currentIndex <= 0) return

            onSelectedItemChanged(items[currentIndex - 1])
            event.preventDefault()
        },
        [hasFocus, selectedItem, onSelectedItemChanged, items]
    )

    const moveNext = useCallback(
        (event: KeyboardEvent) => {
            if (!hasFocus || !selectedItem) return
            const currentIndex = items.indexOf(selectedItem)
            if (currentIndex < 0 || currentIndex === items.length - 1) return

            onSelectedItemChanged(items[currentIndex + 1])
            event.preventDefault()
        },
        [hasFocus, selectedItem, onSelectedItemChanged, items]
    )

    useHotkeys('up', movePrevious, { keydown: true }, [movePrevious])
    useHotkeys('down', moveNext, { keydown: true }, [moveNext])

    return (
        <Box
            boxSize='full'
            tabIndex={0}
            overflowY={'auto'}
            borderRadius={6}
            borderColor={'whiteAlpha.300'}
            borderWidth="1px"
            onFocus={() => setHasFocus(true)}
            onBlur={() => setHasFocus(false)}
        >
            <List>
                {items.map((item, index) => {
                    return (
                        <SelectableListItem
                            key={`selectable-item-${index}`}
                            item={item}
                            isSelected={selectedItem === item}
                            onSelected={onSelectedItemChanged}
                        >
                            {onRenderItem(item, index)}
                        </SelectableListItem>
                    )
                })}
            </List>
        </Box>
    )
}

export default SelectableList
