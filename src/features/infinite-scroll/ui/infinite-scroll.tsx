import { ReactNode } from 'react'
import { useInfiniteScroll } from '../lib/use-infinite-scroll'

interface InfiniteScrollProps<T> {
	next: () => Promise<T[]>
	items: T[]
	renderItem: (item: T) => ReactNode
}

export function InfiniteScroll<T>({ next, items, renderItem }: InfiniteScrollProps<T>) {
	const { isLoading, lastItemRef } = useInfiniteScroll(next, items)

	return (
		<div>
			{items.map(renderItem)}
			{isLoading && <div>Loading...</div>}
			<div ref={lastItemRef} />
		</div>
	)
}
