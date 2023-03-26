import { AccordianInfo } from './Accordion'
import { render, screen } from '@testing-library/react'

describe('Accordian is rendered', () => {
	it('Should render Accordian', () => {
		render(<AccordianInfo/>)
        expect(screen.getByText(/Nisab calculation/i,).toBeVisible)
        expect(screen.getByText(/Zakat calculation/i,).toBeVisible)
	})
})       