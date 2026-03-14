import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const equipmentCategories = [
	{
		label: '装甲装备',
		description: '装甲车与地面装备模型陈列。'
	},
	{
		label: '舰载设备',
		description: '甲板与舰载系统关键组件。'
	},
	{
		label: '零部件器材',
		description: '高精度零部件与材料库。'
	}
]

const equipmentHighlights = ['高精度微模型展示与拆解', '关键装备参数与工艺说明', '支持3D视角与细节标注']

export default function EquipmentView() {
	return (
		<div>
			<section className="px-6 pb-12 pt-16">
				<div className="mx-auto flex max-w-6xl flex-col gap-8">
					<div className="space-y-4">
						<Badge variant="secondary" className="uppercase tracking-[0.2em]">
							装备展示
						</Badge>
						<h1 className="text-4xl font-semibold">装备与微模型展区</h1>
						<p className="max-w-3xl text-base text-muted-foreground md:text-lg">
							聚焦装甲车辆、舰载设备与零部件器材，构建可视化与可交互的装备资料库。
						</p>
						<div className="flex flex-wrap gap-3">
							<Button size="lg">进入装备展区</Button>
							<Button size="lg" variant="outline">
								查看资料下载
							</Button>
						</div>
					</div>
					<div className="grid gap-4 md:grid-cols-3">
						{equipmentCategories.map(item => (
							<Card key={item.label} className="border-border/60 bg-background/70 p-5">
								<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">分类</p>
								<h3 className="mt-2 text-lg font-semibold">{item.label}</h3>
								<p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section className="px-6 pb-20">
				<div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1.1fr_1fr]">
					<Card className="border-border/60 bg-background/70 p-6">
						<p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">展示重点</p>
						<ul className="mt-4 space-y-3 text-sm text-muted-foreground">
							{equipmentHighlights.map(item => (
								<li key={item} className="rounded-md border border-border/60 px-3 py-2">
									{item}
								</li>
							))}
						</ul>
					</Card>
					<Card className="border-border/60 bg-background/70 p-6">
						<div className="space-y-4">
							<p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">装备档案</p>
							<p className="text-sm text-muted-foreground">每个装备条目可关联三维模型、参数说明与装配流程卡片。</p>
							<Button className="w-full">查看装备目录</Button>
							<Button variant="outline" className="w-full">
								获取完整清单
							</Button>
						</div>
					</Card>
				</div>
			</section>
		</div>
	)
}
