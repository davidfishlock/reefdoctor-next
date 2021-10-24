import { List } from '@chakra-ui/react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import SelectableListItem from '../../../components/common/SelectableListItem'
import { testId } from '../../../constants/testId'

const item = 'an item'
const selectedHandler = jest.fn()

describe('SelectableListItem', () => {
    test('renders children', () => {
        render(
            <List>
                <SelectableListItem<string>
                    item={item}
                    isSelected={false}
                    onSelected={selectedHandler}
                >
                    {item}
                </SelectableListItem>
            </List>
        )

        expect(screen.getByText(item)).toBeInTheDocument()
    })

    test('calls onSelected with item when clicked', () => {
        render(
            <List>
                <SelectableListItem<string>
                    item={item}
                    isSelected={false}
                    onSelected={selectedHandler}
                >
                    {item}
                </SelectableListItem>
            </List>
        )
        userEvent.click(screen.getByText(item))

        expect(selectedHandler).toBeCalledTimes(1)
        expect(selectedHandler).toBeCalledWith(item)
    })

    test('scrolls self into view when selected changes to true', () => {
        const item = 'an item'
        const scrollMock = jest.fn()

        const { rerender } = render(
            <List>
                <SelectableListItem<string>
                    item={item}
                    isSelected={false}
                    onSelected={selectedHandler}
                >
                    {item}
                </SelectableListItem>
            </List>
        )
        const box = screen.getByTestId(testId.SELECTABLE_LIST_ITEM)
        box.scrollIntoView = scrollMock

        rerender(
            <List>
                <SelectableListItem<string>
                    item={item}
                    isSelected={true}
                    onSelected={jest.fn()}
                >
                    {item}
                </SelectableListItem>
            </List>
        )

        expect(scrollMock).toBeCalledTimes(1)
        expect(scrollMock).toBeCalledWith({ block: 'nearest' })
    })
})
