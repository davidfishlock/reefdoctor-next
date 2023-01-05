import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import SelectableList from '../../../components/common/SelectableList'
import { testId } from '../../../constants/testId'

const items = ['item 1', 'item 2']
const renderSuffix = ' - some suffix'
const mockRenderFunction = jest
    .fn()
    .mockImplementation((item: string) => `${item}${renderSuffix}`)
const mockOnSelectedItemChanged = jest.fn()

describe('SelectableList', () => {
    test('renders children items according to render function', () => {
        render(
            <SelectableList<string>
                items={items}
                onRenderItem={mockRenderFunction}
                onSelectedItemChanged={mockOnSelectedItemChanged}
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
                items={items}
                onRenderItem={mockRenderFunction}
                onSelectedItemChanged={mockOnSelectedItemChanged}
            />
        )

        await userEvent.click(screen.getByText(mockRenderFunction(items[0])))

        expect(mockOnSelectedItemChanged).toBeCalledTimes(1)
        expect(mockOnSelectedItemChanged).toBeCalledWith(items[0])
    })

    test('selects next item when down key pressed', async () => {
        Element.prototype.scrollIntoView = jest.fn()
        render(
            <SelectableList<string>
                items={items}
                onRenderItem={mockRenderFunction}
                selectedItem={items[0]}
                onSelectedItemChanged={mockOnSelectedItemChanged}
            />
        )

        await userEvent.type(
            screen.getByTestId(testId.SELECTABLE_LIST),
            '[ArrowDown]'
        )

        expect(mockOnSelectedItemChanged).toBeCalledTimes(1)
        expect(mockOnSelectedItemChanged).toBeCalledWith(items[1])
    })

    test('selects previous item when up key pressed', async () => {
        Element.prototype.scrollIntoView = jest.fn()
        render(
            <SelectableList<string>
                items={items}
                onRenderItem={mockRenderFunction}
                selectedItem={items[1]}
                onSelectedItemChanged={mockOnSelectedItemChanged}
            />
        )

        await userEvent.type(
            screen.getByTestId(testId.SELECTABLE_LIST),
            '[ArrowUp]'
        )

        expect(mockOnSelectedItemChanged).toBeCalledTimes(1)
        expect(mockOnSelectedItemChanged).toBeCalledWith(items[0])
    })
})
