import { InfiniteScroll } from '@/features/infinite-scroll'
import PullToRefresh from 'pulltorefreshjs'
import { useEffect } from 'react'
import { useNews } from '../lib/use-news'
import styles from './styles.module.scss'

export function NewsList() {
	const { news, getNews, refreshNews, offline, getNewsFromCache } = useNews()

	useEffect(() => {
		getNews()

		PullToRefresh.init({
			mainElement: 'body',
			onRefresh: refreshNews,
		})

		return () => PullToRefresh.destroyAll()
	}, [])

	if (news === null || news.length === 0)
		return <div className="text-xl text-center">Загрузка...</div>

	return (
		<div className={styles.list}>
			{news.map((article) => (
				<div key={article.id} className={styles.article}>
					<h3 className="text-text-color text-xl">{article.title}</h3>
					<p className="text-text-color">{article.content}</p>
				</div>
			))}
			<InfiniteScroll next={offline ? getNewsFromCache : getNews} />
		</div>
	)
}
