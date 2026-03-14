import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const mediaBlocks = [
	{
		label: '图集',
		title: '展馆与装备图集',
		detail: '展示展馆空间、航母与装备模型的关键视角。'
	},
	{
		label: '视频',
		title: '虚拟展馆演示',
		detail: '记录线上装配流程与展示动线。'
	},
	{
		label: '资料',
		title: '项目资料下载',
		detail: '提供研学手册、资料集与说明文档。'
	}
]

const resourceItems = ['兵工厂数字化成果手册（占位）', '航母专题资料包（占位）', '装配流程说明文档（占位）']

export default function MediaView() {
	return (
		<div>
			<section className="px-6 pb-12 pt-16">
				<div className="mx-auto flex max-w-6xl flex-col gap-8">
					<div className="space-y-4">
						<Badge variant="secondary" className="uppercase tracking-[0.2em]">
							媒体资源
						</Badge>
						<h1 className="text-4xl font-semibold">图集 · 视频 · 资料下载</h1>
						<p className="max-w-3xl text-base text-muted-foreground md:text-lg">
							集中展示展馆图集、演示视频与资料下载入口，便于研学与对外宣传使用。
						</p>
						<div className="flex flex-wrap gap-3">
							<Button size="lg">查看最新图集</Button>
							<Button size="lg" variant="outline">
								下载全部资料
							</Button>
						</div>
					</div>
					<div className="grid gap-4 md:grid-cols-3">
						{mediaBlocks.map(item => (
							<Card key={item.title} className="border-border/60 bg-background/70 p-5">
								<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
								<h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
								<p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section className="px-6 pb-20">
				<div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1.1fr_1fr]">
					<Card className="border-border/60 bg-background/70 p-6">
						<p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">下载清单</p>
						<ul className="mt-4 space-y-3 text-sm text-muted-foreground">
							{resourceItems.map(item => (
								<li key={item} className="rounded-md border border-border/60 px-3 py-2">
									{item}
								</li>
							))}
						</ul>
					</Card>
					<Card className="border-border/60 bg-background/70 p-6">
						<div className="space-y-4">
							<p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">媒体入口</p>
							<p className="text-sm text-muted-foreground">支持视频展示、图集浏览与资料打包下载。</p>
							<Button className="w-full">播放展馆演示</Button>
							<Button variant="outline" className="w-full">
								查看全部图集
							</Button>
						</div>
					</Card>
				</div>
			</section>
		</div>
	)
}
