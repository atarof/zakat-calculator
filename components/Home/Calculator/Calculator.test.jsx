import { CalculatorForm } from './CalculatorForm'
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Calculator form', () => {
  it('Should render Calculator', () => {
    render(<CalculatorForm />)
    expect(screen.getByRole('heading')).toHaveTextContent('Enter amounts')
  })

  it('rendering and submitting form', async () => {
    render(<CalculatorForm/>)
    const user = userEvent.setup()

    const goldSilver = document.querySelector('input[name="goldSilver"]')
    const cash = document.querySelector('input[name="cash"]')
    const buisnessAssets = document.querySelector('input[name="buisnessAssets"]')
    const liabilities = document.querySelector('input[name="liabilities"]')

    await user.type(goldSilver, '100')
    await user.type(cash, '100')
    await user.type(buisnessAssets, '100')
    await user.type(liabilities, '100')

    user.click(document.querySelector('button[type="submit"]'))

    const due = document.querySelector('p')
    await waitFor(() => expect(due).toHaveTextContent('Zakat due: £ 5'))
  })
})
