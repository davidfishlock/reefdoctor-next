import { Text } from '@chakra-ui/react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Carousel from '../../../components/common/Carousel'
import { strings } from '../../../constants/strings'

const items = ['item 1', 'item 2', 'item 3']

const mockRenderFunction = jest
    .fn()
    .mockImplementation((item: string, index: number) => (
        <Text key={index}>{item}</Text>
    ))

const mockOnSelectedIndexChanged = jest.fn()
const mockOnSelectedItemChanged = jest.fn()

describe('Carousel', () => {
    test('renders children items according to render function', () => {
        render(
            <Carousel<string>
                items={items}
                selectedIndex={0}
                onRenderItem={mockRenderFunction}
                onSelectedIndexChanged={mockOnSelectedIndexChanged}
                onSelectedItemChanged={mockOnSelectedItemChanged}
            />
        )

        expect(mockRenderFunction).toBeCalledTimes(items.length)
        items.forEach((item) => {
            expect(screen.getByText(item)).toBeInTheDocument()
        })
    })

    test('previous button disabled when no previous item', () => {
        render(
            <Carousel<string>
                items={items}
                selectedIndex={0}
                onRenderItem={mockRenderFunction}
                onSelectedIndexChanged={mockOnSelectedIndexChanged}
                onSelectedItemChanged={mockOnSelectedItemChanged}
            />
        )

        expect(
            screen.getByLabelText(strings.CAROUSEL_PREVIOUS_BUTTON)
        ).toHaveAttribute('disabled')
        expect(
            screen.getByLabelText(strings.CAROUSEL_NEXT_BUTTON)
        ).not.toHaveAttribute('disabled')
    })

    test('next button disabled when no next item', () => {
        render(
            <Carousel<string>
                items={items}
                selectedIndex={items.length - 1}
                onRenderItem={mockRenderFunction}
                onSelectedIndexChanged={mockOnSelectedIndexChanged}
                onSelectedItemChanged={mockOnSelectedItemChanged}
            />
        )

        expect(
            screen.getByLabelText(strings.CAROUSEL_PREVIOUS_BUTTON)
        ).not.toHaveAttribute('disabled')
        expect(
            screen.getByLabelText(strings.CAROUSEL_NEXT_BUTTON)
        ).toHaveAttribute('disabled')
    })

    test('selects next item when right key pressed', async () => {
        const startIndex = 0

        render(
            <Carousel<string>
                items={items}
                selectedIndex={startIndex}
                onRenderItem={mockRenderFunction}
                onSelectedIndexChanged={mockOnSelectedIndexChanged}
                onSelectedItemChanged={mockOnSelectedItemChanged}
            />
        )

        userEvent.type(screen.getByTestId('carousel-root'), '{arrowright}')

        await waitFor(() => {
            expect(mockOnSelectedIndexChanged).toBeCalledTimes(1)
            expect(mockOnSelectedIndexChanged).toBeCalledWith(startIndex + 1)
        })
    })

    test('selects previous item when left key pressed', async () => {
        const startIndex = items.length - 1

        render(
            <Carousel<string>
                items={items}
                selectedIndex={startIndex}
                onRenderItem={mockRenderFunction}
                onSelectedIndexChanged={mockOnSelectedIndexChanged}
                onSelectedItemChanged={mockOnSelectedItemChanged}
            />
        )

        userEvent.type(screen.getByTestId('carousel-root'), '{arrowleft}')

        await waitFor(() => {
            expect(mockOnSelectedIndexChanged).toBeCalledTimes(1)
            expect(mockOnSelectedIndexChanged).toBeCalledWith(startIndex - 1)
        })
    })

    test('selects next item when next button clicked', async () => {
        const startIndex = 0

        render(
            <Carousel<string>
                items={items}
                selectedIndex={startIndex}
                onRenderItem={mockRenderFunction}
                onSelectedIndexChanged={mockOnSelectedIndexChanged}
                onSelectedItemChanged={mockOnSelectedItemChanged}
            />
        )

        userEvent.click(screen.getByLabelText(strings.CAROUSEL_NEXT_BUTTON))

        await waitFor(() => {
            expect(mockOnSelectedIndexChanged).toBeCalledTimes(1)
            expect(mockOnSelectedIndexChanged).toBeCalledWith(startIndex + 1)
        })
    })

    test('selects previous item when previous button clicked', async () => {
        const startIndex = items.length - 1

        render(
            <Carousel<string>
                items={items}
                selectedIndex={startIndex}
                onRenderItem={mockRenderFunction}
                onSelectedIndexChanged={mockOnSelectedIndexChanged}
                onSelectedItemChanged={mockOnSelectedItemChanged}
            />
        )

        userEvent.click(screen.getByLabelText(strings.CAROUSEL_PREVIOUS_BUTTON))

        await waitFor(() => {
            expect(mockOnSelectedIndexChanged).toBeCalledTimes(1)
            expect(mockOnSelectedIndexChanged).toBeCalledWith(startIndex - 1)
        })
    })
})
