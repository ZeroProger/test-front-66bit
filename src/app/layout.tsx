import { Link, Outlet } from 'react-router-dom'
import { paths } from './routes/paths'

export function RootLayout() {
	return (
		<div className="w-full min-h-screen text-3xl">
			<header className="">
				<nav>
					<ul>
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
