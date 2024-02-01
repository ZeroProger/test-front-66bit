import { registerServiceWorker } from '@/shared/lib/register-service-worker'
import { AppUrls } from '@/shared/routes/urls'
import { useEffect } from 'react'
import { Link, Outlet } from 'react-router-dom'

export function RootLayout() {
	useEffect(() => {
		registerServiceWorker()
	}, [])

	return (
		<div className="">
			<div className="bg-main-color border-b-2 border-text-color">
				<header className="w-full min-h-10  px-layout-xs xs:px-layout-sm sm:p-layout content-container">
					<nav className="h-full">
						<ul className="h-full flex items-center gap-4 justify-between text-2xl text-text-color">
							<li>
								<Link to={AppUrls.home}>Главная</Link>
							</li>
							<li>
								<Link to={AppUrls.themes}>Темы</Link>
							</li>
						</ul>
					</nav>
				</header>
			</div>
			<main className="content-container p-layout-xs xs:p-layout-sm sm:p-layout">
				<Outlet />
			</main>
		</div>
	)
}
