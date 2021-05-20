import { render, screen } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'

import { stripe } from '../../services/stripe'

import Home, { getStaticProps } from '../../pages'

jest.mock('next/router')
jest.mock('next-auth/client', () => {
	return {
		useSession: () => [null, false]
	}
})
jest.mock('../../services/stripe')

describe('Home page', () => {
	it('renders correctly', () => {
		render(<Home product={{ priceId: 'fake-priceId', amount: 'R$10,00' }} />)

		expect(screen.getByText('for R$10,00 month')).toBeInTheDocument()
	})

	it('loads initial data', async () => {
		const retriveStripeMocked = mocked(stripe.prices.retrieve)

		retriveStripeMocked.mockResolvedValueOnce({
			id: 'fake-priceId',
			unit_amount: 1000
		} as any)

		const response = await getStaticProps({})

		expect(response).toEqual(
			expect.objectContaining({
				props: {
					product: {
						priceId: 'fake-priceId',
						amount: '$10.00'
					}
				}
			})
		)
	})
})