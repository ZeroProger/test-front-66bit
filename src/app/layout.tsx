import { default as Logo } from '@/app/assets/logo.svg?react'
import { RouterUrls } from '@/shared/routes/urls'
import { ThemeProvider } from '@/shared/ui/theme-provider'
import { ThemeSwitch } from '@/shared/ui/theme-switch'
import { Breadcrumbs } from '@/widgets/breadcrumbs'
import { Link, Outlet } from 'react-router-dom'

export function RootLayout() {
	return (
		<ThemeProvider>
			<div className="shadow-header">
				<header className="h-[54px] sm:h-[90px] px-layout py-4 flex flex-nowrap gap-4 justify-between items-center content-container">
					<Link to={RouterUrls.home}>
						<Logo className="w-[52px] h-[22px] sm:w-[101px] sm:h-[41px]" />
					</Link>
					<div className="flex gap-12">
						<ul className="hidden sm:flex items-center gap-16 text-lg ">
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
			<Breadcrumbs />
			<main className="content-container py-4">
				<Outlet />
			</main>
		</ThemeProvider>
	)
}
