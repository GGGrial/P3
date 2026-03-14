import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

type VREntryCardProps = {
	label?: string
	title?: string
	description?: string
	buttonText?: string
}

export default function VREntryCard({
	label = '虚拟展馆入口',
	title = '沉浸式三维浏览',
	description = '进入虚拟展馆，查看航母与装备细节，体验装配流程。',
	buttonText = '启动VR体验'
}: VREntryCardProps) {
	return (
		<Card className="border-border/60 bg-background/70 p-6">
			<p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
			<h3 className="mt-2 text-lg font-semibold">{title}</h3>
			<p className="mt-2 text-sm text-muted-foreground">{description}</p>
			<Button className="mt-4 w-full">{buttonText}</Button>
		</Card>
	)
}
