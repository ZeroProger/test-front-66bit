import { NewsList } from '@/entities/news'
import { RefreshNews } from '@/features/refresh-news'
import styles from './styles.module.scss'

export function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.actions}>
				<RefreshNews />
			</div>
			<NewsList />
		</div>
	)
}
