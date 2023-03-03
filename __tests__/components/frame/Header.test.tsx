import { render, screen } from '@testing-library/react'
import React from 'react'
import Header, {
    PAGE_COMMANDS_MOUNT_POINT,
} from '../../../components/frame/Header'
import { strings } from '../../../constants/strings'

jest.mock('next/dist/client/router', () => require('next-router-mock'))

describe('Header', () => {
    test('contains a link to the homepage', async () => {
        render(<Header />)

        expect(
            screen.getByRole('link', { name: strings.REEF_DOCTOR_BRAND })
        ).toHaveAttribute('href', '/')
    })

    test('renders page commands portal target', () => {
        render(<Header />)
        expect(
            document.getElementById(PAGE_COMMANDS_MOUNT_POINT)
        ).toBeInTheDocument()
    })
})
