import { render, screen } from '@testing-library/react'
import React from 'react'
import SpeciesDetailsList from '../../../components/common/SpeciesDetailsList'

describe('SpeciesDetailsList', () => {
    test('renders details text', () => {
        const details = ['line 1', 'line 2']

        render(<SpeciesDetailsList details={details} />)

        details.forEach((text) => {
            expect(screen.getByText(text)).toBeInTheDocument()
        })
    })
})
