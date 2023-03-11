import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import SelectableList from '../../../components/common/SelectableList'
import { testId } from '../../../constants/testId'

const items = ['item-1', 'item-2', 'item-3']
const renderSuffix = ' - some suffix'
const mockRenderFunction = jest
    .fn()
    .mockImplementation((item: string) => `${item}${renderSuffix}`)
const mockOnSelectedItemChanged = jest.fn()
Element.prototype.scrollIntoView = jest.fn()

describe('SelectableList', () => {
    test('renders child items according to render function', () => {
        render(
            <SelectableList<string>
                label="My List"
                items={items}
                selectedItem={items[1]}
                onRenderItem={mockRenderFunction}
                onSelectedItemChanged={mockOnSelectedItemChanged}
                getItemId={(item) => item}
            />
        )

        expect(mockRenderFunction).toBeCalledTimes(items.length)
        items.forEach((item) => {
            expect(
                screen.getByText(mockRenderFunction(item))
            ).toBeInTheDocument()
        })
    })

    test('calls onSelectedItemChanged when item is clicked', async () => {
        render(
            <SelectableList<string>
                label="My List"
                items={items}
                selectedItem={items[1]}
                onRenderItem={mockRenderFunction}
                onSelectedItemChanged={mockOnSelectedItemChanged}
                getItemId={(item) => item}
            />
        )

        await userEvent.click(screen.getByText(mockRenderFunction(items[0])))

        expect(mockOnSelectedItemChanged).toBeCalledTimes(1)
        expect(mockOnSelectedItemChanged).toBeCalledWith(items[0])
    })

    test('selects next item when down key pressed', async () => {
        const { rerender } = render(
            <SelectableList<string>
                label="My List"
                items={items}
                selectedItem={items[1]}
                onRenderItem={mockRenderFunction}
                onSelectedItemChanged={mockOnSelectedItemChanged}
                getItemId={(item) => item}
            />
        )
        // rerender to ensure DOM key events are applied (populate refs)
        await rerender(
            <SelectableList<string>
                label="My List"
                items={items}
                selectedItem={items[1]}
                onRenderItem={mockRenderFunction}
                onSelectedItemChanged={mockOnSelectedItemChanged}
                getItemId={(item) => item}
            />
        )

        await userEvent.type(
            screen.getByTestId(testId.SELECTABLE_LIST),
            '{ArrowDown}'
        )

        expect(mockOnSelectedItemChanged).toBeCalledTimes(1)
        expect(mockOnSelectedItemChanged).toBeCalledWith(items[2])
    })

    test('selects previous item when up key pressed', async () => {
        const { rerender } = render(
            <SelectableList<string>
                label="My List"
                items={items}
                selectedItem={items[1]}
                onRenderItem={mockRenderFunction}
                onSelectedItemChanged={mockOnSelectedItemChanged}
                getItemId={(item) => item}
            />
        )
        // rerender to ensure DOM key events are applied (populate refs)
        await rerender(
            <SelectableList<string>
                label="My List"
                items={items}
                selectedItem={items[1]}
                onRenderItem={mockRenderFunction}
                onSelectedItemChanged={mockOnSelectedItemChanged}
                getItemId={(item) => item}
            />
        )

        await userEvent.type(
            screen.getByTestId(testId.SELECTABLE_LIST),
            '{ArrowUp}'
        )

        expect(mockOnSelectedItemChanged).toBeCalledTimes(1)
        expect(mockOnSelectedItemChanged).toBeCalledWith(items[0])
    })
})
