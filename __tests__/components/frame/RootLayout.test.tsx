import { render, screen } from '@testing-library/react'
import mockRouter from 'next-router-mock'
import React from 'react'
import RootLayout from '../../../components/frame/RootLayout'
import { HOMEPAGE } from '../../../constants/clientRoutes'

const childContent = 'A Child Component'

jest.mock('next/dist/client/router', () => require('next-router-mock'))

describe('RootLayout', () => {
    beforeEach(() => {
        mockRouter.setCurrentUrl(HOMEPAGE)
    })

    test('renders children prop', () => {
        render(<RootLayout layout={'scrolling'}>{childContent}</RootLayout>)

        expect(screen.getByText(childContent)).toBeInTheDocument()
    })

    test('applies scrolling layout', () => {
        render(<RootLayout layout={'scrolling'}>{childContent}</RootLayout>)

        const root = screen.getByTestId('rootlayout-root')

        expect(root).toHaveStyle({ height: 'auto' })
    })

    test('applies full layout', () => {
        render(<RootLayout layout={'full'}>{childContent}</RootLayout>)

        const root = screen.getByTestId('rootlayout-root')

        expect(root).toHaveStyle({ height: '100%' })
    })
})
