import { List } from '@chakra-ui/react'
import React, { KeyboardEvent, ReactNode } from 'react'
import { testId } from '../../constants/testId'
import SelectableListItem from './SelectableListItem'

type Props<ItemType> = {
    label: string
    items: ItemType[]
    selectedItem?: ItemType
    onSelectedItemChanged: (item: ItemType | undefined) => void
    onRenderItem: (item: ItemType) => ReactNode
    getItemId: (item: ItemType) => string
}

function SelectableList<ItemType>({
    label,
    items,
    selectedItem,
    onSelectedItemChanged,
    onRenderItem,
    getItemId,
}: Props<ItemType>) {
    const onKeyDown = (e: KeyboardEvent): void => {
        if (!selectedItem) {
            return
        }

        const currentSelectedIndex = items.indexOf(selectedItem)

        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault()
            onSelectedItemChanged(
                items[
                    currentSelectedIndex === items.length - 1
                        ? 0
                        : currentSelectedIndex + 1
                ]
            )
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault()
            onSelectedItemChanged(
                items[
                    currentSelectedIndex === 0
                        ? items.length - 1
                        : currentSelectedIndex - 1
                ]
            )
        }
    }

    return (
        <List
            onKeyDown={onKeyDown}
            aria-label={label}
            data-testid={testId.SELECTABLE_LIST}
            role="listbox"
            aria-activedescendant={
                selectedItem ? getItemId(selectedItem) : undefined
            }
            boxSize="full"
            tabIndex={0}
            overflowY={'auto'}
            borderRadius={6}
            borderColor={'whiteAlpha.300'}
            borderWidth="1px"
        >
            {items.map((item) => {
                const id = getItemId(item)
                return (
                    <SelectableListItem
                        id={id}
                        key={id}
                        item={item}
                        isSelected={selectedItem === item}
                        onSelected={onSelectedItemChanged}
                    >
                        {onRenderItem(item)}
                    </SelectableListItem>
                )
            })}
        </List>
    )
}

export default SelectableList
