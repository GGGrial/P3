import { Link } from 'react-router'

export default function SiteFooter() {
	return (
		<footer className="border-t border-border/60 bg-background/80">
			<div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
				<div className="space-y-1">
					<p className="text-foreground">军事兵工厂线上虚拟三维展馆</p>
					<p>数字化存储 · 爱国教育 · 虚拟装配</p>
				</div>
				<div className="flex flex-wrap gap-4">
					<Link to="/venue-guide" className="hover:text-foreground">
						展馆导览
					</Link>
					<Link to="/media" className="hover:text-foreground">
						媒体资源
					</Link>
					<Link to="/contact" className="hover:text-foreground">
						联系报名
					</Link>
				</div>
			</div>
		</footer>
	)
}
