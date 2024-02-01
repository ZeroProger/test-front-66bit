import { NewsList } from '@/entities/news'
import { RefreshNews } from '@/features/refresh-news'
import styles from './styles.module.scss'

export function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.subheader}>
				<h1 className="text-2xl text-text-color">Новости</h1>
				<RefreshNews />
			</div>
			<NewsList />
		</div>
	)
}
