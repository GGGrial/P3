import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

const highlights = [
	{
		title: '数字化存储与传承',
		description: '面向涉密与开放资源的长期数字化保存。'
	},
	{
		title: '爱国主义教育',
		description: '打造线上研学展馆与科普内容矩阵。'
	},
	{
		title: '虚拟装配与调试',
		description: '线上验证装配流程，降低线下试错成本。'
	}
]

const sections = [
	{ label: '展馆导览', description: '6馆+1展示区结构与动线' },
	{ label: '航母展示', description: '一号/二号/三号航母专题' },
	{ label: '装备展示', description: '装甲车与微模型展区' },
	{ label: '装配流程', description: '拼接与调试流程展示' }
]

export default function HomeView() {
	return (
		<div>
			<section className="relative overflow-hidden">
				<div className="flex flex-col items-center h-screen pt-50 gap-4">
					<h1 className="text-balance text-4xl font-semibold leading-tight md:text-5xl">军事兵工厂线上虚拟三维展馆</h1>

					<p className="max-w-2xl text-base text-muted-foreground md:text-lg text-center">
						数字存储、线上教育与虚拟装配为核心，构建高可信度的军工文化展示与实践平台
					</p>
					<div className="flex flex-wrap gap-4 justify-center mt-5">
						<Button size="lg">进入VR展馆</Button>
						<Button size="lg" variant="outline">
							查看展馆导览
						</Button>
					</div>
				</div>
			</section>

			<Separator />

			<section className="px-6 py-16">
				<div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.1fr_1fr]">
					<div className="space-y-4">
						<h2 className="text-3xl font-semibold">展馆结构一览</h2>
						<p className="text-muted-foreground">6个展馆与1个展示区，覆盖航母、装备、零部件、装配流程与研学展示。</p>
						<div className="grid gap-3">
							{sections.map(section => (
								<div key={section.label} className="rounded-lg border border-border/60 bg-background/70 px-4 py-3">
									<p className="font-medium text-foreground">{section.label}</p>
									<p className="text-sm text-muted-foreground">{section.description}</p>
								</div>
							))}
						</div>
					</div>
					<Card className="border-border/60 bg-background/70 p-6">
						<div className="space-y-4">
							<p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">关键数据</p>
							<div className="grid grid-cols-2 gap-4 text-sm">
								<div>
									<p className="text-2xl font-semibold">6+1</p>
									<p className="text-muted-foreground">展馆与展示区</p>
								</div>
								<div>
									<p className="text-2xl font-semibold">3</p>
									<p className="text-muted-foreground">拼接车间</p>
								</div>
								<div>
									<p className="text-2xl font-semibold">3</p>
									<p className="text-muted-foreground">航母专题展馆</p>
								</div>
								<div>
									<p className="text-2xl font-semibold">2+</p>
									<p className="text-muted-foreground">服务研学与科普</p>
								</div>
							</div>
							<Button variant="outline" className="w-full">
								查看全景导览
							</Button>
						</div>
					</Card>
				</div>
			</section>

			<section className="px-6 pb-20">
				<div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
					<Card className="border-border/60 bg-background/70 p-6">
						<h3 className="text-lg font-semibold">线上装配验证</h3>
						<p className="mt-2 text-sm text-muted-foreground">线上拼接与调试复盘，减少线下试错与人员风险。</p>
					</Card>
					<Card className="border-border/60 bg-background/70 p-6">
						<h3 className="text-lg font-semibold">数字化成果展示</h3>
						<p className="mt-2 text-sm text-muted-foreground">对外展示关键装备与历史资料，支持研学宣传。</p>
					</Card>
					<Card className="border-border/60 bg-background/70 p-6">
						<h3 className="text-lg font-semibold">跨团队协作</h3>
						<p className="mt-2 text-sm text-muted-foreground">二维/三维/VR/网页团队协同推进，保障进度。</p>
					</Card>
				</div>
			</section>
		</div>
	)
}
