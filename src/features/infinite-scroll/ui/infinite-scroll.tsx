import { ReactNode } from 'react'
import InfiniteScrollComponent from 'react-infinite-scroll-component'

interface InfiniteScrollProps<T> {
	next: () => void
	items: T[]
	hasMore: boolean
	children: ReactNode
}

export function InfiniteScroll<T>({ next, items, hasMore, children }: InfiniteScrollProps<T>) {
	return (
		<InfiniteScrollComponent
			dataLength={items.length}
			next={next}
			hasMore={hasMore}
			loader={<span className="text-2xl text-center py-4">Загрузка...</span>}
			endMessage={
				items.length > 0 ? (
					<p className="text-2xl text-center py-6">
						Это все сотрудники найденные по выбранным фильтрам
					</p>
				) : null
			}
		>
			{children}
		</InfiniteScrollComponent>
	)
}
