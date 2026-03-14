import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const workflowSteps = [
	{
		step: '01',
		title: '数据建模与缩放',
		description: '将设备与零部件数据进行三维建模并等比例缩放。'
	},
	{
		step: '02',
		title: '线上拼接装配',
		description: '在拼接车间完成部件的模块化组装与定位。'
	},
	{
		step: '03',
		title: '调试与复核',
		description: '复核装配精度与工艺流程，记录关键问题。'
	},
	{
		step: '04',
		title: '线下实施验证',
		description: '线上验证无误后再落地实施，降低试错成本。'
	}
]

const valuePoints = ['降低经济投入与试错成本', '减少人员伤亡与安全风险', '形成可复用的装配知识库']

export default function AssemblyView() {
	return (
		<div>
			<section className="px-6 pb-12 pt-16">
				<div className="mx-auto flex max-w-6xl flex-col gap-8">
					<div className="space-y-4">
						<Badge variant="secondary" className="uppercase tracking-[0.2em]">
							装配流程
						</Badge>
						<h1 className="text-4xl font-semibold">线上拼接与调试流程</h1>
						<p className="max-w-3xl text-base text-muted-foreground md:text-lg">
							通过线上虚拟装配与调试，验证装配逻辑与工艺路径，减少线下成本与风险。
						</p>
					</div>
					<div className="grid gap-4 md:grid-cols-2">
						{workflowSteps.map(item => (
							<Card key={item.step} className="border-border/60 bg-background/70 p-5">
								<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">步骤 {item.step}</p>
								<h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
								<p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section className="px-6 pb-20">
				<div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1.1fr_1fr]">
					<Card className="border-border/60 bg-background/70 p-6">
						<p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">流程价值</p>
						<ul className="mt-4 space-y-3 text-sm text-muted-foreground">
							{valuePoints.map(item => (
								<li key={item} className="rounded-md border border-border/60 px-3 py-2">
									{item}
								</li>
							))}
						</ul>
					</Card>
					<Card className="border-border/60 bg-background/70 p-6">
						<div className="space-y-4">
							<p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">交互入口</p>
							<p className="text-sm text-muted-foreground">查看装配时间线、关键节点与调试记录示意。</p>
							<Button className="w-full">查看装配时间线</Button>
							<Button variant="outline" className="w-full">
								下载流程文档
							</Button>
						</div>
					</Card>
				</div>
			</section>
		</div>
	)
}
