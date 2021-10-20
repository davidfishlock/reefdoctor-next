import { Text } from '@chakra-ui/react'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { FaArrowLeft } from 'react-icons/fa'
import CarouselNavigateButton from '../../../components/common/CarouselNavigateButton'
import { strings } from '../../../constants/strings'

const mockOnClick = jest.fn()

describe('CarouselNavigateButton', () => {
    test('renders icon', () => {
        const dummyIcon = 'An Icon'

        render(
            <CarouselNavigateButton
                icon={<Text>{dummyIcon}</Text>}
                onClick={mockOnClick}
                isDisabled={false}
                label={strings.CAROUSEL_NEXT_BUTTON}
            />
        )

        const button = screen.getByLabelText(strings.CAROUSEL_NEXT_BUTTON)

        expect(within(button).getByText(dummyIcon)).toBeInTheDocument()
    })

    test('applies disabled state', () => {
        render(
            <CarouselNavigateButton
                icon={FaArrowLeft}
                onClick={mockOnClick}
                isDisabled={true}
                label={strings.CAROUSEL_NEXT_BUTTON}
            />
        )

        const button = screen.getByLabelText(strings.CAROUSEL_NEXT_BUTTON)

        expect(button).toHaveAttribute('disabled')
    })

    test('fires handler on click', () => {
        render(
            <CarouselNavigateButton
                icon={FaArrowLeft}
                onClick={mockOnClick}
                isDisabled={false}
                label={strings.CAROUSEL_NEXT_BUTTON}
            />
        )

        const button = screen.getByLabelText(strings.CAROUSEL_NEXT_BUTTON)
        userEvent.click(button)

        expect(mockOnClick).toBeCalledTimes(1)
    })
})
