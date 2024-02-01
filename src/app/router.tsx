import { Home } from '@/pages/home'
import { Themes } from '@/pages/themes'
import { AppUrls } from '@/shared/routes/urls'
import { createBrowserRouter } from 'react-router-dom'
import { RootLayout } from './layout'

export const router = createBrowserRouter([
	{
		path: AppUrls.home,
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: AppUrls.themes,
				element: <Themes />,
			},
		],
	},
])
