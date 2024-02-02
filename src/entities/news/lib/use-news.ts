import { ApiUrls } from '@/shared/api/urls'
import { SERVER_URL } from '@/shared/config'
import { useCallback, useEffect, useState } from 'react'
import { fetchNews } from '../api'

export function useNews() {
	const [page, setPage] = useState(1)
	const [news, setNews] = useState<Article[]>([])
	const [offline, setOffline] = useState(!navigator.onLine)

	const newsCount = 10
	const requestUrl = `${SERVER_URL}/api${ApiUrls.news}?page=${page}&count=${newsCount}`

	const getNews = useCallback(
		async (refresh: boolean = false) => {
			const { data } = await fetchNews(refresh ? 1 : page, newsCount)

			if (refresh) {
				setNews(data)
				setPage(2)
			} else {
				setNews((prev) => [...prev, ...data])
				setPage((prev) => prev + 1)
			}

			if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
				const cache = await caches.open('news-cache-v1')

				const request = new Request(requestUrl)
				cache.add(request)
			}
		},
		[page]
	)

	const refreshNews = useCallback(async () => {
		getNews(true)

		if (offline) {
			getNewsFromCache()
			return
		}
	}, [])

	const getNewsFromCache = async () => {
		if ('caches' in window) {
			const cache = await caches.open('news-cache-v1')
			const response = await cache.match(requestUrl)
			if (response) {
				const data = await response.json()
				setNews(data)
			}
		}
	}

	useEffect(() => {
		const handleOnline = () => setOffline(false)
		const handleOffline = () => setOffline(true)

		window.addEventListener('online', handleOnline)
		window.addEventListener('offline', handleOffline)

		return () => {
			window.removeEventListener('online', handleOnline)
			window.removeEventListener('offline', handleOffline)
		}
	}, [])

	useEffect(() => {
		if (offline) {
			getNewsFromCache()
		}
	}, [offline])

	return { news, offline, getNews, refreshNews, getNewsFromCache }
}
