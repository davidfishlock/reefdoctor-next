import { ListItem } from '@chakra-ui/react'
import React, { ReactNode, useEffect, useRef } from 'react'
import { testId } from '../../constants/testId'

type Props<ItemType> = {
    id: string
    item: ItemType
    isSelected: boolean
    onSelected: (item: ItemType) => void
    children: ReactNode
}

function SelectableListItem<ItemType>({
    id,
    item,
    isSelected,
    onSelected,
    children,
}: Props<ItemType>) {
    const itemRef = useRef<HTMLLIElement>(null)

    useEffect(() => {
        if (isSelected && itemRef.current) {
            itemRef.current.scrollIntoView({ block: 'nearest' })
        }
    }, [isSelected])

    return (
        <ListItem
            id={id}
            role="option"
            data-testid={testId.SELECTABLE_LIST_ITEM}
            background={isSelected ? 'blue.600' : undefined}
            ref={itemRef}
            userSelect="none"
            aria-selected={isSelected}
            px={4}
            py={1}
            _hover={{
                backgroundColor: isSelected ? 'blue.600' : 'whiteAlpha.300',
            }}
            onClick={() => onSelected(item)}
        >
            {children}
        </ListItem>
    )
}

export default SelectableListItem
