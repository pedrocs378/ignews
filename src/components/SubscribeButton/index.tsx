import { useRouter } from 'next/router'
import { Session } from 'next-auth'
import { useSession, signIn } from 'next-auth/client'

import { getStripeJs } from '../../services/stripe-js'
import { api } from '../../services/api'

import styles from './styles.module.scss'

interface SessionProps extends Session {
	activeSubscription?: string
}

type UseSessionProps = [
	SessionProps,
	boolean
]

export function SubscribeButton() {
	const [session] = useSession() as UseSessionProps
	const router = useRouter()

	async function handleSubscribe() {
		if (!session) {
			signIn('github')

			return
		}

		if (session.activeSubscription) {
			router.push('/posts')

			return
		}

		try {
			const response = await api.post('/subscribe')

			const { sessionId } = response.data

			const stripe = await getStripeJs()

			await stripe.redirectToCheckout({ sessionId })
		} catch (err) {
			alert(err.message)
		}
	}

	return (
		<button
			type="button"
			className={styles.subscribeButton}
			onClick={handleSubscribe}
		>
			Subscribe now
		</button>
	)
}