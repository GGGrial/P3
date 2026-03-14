import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const venueOverview = [
	{
		label: '展示区',
		title: '航母一/二/三号展示区',
		detail: '集中呈现三大航母的数字化与装备成果。'
	},
	{
		label: '拼接车间',
		title: '1号拼接车间',
		detail: '面向航母一号的线上装配与验证。'
	},
	{
		label: '拼接车间',
		title: '2号拼接车间',
		detail: '面向航母二号的装配流程与协同演示。'
	},
	{
		label: '拼接车间',
		title: '3号拼接车间',
		detail: '面向航母三号的装配验证与工艺展示。'
	},
	{
		label: '专题展馆',
		title: '零部件与器材展示展馆',
		detail: '高精度零部件、器材与资料的陈列。'
	},
	{
		label: '专题展馆',
		title: '拼接组装展馆',
		detail: '完整装配链路与验证流程展示。'
	}
]

const routeSteps = [
	'入口导览区 → 项目概览',
	'展示区 → 航母专题展示',
	'拼接车间 → 线上装配流程',
	'专题展馆 → 零部件与组装展示'
]

export default function VenueGuideView() {
	return (
		<div>
			<section className="px-6 pb-12 pt-16">
				<div className="mx-auto flex max-w-6xl flex-col gap-8">
					<div className="space-y-4">
						<Badge variant="secondary" className="uppercase tracking-[0.2em]">
							展馆导览
						</Badge>
						<h1 className="text-4xl font-semibold">展馆结构与动线</h1>
						<p className="max-w-3xl text-base text-muted-foreground md:text-lg">
							整体规划为6个展馆与1个展示区，围绕航母展示、拼接车间、零部件与装配流程展开。
						</p>
					</div>
					<Card className="border-border/60 bg-background/70 p-6">
						<div className="grid gap-6 md:grid-cols-[1.1fr_1fr]">
							<div>
								<p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">动线建议</p>
								<ul className="mt-3 space-y-2 text-sm text-muted-foreground">
									{routeSteps.map(step => (
										<li key={step} className="rounded-md border border-border/60 px-3 py-2">
											{step}
										</li>
									))}
								</ul>
							</div>
							<div className="space-y-3">
								<p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">导览要点</p>
								<p className="text-sm text-muted-foreground">
									展馆布局将覆盖航母展示、装配验证、零部件陈列与研学传播，确保线上动线清晰、结构有序。
								</p>
								<Button variant="outline" className="w-full">
									查看全景布局
								</Button>
							</div>
						</div>
					</Card>
				</div>
			</section>

			<section className="px-6 pb-20">
				<div className="mx-auto grid max-w-6xl gap-4 md:grid-cols-2">
					{venueOverview.map(venue => (
						<Card key={venue.title} className="border-border/60 bg-background/70 p-5">
							<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{venue.label}</p>
							<h3 className="mt-2 text-lg font-semibold">{venue.title}</h3>
							<p className="mt-2 text-sm text-muted-foreground">{venue.detail}</p>
						</Card>
					))}
				</div>
			</section>
		</div>
	)
}
