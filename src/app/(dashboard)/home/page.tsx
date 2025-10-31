import { getSession } from '@/lib/auth'
import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
export const metadata: Metadata = {
	title: 'welcome ~',
	description: '...',
}

export default async function HomePage() {
	const session = await getSession()
	if (!session) redirect('/login')

	return <div>hello {session.user.name}</div>
}

