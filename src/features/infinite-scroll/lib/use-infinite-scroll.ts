import { useEffect, useRef, useState } from 'react'

export function useInfiniteScroll<T>(
	next: () => Promise<T[]>,
	items: T[],
	threshold: number = 200
): {
	isLoading: boolean
	lastItemRef: React.RefObject<HTMLDivElement>
} {
	const [isLoading, setIsLoading] = useState(false)
	const [hasMoreItems, setHasMoreItems] = useState(true)
	const lastItemRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const fetchMoreData = async () => {
			setIsLoading(true)
			const newItems = await next()
			setIsLoading(false)

			if (newItems.length === 0) {
				setHasMoreItems(false)
				return
			}
		}

		const observer = new IntersectionObserver((entries) => {
			const entry = entries[0]

			if (entry.isIntersecting && hasMoreItems) {
				fetchMoreData()
			}
		})

		if (lastItemRef.current) {
			observer.observe(lastItemRef.current)
		}

		return () => observer.disconnect()
	}, [items, threshold, hasMoreItems])

	return {
		isLoading,
		lastItemRef,
	}
}
