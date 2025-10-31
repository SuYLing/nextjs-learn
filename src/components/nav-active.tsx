'use client'

import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

export function NavActive({
	href,
	exact,
	className,
	activeClassName,
	children,
}: {
	href: string
	exact?: boolean
	className?: string
	activeClassName?: string
	children: React.ReactNode
}) {
	const pathname = usePathname()
	console.log(pathname, href)
	const isActive = exact ? pathname === href : pathname.startsWith(href)
	console.log(isActive)
	// 给父节点加类
	return (
		<span
			className={cn(
				'hover:underline hover:text-[#918072] underline-offset-4 transition-all text-gray-500',
				className,
				isActive ? activeClassName : ''
			)}
		>
			{children}
		</span>
	)
}
