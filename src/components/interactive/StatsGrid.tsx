import { Card } from '@/components/ui/card'

type StatItem = {
	label: string
	value: string
	helper?: string
}

type StatsGridProps = {
	items: StatItem[]
}

export default function StatsGrid({ items }: StatsGridProps) {
	return (
		<div className="grid gap-4 md:grid-cols-4">
			{items.map(item => (
				<Card key={item.label} className="border-border/60 bg-background/70 p-4">
					<p className="text-sm text-muted-foreground">{item.label}</p>
					<p className="mt-2 text-2xl font-semibold">{item.value}</p>
					{item.helper ? <p className="mt-1 text-xs text-muted-foreground">{item.helper}</p> : null}
				</Card>
			))}
		</div>
	)
}
