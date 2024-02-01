import { ApiUrls } from '@/shared/api/urls'
import { SERVER_URL } from '@/shared/config'
import { useEffect, useState } from 'react'
import { fetchNews } from '../api'

export function useNews() {
	const page = 1
	const count = 10
	const requestUrl = `${SERVER_URL}/api${ApiUrls.news}?page=${page}&count=${count}`
	const [news, setNews] = useState<Article[] | null>(null)
	const [offline, setOffline] = useState(!navigator.onLine)

	const getNews = async () => {
		const { data: news } = await fetchNews(page, count)

		setNews(news)

		if ('serviceWorker' in navigator && navigator.serviceWorker.controller) {
			const cache = await caches.open('news-cache-v1')
			const request = new Request(requestUrl)
			cache.add(request)
		}
	}

	useEffect(() => {
		getNews()

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

		if (offline) {
			getNewsFromCache()
		}
	}, [offline])

	return { news, getNews }
}
