import { render, screen } from '@testing-library/react'
import React from 'react'
import { PageBackground } from '../../../components/frame/PageBackground'

const imageSrc = '/myImage.jpg'

describe('PageBackground', () => {
    test('renders image when isVisible', () => {
        render(<PageBackground isVisible={true} src={imageSrc} />)
        expect(screen.getByRole('img')).toBeInTheDocument()
    })

    test('no image rendered when isVisible is false', () => {
        render(<PageBackground isVisible={false} src={imageSrc} />)
        expect(screen.queryByRole('img')).not.toBeInTheDocument()
    })
})
