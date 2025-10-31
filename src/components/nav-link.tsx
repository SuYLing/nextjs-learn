import Link, { type LinkProps } from 'next/link'
import type { PropsWithChildren } from 'react'
import { NavActive } from './nav-active'

interface NavLinkProps extends LinkProps, PropsWithChildren {
	className?: string
	activeClassName: string
	exact?: boolean
}

export const NavLink: React.FC<NavLinkProps> = ({
	className,
	exact,
	children,
	activeClassName,
	...rest
}) => {
	return (
		<Link {...rest}>
			<NavActive
				activeClassName={activeClassName}
				href={rest.href.toString()}
				className={className}
			>
				{children}
			</NavActive>
		</Link>
	)
}
