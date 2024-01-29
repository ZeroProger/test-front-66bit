import { Home } from '@/pages/home'
import { Themes } from '@/pages/themes'
import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from '../layout'
import { paths } from './paths'

export const router = createBrowserRouter([
	{
		path: paths.home,
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: paths.themes,
				element: <Themes />,
			},
		],
	},
])
