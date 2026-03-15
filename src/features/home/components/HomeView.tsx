import AnimatedContent from '@/components/react-bits/AnimatedContent'
import ShimmerText from '@/components/spell/shimmer-text'
import { SlideUpText } from '@/components/spell/slide-up-text'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { useRef } from 'react'
import { Tilt } from '@/components/ui/tilt'
import { Badge } from '@/components/ui/badge'
import { BlurReveal } from '@/components/spell/blur-reveal'

gsap.registerPlugin(ScrollTrigger)

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

const sections = [
	{ label: '展馆导览', description: '6馆+1展示区结构与动线' },
	{ label: '航母展示', description: '一号/二号/三号航母专题' },
	{ label: '装备展示', description: '装甲车与微模型展区' },
	{ label: '装配流程', description: '拼接与调试流程展示' }
]

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

export default function HomeView() {
	const imageRef = useRef<HTMLImageElement | null>(null)
	const endRef = useRef<HTMLDivElement | null>(null)
	const startRef = useRef<HTMLDivElement | null>(null)
	const textRef = useRef<HTMLDivElement | null>(null)

	useGSAP(() => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: startRef.current,
				start: '-=120 top',
				endTrigger: endRef.current,
				end: 'top bottom',
				scrub: true,
				pin: true,
				markers: false,
				pinSpacing: false
			}
		})

		tl.to(textRef.current, {
			opacity: 0,
			duration: 0.05
		})

		tl.to(imageRef.current, {
			y: 100,
			x: 280,
			ease: 'none'
		})

		tl.to(imageRef.current, {
			scale: 4,
			ease: 'none'
		})
	})

	return (
		<div>
			<section className="relative overflow-hidden">
				<div className="flex flex-col items-center h-screen gap-4">
					<SlideUpText
						split="characters"
						className="text-balance text-4xl font-semibold leading-tight md:text-5xl mt-50"
					>
						军事兵工厂线上虚拟三维展馆
					</SlideUpText>
					<AnimatedContent duration={1} distance={150}>
						<ShimmerText className="max-w-2xl text-center text-base text-muted-foreground md:text-lg">
							数字存储、线上教育与虚拟装配为核心，构建高可信度的军工文化展示与实践平台
						</ShimmerText>
						<div className="flex flex-wrap gap-4 justify-center mt-5">
							<Button size="lg">进入VR展馆</Button>
							<Button size="lg" variant="outline">
								查看展馆导览
							</Button>
						</div>
					</AnimatedContent>
					<AnimatedContent duration={1} distance={150}>
						<div className="mt-20">
							<InfiniteSlider gap={20} speed={50}>
								{Array.from({ length: 10 }).map((_, index) => (
									<div className="w-70 h-36 border rounded-lg text-center leading-36" key={index}>
										图片占位
									</div>
								))}
							</InfiniteSlider>
						</div>
					</AnimatedContent>
				</div>
			</section>

			<Separator />

			<section className="py-16">
				<div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 min-h-100">
					<div className="space-y-4">
						<h2 className="text-3xl font-semibold">
							<BlurReveal inView>展馆结构一览</BlurReveal>
						</h2>
						<p className="text-muted-foreground">
							<BlurReveal inView>6个展馆与1个展示区，覆盖航母、装备、零部件、装配流程与研学展示。</BlurReveal>
						</p>
						<AnimatedContent duration={1} distance={150}>
							<div className="grid gap-3">
								{sections.map(section => (
									<div key={section.label} className="rounded-lg border border-border/60 bg-background/70 px-4 py-3">
										<p className="font-medium text-foreground">{section.label}</p>
										<p className="text-sm text-muted-foreground">{section.description}</p>
									</div>
								))}
							</div>
						</AnimatedContent>
					</div>
					<div>
						<AnimatedContent duration={1} distance={150}>
							<Card className="border-border/60 bg-background/70 p-6 h-101">
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
						</AnimatedContent>
					</div>
				</div>
			</section>

			<Separator />

			<section className="py-16 h-650 overflow-hidden">
				<div className="grid grid-cols-2 gap-16 max-w-6xl mx-auto">
					{Array.from({ length: 2 }).map((_, index) => (
						<div className="w-140 h-80 border rounded-lg relative" key={index}>
							<div className="absolute bottom-0 left-0">
								<div className="flex flex-col items-start gap-0 px-5 py-4">
									<p className="text-base font-medium ">Benjamin Spiers</p>
									<span className="mb-2 text-base">Moonlight 2023</span>
									<p className="text-base ">Oil on linen. 40cm by 30cm</p>
								</div>
							</div>
						</div>
					))}

					<div className="z-99 relative" ref={startRef}>
						<div className="w-140 h-80 rounded-lg bg-primary" ref={imageRef}>
							<div className="absolute bottom-0 left-0" ref={textRef}>
								<div className="flex flex-col items-start gap-0 px-5 py-4">
									<p className="text-base font-medium text-primary-foreground">Benjamin Spiers</p>
									<span className="mb-2 text-base text-primary-foreground">Moonlight 2023</span>
									<p className="text-base text-primary-foreground">Oil on linen. 40cm by 30cm</p>
								</div>
							</div>
						</div>
					</div>

					<div className="w-140 h-80 border rounded-lg relative">
						<div className="absolute bottom-0 left-0">
							<div className="flex flex-col items-start gap-0 px-5 py-4">
								<p className="text-base font-medium ">Benjamin Spiers</p>
								<span className="mb-2 text-base">Moonlight 2023</span>
								<p className="text-base ">Oil on linen. 40cm by 30cm</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="bg-primary h-[190vh]" ref={endRef}>
				<div className="mx-auto flex max-w-6xl flex-col gap-8">
					<div className="space-y-4">
						<Badge variant="secondary" className="uppercase tracking-[0.2em]">
							装备展示
						</Badge>
						<h1 className="text-4xl font-semibold text-primary-foreground">
							<BlurReveal inView>装备与微模型展区</BlurReveal>
						</h1>
						<p className="max-w-3xl text-base text-muted-foreground md:text-lg">
							<BlurReveal inView>聚焦装甲车辆、舰载设备与零部件器材，构建可视化与可交互的装备资料库。</BlurReveal>
						</p>
						<AnimatedContent duration={1} distance={150}>
							<div className="flex flex-wrap gap-3">
								<Button size="lg" variant="outline">
									进入装备展区
								</Button>
								<Button size="lg" variant="outline">
									查看资料下载
								</Button>
							</div>
						</AnimatedContent>
					</div>

					<AnimatedContent duration={1} distance={150}>
						<div className="grid grid-cols-6 auto-rows-[120px] gap-6 max-w-6xl mx-auto">
							<div className="col-span-2 row-span-4 w-full h-full border rounded-lg bg-background flex items-center justify-center">
								A
							</div>

							<div className="col-span-4 row-span-2 w-full h-full border rounded-lg bg-background flex items-center justify-center">
								B
							</div>

							<div className="col-span-2 row-span-3 w-full h-full border rounded-lg bg-background flex items-center justify-center">
								C
							</div>

							<div className="col-span-2 row-span-4 w-full h-full border rounded-lg bg-background flex items-center justify-center">
								D
							</div>

							<div className="col-span-4 row-span-2 w-full h-full border rounded-lg bg-background flex items-center justify-center">
								E
							</div>

							<div className="col-span-2 row-span-2 w-full h-full border rounded-lg bg-background flex items-center justify-center">
								F
							</div>
						</div>
					</AnimatedContent>
				</div>
			</section>

			<Separator />

			<section className="py-16">
				<div className="mx-auto flex max-w-6xl flex-col gap-8">
					<div className="space-y-4">
						<Badge variant="secondary" className="uppercase tracking-[0.2em]">
							航母展示
						</Badge>
						<h1 className="text-4xl font-semibold">
							<BlurReveal inView>航母专题展馆</BlurReveal>
						</h1>
						<p className="max-w-3xl text-base text-muted-foreground md:text-lg">
							<BlurReveal inView>
								聚焦航母一号、二号、三号三大专题展馆，展示模型细节、装配流程与关键技术亮点。
							</BlurReveal>
						</p>
						<AnimatedContent duration={1} distance={150}>
							<div className="flex flex-wrap gap-3">
								<Button size="lg">进入航母展馆</Button>
								<Button size="lg" variant="outline">
									查看装配流程
								</Button>
							</div>
						</AnimatedContent>
					</div>
					<AnimatedContent duration={1} distance={150}>
						<div className="grid md:grid-cols-3 max-w-6xl mx-auto gap-12">
							{carriers.map(carrier => (
								<Tilt key={carrier.name} rotationFactor={8} isRevese>
									<Card className="border-border/60 bg-background/70 p-5 h-100 select-none">
										<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{carrier.status}</p>
										<h3 className="mt-2 text-lg font-semibold">{carrier.name}</h3>
										<p className="mt-2 text-sm text-muted-foreground">{carrier.focus}</p>
									</Card>
								</Tilt>
							))}
						</div>
					</AnimatedContent>
				</div>
			</section>

			<Separator />

			<section className="px-6 pb-12 pt-16">
				<div className="mx-auto flex max-w-6xl flex-col gap-8">
					<div className="space-y-4">
						<Badge variant="secondary" className="uppercase tracking-[0.2em]">
							装配流程
						</Badge>
						<h1 className="text-4xl font-semibold">
							<BlurReveal inView>线上拼接与调试流程</BlurReveal>
						</h1>
						<p className="max-w-3xl text-base text-muted-foreground md:text-lg">
							<BlurReveal inView>通过线上虚拟装配与调试，验证装配逻辑与工艺路径，减少线下成本与风险。</BlurReveal>
						</p>
					</div>
					<AnimatedContent duration={1} distance={150}>
						<div className="grid gap-4 md:grid-cols-2">
							{workflowSteps.map(item => (
								<Card key={item.step} className="border-border/60 bg-background/70 p-5">
									<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">步骤 {item.step}</p>
									<h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
									<p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
								</Card>
							))}
						</div>
					</AnimatedContent>
				</div>
			</section>

			<Separator />

			<section className="h-[200vh]"></section>
		</div>
	)
}
