import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import OneTimeDialog from '../../../components/common/OneTimeDialog'
import * as storageHelper from '../../../utils/localStorageHelper'

const storageKey = 'SOME_DIALOG'

const getStorageMock = jest.spyOn(storageHelper, 'getLocalStorageValue')
const setStorageMock = jest
    .spyOn(storageHelper, 'setLocalStorageValue')
    .mockImplementation(() => {})

const contentProps = {
    header: 'some header',
    body: 'some body',
    closeButtonLabel: 'ok',
}

describe('OneTimeDialog', () => {
    test('renders header, body, and close button with label when storage returns unseen for key', () => {
        getStorageMock.mockImplementation(() => false)

        render(<OneTimeDialog {...contentProps} storageKey={storageKey} />)

        expect(screen.getByText(contentProps.header)).toBeInTheDocument()
        expect(screen.getByText(contentProps.body)).toBeInTheDocument()
        expect(
            screen.getByRole('button', { name: contentProps.closeButtonLabel })
        ).toBeInTheDocument()
    })

    test('doesnt render when storage returns seen for key', () => {
        getStorageMock.mockImplementation(() => true)
        render(<OneTimeDialog {...contentProps} storageKey={storageKey} />)

        expect(screen.queryByText(contentProps.header)).not.toBeInTheDocument()
    })

    test('clicking close button sets key as seen and closes dialog', () => {
        getStorageMock.mockImplementation(() => false)

        render(<OneTimeDialog {...contentProps} storageKey={storageKey} />)

        const closeButton = screen.getByRole('button', {
            name: contentProps.closeButtonLabel,
        })

        userEvent.click(closeButton)

        expect(setStorageMock).toBeCalledTimes(1)
        expect(setStorageMock).toBeCalledWith(storageKey, true)
        expect(closeButton).not.toBeInTheDocument()
    })
})
