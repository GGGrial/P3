import { ReactLenis } from 'lenis/react'
import { Toaster } from '@/components/ui/sonner'
import { RouterProvider } from 'react-router'
import { router } from '@/router'

function App() {
	return (
		<ReactLenis root>
			<Toaster />
			<RouterProvider router={router} />
		</ReactLenis>
	)
}

export default App
