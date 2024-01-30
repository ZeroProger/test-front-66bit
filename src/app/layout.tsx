import { Link, Outlet } from 'react-router-dom'
import { paths } from './routes/paths'

export function RootLayout() {
	return (
		<div className="w-full min-h-screen">
			<header className="w-full min-h-10 bg-gray-600 px-8 py-4">
				<nav className="h-full">
					<ul className="h-full flex items-center gap-4 justify-between text-2xl">
						<li>
							<Link to={paths.home}>Главная</Link>
						</li>
						<li>
							<Link to={paths.themes}>Темы</Link>
						</li>
					</ul>
				</nav>
			</header>
			<main className="">
				<Outlet />
			</main>
		</div>
	)
}
