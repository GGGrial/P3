import { Link, NavLink } from 'react-router'
import { MenuIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { siteNavigation } from '@/config/navigation'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

export default function SiteHeader() {
	const headerRef = useRef<HTMLElement | null>(null)

	useGSAP(() => {
		ScrollTrigger.create({
			trigger: headerRef.current,
			start: -80,
			onEnter: () => {
				console.log('enter')
				headerRef.current?.classList.add('border-b')
			},
			onLeaveBack: () => {
				console.log('leave')
				headerRef.current?.classList.remove('border-b')
			}
		})
	})

	return (
		<header
			className="sticky top-0 z-40 border-border/60 bg-background/80 backdrop-blur transition-[border]"
			ref={headerRef}
		>
			<div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
				<Link to="/" className="text-lg font-semibold tracking-wide text-foreground">
					军事兵工厂虚拟展馆
				</Link>
				<nav className="hidden items-center gap-6 text-sm text-muted-foreground md:flex">
					{siteNavigation.map(item => (
						<NavLink
							key={item.href}
							to={item.href}
							className={({ isActive }) =>
								cn('font-medium transition-colors hover:text-foreground', isActive && 'text-foreground')
							}
						>
							{item.label}
						</NavLink>
					))}
					<Button size="sm" className="ml-2">
						进入VR展馆
					</Button>
				</nav>
				<div className="md:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon-sm">
								<MenuIcon className="size-5" />
							</Button>
						</SheetTrigger>
						<SheetContent side="right" className="p-0">
							<SheetHeader className="border-b border-border/60">
								<SheetTitle>导航</SheetTitle>
							</SheetHeader>
							<div className="flex flex-col gap-2 p-4">
								{siteNavigation.map(item => (
									<NavLink
										key={item.href}
										to={item.href}
										className={({ isActive }) =>
											cn(
												'rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
												isActive && 'bg-muted text-foreground'
											)
										}
									>
										{item.label}
									</NavLink>
								))}
								<Button className="mt-2 w-full">进入VR展馆</Button>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</header>
	)
}
