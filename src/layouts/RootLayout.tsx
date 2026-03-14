import { Outlet } from 'react-router'
import SiteHeader from '@/components/site/SiteHeader'
import SiteFooter from '@/components/site/SiteFooter'

export default function RootLayout() {
	return (
		<div className="flex min-h-screen flex-col bg-background text-foreground">
			<SiteHeader />
			<main className="flex-1">
				<Outlet />
			</main>
			<SiteFooter />
		</div>
	)
}
