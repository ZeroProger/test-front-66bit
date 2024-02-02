import { useEffect, useRef } from 'react'

interface Props {
	next: () => Promise<void>
}

export function InfiniteScroll({ next }: Props) {
	const observerTarget = useRef(null)

	useEffect(() => {
		const observer = new IntersectionObserver(
			async (entries) => {
				if (entries[0].isIntersecting) {
					await next()
				}
			},
			{ threshold: 1.0, rootMargin: '400px' }
		)

		if (observerTarget.current) {
			observer.observe(observerTarget.current)
		}

		return () => {
			if (observerTarget.current) {
				observer.unobserve(observerTarget.current)
			}
		}
	}, [next, observerTarget])

	return <div ref={observerTarget} />
}
