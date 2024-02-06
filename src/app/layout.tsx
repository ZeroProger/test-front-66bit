import { default as Logo } from '@/app/assets/logo.svg?react'
import { RouterUrls } from '@/shared/routes/urls'
import { ThemeSwitch } from '@/shared/ui/theme-switch'
import { Link, Outlet } from 'react-router-dom'
import { ThemeProvider } from '../shared/ui/theme-provider/theme-provider'

export function RootLayout() {
	return (
		<ThemeProvider>
			<div className="">
				<div className="shadow-header">
					<header className="w-full min-h-[90px] flex flex-nowrap gap-4 justify-between items-center px-layout-xs xs:px-layout-sm sm:p-layout content-container">
						<Link to={RouterUrls.home}>
							<Logo />
						</Link>
						<div className="flex gap-12">
							<ul className="flex items-center gap-16 text-lg">
								<li>
									<Link to="tel:+73432908476">+7 343 290 84 76</Link>
								</li>
								<li>
									<Link to="mailto:info@66bit.ru">info@66bit.ru</Link>
								</li>
							</ul>
							<ThemeSwitch />
						</div>
					</header>
				</div>
				<main className="content-container p-layout-xs xs:p-layout-sm sm:p-layout">
					<Outlet />
				</main>
			</div>
		</ThemeProvider>
	)
}
