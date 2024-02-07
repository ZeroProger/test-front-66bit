import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'
export function BreadcrumbItem({
	href,
	content,
	isLast = false,
}: {
	href: string
	content: string
	isLast?: boolean
}) {
	return (
		<li className={cn(styles.breadcrumb, { 'overflow-hidden': isLast })}>
			{isLast ? (
				<span>{content}</span>
			) : (
				<Button
					variant="ghost"
					className="h-auto text-muted py-0 px-0 border-2 border-transparent transition-colors duration-200 hover:bg-transparent hover:border-input text-xs sm:text-lg"
					asChild
				>
					<Link to={href}>{content}</Link>
				</Button>
			)}
		</li>
	)
}
