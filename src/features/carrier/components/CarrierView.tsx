import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const carriers = [
	{
		name: '航母一号',
		status: '首艘验证',
		focus: '结构建模与装配验证'
	},
	{
		name: '航母二号',
		status: '协同装配',
		focus: '系统集成与工艺演示'
	},
	{
		name: '航母三号',
		status: '前沿升级',
		focus: '先进模块与流程优化'
	}
]

const highlights = ['高精度结构拆解与组件展示', '关键系统工艺节点复现', '线上装配流程与调试验证']

export default function CarrierView() {
	return (
		<div>
			<section className="px-6 pb-12 pt-16">
				<div className="mx-auto flex max-w-6xl flex-col gap-8">
					<div className="space-y-4">
						<Badge variant="secondary" className="uppercase tracking-[0.2em]">
							航母展示
						</Badge>
						<h1 className="text-4xl font-semibold">航母专题展馆</h1>
						<p className="max-w-3xl text-base text-muted-foreground md:text-lg">
							聚焦航母一号、二号、三号三大专题展馆，展示模型细节、装配流程与关键技术亮点。
						</p>
						<div className="flex flex-wrap gap-3">
							<Button size="lg">进入航母展馆</Button>
							<Button size="lg" variant="outline">
								查看装配流程
							</Button>
						</div>
					</div>
					<div className="grid gap-4 md:grid-cols-3">
						{carriers.map(carrier => (
							<Card key={carrier.name} className="border-border/60 bg-background/70 p-5">
								<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{carrier.status}</p>
								<h3 className="mt-2 text-lg font-semibold">{carrier.name}</h3>
								<p className="mt-2 text-sm text-muted-foreground">{carrier.focus}</p>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section className="px-6 pb-20">
				<div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1.2fr_1fr]">
					<Card className="border-border/60 bg-background/70 p-6">
						<p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">航母专题亮点</p>
						<ul className="mt-4 space-y-3 text-sm text-muted-foreground">
							{highlights.map(item => (
								<li key={item} className="rounded-md border border-border/60 px-3 py-2">
									{item}
								</li>
							))}
						</ul>
					</Card>
					<Card className="border-border/60 bg-background/70 p-6">
						<div className="space-y-4">
							<p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">交互入口</p>
							<p className="text-sm text-muted-foreground">支持三维模型细节查看、装配节点演示与VR入口跳转。</p>
							<Button className="w-full">启动三维查看</Button>
							<Button variant="outline" className="w-full">
								下载航母资料
							</Button>
						</div>
					</Card>
				</div>
			</section>
		</div>
	)
}
