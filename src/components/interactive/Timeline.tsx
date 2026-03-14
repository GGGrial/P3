import { cn } from '@/lib/utils'

type TimelineItem = {
	step: string
	title: string
	description: string
}

type TimelineProps = {
	items: TimelineItem[]
	className?: string
}

export default function Timeline({ items, className }: TimelineProps) {
	return (
		<div className={cn('rounded-2xl border border-border/60 bg-background/70 p-6', className)}>
			<p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">装配时间线</p>
			<div className="mt-5 space-y-5">
				{items.map((item, index) => (
					<div key={item.step} className="relative pl-8">
						<div className="absolute left-0 top-0 flex size-6 items-center justify-center rounded-full border border-border/60 bg-background text-xs font-semibold">
							{item.step}
						</div>
						{index !== items.length - 1 && <div className="absolute left-3 top-6 h-full w-px bg-border/60" />}
						<h4 className="text-base font-semibold">{item.title}</h4>
						<p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}
