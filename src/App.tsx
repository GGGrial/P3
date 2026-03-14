import { useState } from 'react'
import { Button } from '@/components/ui/button'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<div className="w-2 p-1 text-2xl text-slate-300">123</div>
			<Button>click</Button>
		</>
	)
}

export default App
