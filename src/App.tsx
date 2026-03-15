import { ReactLenis } from 'lenis/react'
import { Toaster } from '@/components/ui/sonner'
import { RouterProvider } from 'react-router'
import { router } from '@/router'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

function App() {
	const lenis = new Lenis()
	lenis.on('scroll', ScrollTrigger.update)
	gsap.ticker.add(time => {
		lenis.raf(time * 1000)
	})

	gsap.ticker.lagSmoothing(1000 / 60)

	return (
		<ReactLenis root>
			<Toaster />
			<RouterProvider router={router} />
		</ReactLenis>
	)
}

export default App
