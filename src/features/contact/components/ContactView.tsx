import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const contactChannels = [
	{
		label: '合作对接',
		value: '合作需求与项目咨询通道'
	},
	{
		label: '研学报名',
		value: '研学活动与参观预约入口'
	},
	{
		label: '资料申请',
		value: '资料下载与授权申请'
	}
]

export default function ContactView() {
	return (
		<div>
			<section className="px-6 pb-12 pt-16">
				<div className="mx-auto flex max-w-6xl flex-col gap-8">
					<div className="space-y-4">
						<Badge variant="secondary" className="uppercase tracking-[0.2em]">
							联系报名
						</Badge>
						<h1 className="text-4xl font-semibold">对外沟通与报名入口</h1>
						<p className="max-w-3xl text-base text-muted-foreground md:text-lg">
							提供合作对接、研学报名与资料申请通道，支持线上联系与需求提交。
						</p>
					</div>
					<div className="grid gap-4 md:grid-cols-3">
						{contactChannels.map(item => (
							<Card key={item.label} className="border-border/60 bg-background/70 p-5">
								<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{item.label}</p>
								<p className="mt-2 text-sm text-muted-foreground">{item.value}</p>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section className="px-6 pb-20">
				<div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-[1.1fr_1fr]">
					<Card className="border-border/60 bg-background/70 p-6">
						<p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">联系表单</p>
						<div className="mt-4 space-y-3">
							<Input placeholder="姓名 / 机构" />
							<Input placeholder="联系电话" />
							<Input placeholder="邮箱" />
							<Textarea placeholder="描述需求或报名信息" rows={4} />
							<Button className="w-full">提交申请</Button>
						</div>
					</Card>
					<Card className="border-border/60 bg-background/70 p-6">
						<div className="space-y-4">
							<p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">联系信息</p>
							<p className="text-sm text-muted-foreground">工作时间：周一至周五 09:00 - 18:00</p>
							<p className="text-sm text-muted-foreground">邮箱：contact@virtual-arsenal.example</p>
							<Button variant="outline" className="w-full">
								下载报名表
							</Button>
						</div>
					</Card>
				</div>
			</section>
		</div>
	)
}
