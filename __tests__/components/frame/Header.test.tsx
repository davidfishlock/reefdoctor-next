import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import mockRouter from 'next-router-mock'
import React from 'react'
import Header, {
    PAGE_COMMANDS_MOUNT_POINT,
} from '../../../components/frame/Header'
import { CATALOG, HOMEPAGE } from '../../../constants/clientRoutes'
import { strings } from '../../../constants/strings'

jest.mock('next/dist/client/router', () => require('next-router-mock'))

describe('Header', () => {
    test("doesn't render backward link when on homepage", () => {
        mockRouter.setCurrentUrl(HOMEPAGE)

        render(<Header />)

        expect(
            screen.queryByAltText(strings.HOMEPAGE_LINK)
        ).not.toBeInTheDocument()
    })

    test('renders backward link when not on homepage', async () => {
        mockRouter.setCurrentUrl(CATALOG)
        mockRouter.back = jest.fn()

        render(<Header />)

        await userEvent.click(screen.getByAltText(strings.HOMEPAGE_LINK))

        expect(mockRouter.back).toBeCalledTimes(1)
    })

    test('renders page commands portal target', () => {
        render(<Header />)
        expect(
            document.getElementById(PAGE_COMMANDS_MOUNT_POINT)
        ).toBeInTheDocument()
    })
})
