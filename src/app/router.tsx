import { Home } from '@/pages/home'
import { Employee } from '@/pages/employee'
import { RouterPaths } from '@/shared/routes/urls'
import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './layout'

export const router = createBrowserRouter([
	{
		path: RouterPaths.home,
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: RouterPaths.employee,
				element: <Employee />,
			},
		],
	},
])
