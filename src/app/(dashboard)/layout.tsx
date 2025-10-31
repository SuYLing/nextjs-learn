import { NavLink } from '@/components/nav-link'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { getSession } from '@/lib/auth'
import Image from 'next/image'

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const session = await getSession()

	return (
		<div>
			<header className="bg-background/95 supports-[backdrop-filter]:bg-background/80 sticky top-0 z-50 w-full border-b backdrop-blur">
				<div className="container max-w-5xl flex mx-auto h-16 items-center justify-between gap-4">
					<DropdownMenu>
						<DropdownMenuTrigger>
							<Image
								src={session?.user.image!}
								alt="avatar"
								width={40}
								height={40}
								className=" rounded-full"
							/>
						</DropdownMenuTrigger>
						<DropdownMenuContent>
							<DropdownMenuLabel className="flex gap-1">
								<Image
									src={session?.user.image!}
									alt="avatar"
									width={40}
									height={40}
									className=" rounded-full"
								/>
								<div className="flex flex-col">
									<span>{session?.user.name}</span>
									<span className="text-gray-500 text-sm">
										{session?.user.email}
									</span>
								</div>
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								个人主页
								<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
					<nav className="flex gap-4">
						<NavLink activeClassName={'text-[#f09c5a]'} href={'/about'}>
							关于
						</NavLink>
						<NavLink activeClassName={'text-[#f09c5a]'} href={'/blog'}>
							博客
						</NavLink>
						<NavLink activeClassName={'text-[#f09c5a]'} href={'/project'}>
							项目
						</NavLink>
						<NavLink activeClassName={'text-[#f09c5a]'} href={'/bookmarks'}>
							书签
						</NavLink>
						<NavLink activeClassName={'text-[#f09c5a]'} href={'/contact'}>
							联系
						</NavLink>
					</nav>
				</div>
			</header>
			<main className="container max-w-5xl mx-auto">{children}</main>
		</div>
	)
}
