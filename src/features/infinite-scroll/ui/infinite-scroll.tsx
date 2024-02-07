import { ReactNode } from 'react'
import InfiniteScrollComponent from 'react-infinite-scroll-component'

interface InfiniteScrollProps<T> {
	next: () => Promise<T[]>
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
			loader={<span>Загрузка...</span>}
			endMessage={
				<p className="text-2xl text-center py-6">
					Это все сотрудники найденные по выбранными фильтрами
				</p>
			}
		>
			{children}
		</InfiniteScrollComponent>
	)
}
