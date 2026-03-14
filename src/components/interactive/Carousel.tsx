import { useMemo, useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type CarouselItem = {
	title: string
	description: string
}

type CarouselProps = {
	items: CarouselItem[]
	className?: string
}

export default function Carousel({ items, className }: CarouselProps) {
	const viewportRef = useRef<HTMLDivElement | null>(null)
	const cardWidth = useMemo(() => 360, [])

	const scrollByCard = (direction: 'prev' | 'next') => {
		const viewport = viewportRef.current
		if (!viewport) return
		const delta = direction === 'next' ? cardWidth : -cardWidth
		viewport.scrollBy({ left: delta, behavior: 'smooth' })
	}

	return (
		<div className={cn('rounded-2xl border border-border/60 bg-background/70 p-5', className)}>
			<div className="flex items-center justify-between">
				<div>
					<p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">展馆精选内容</p>
					<p className="mt-2 text-lg font-semibold">重点模块轮播</p>
				</div>
				<div className="flex gap-2">
					<Button variant="outline" size="icon-sm" onClick={() => scrollByCard('prev')}>
						<ChevronLeftIcon className="size-4" />
					</Button>
					<Button variant="outline" size="icon-sm" onClick={() => scrollByCard('next')}>
						<ChevronRightIcon className="size-4" />
					</Button>
				</div>
			</div>
			<div ref={viewportRef} className="mt-4 flex gap-4 overflow-x-auto scroll-smooth pb-3">
				{items.map(item => (
					<div
						key={item.title}
						className="min-w-[260px] flex-1 rounded-xl border border-border/60 bg-background/80 p-4 md:min-w-[320px]"
					>
						<h4 className="text-base font-semibold">{item.title}</h4>
						<p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
					</div>
				))}
			</div>
		</div>
	)
}
