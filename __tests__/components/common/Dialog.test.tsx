import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Dialog from '../../../components/common/Dialog'

const contentProps = {
    header: 'some header',
    body: 'some body',
    footer: 'some footer',
}

const mockClose = jest.fn()

describe('Dialog', () => {
    test('renders header, body, and footer', () => {
        render(<Dialog {...contentProps} isOpen={true} onClose={mockClose} />)

        expect(screen.getByText(contentProps.header)).toBeInTheDocument()
        expect(screen.getByText(contentProps.body)).toBeInTheDocument()
        expect(screen.getByText(contentProps.footer)).toBeInTheDocument()
    })

    test("doesn't render if not isOpen", () => {
        render(<Dialog {...contentProps} isOpen={false} onClose={mockClose} />)

        expect(screen.queryByText(contentProps.header)).not.toBeInTheDocument()
        expect(screen.queryByText(contentProps.body)).not.toBeInTheDocument()
        expect(screen.queryByText(contentProps.footer)).not.toBeInTheDocument()
    })

    test('calls close function on close button click ', () => {
        render(<Dialog {...contentProps} isOpen={true} onClose={mockClose} />)

        userEvent.click(screen.getByLabelText('Close'))

        expect(mockClose).toBeCalledTimes(1)
    })
})
