import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ReactLenis } from 'lenis/react'
import { Toaster } from '@/components/ui/sonner'
import { toast } from 'sonner'
import { BlurReveal } from '@/components/spell/blur-reveal'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<ReactLenis root />
			<Toaster />
			<main className="h-500">
				<section className="grid place-items-center">
					<BlurReveal>click button</BlurReveal>
					<div className="mt-50 text-2xl text-blue-300"></div>
					<Button onClick={() => setCount(count + 1)}>click</Button>
					<Button onClick={() => toast('Hello, world!')}>show</Button>
				</section>
			</main>
		</>
	)
}

export default App
