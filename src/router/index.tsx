import { createBrowserRouter } from 'react-router'
import RootLayout from '@/layouts/RootLayout'
import HomePage from '@/pages/home/HomePage'
import VenueGuidePage from '@/pages/venue-guide/VenueGuidePage'
import CarrierPage from '@/pages/carrier/CarrierPage'
import EquipmentPage from '@/pages/equipment/EquipmentPage'
import AssemblyPage from '@/pages/assembly/AssemblyPage'
import MediaPage from '@/pages/media/MediaPage'
import ContactPage from '@/pages/contact/ContactPage'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: 'venue-guide', element: <VenueGuidePage /> },
			{ path: 'carrier', element: <CarrierPage /> },
			{ path: 'equipment', element: <EquipmentPage /> },
			{ path: 'assembly', element: <AssemblyPage /> },
			{ path: 'media', element: <MediaPage /> },
			{ path: 'contact', element: <ContactPage /> }
		]
	}
])
