import { FilterEmployeesProvider } from '@/entities/employee'
import { Employee } from '@/pages/employee'
import { Home } from '@/pages/home'
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
				element: (
					<FilterEmployeesProvider>
						<Home />
					</FilterEmployeesProvider>
				),
			},
			{
				path: RouterPaths.employee,
				element: <Employee />,
			},
		],
	},
])
