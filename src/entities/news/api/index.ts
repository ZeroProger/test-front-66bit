import { axiosInstance } from '@/shared/api/instance'
import { ApiUrls } from '@/shared/api/urls'

export function fetchNews(page: number, count: number) {
	return axiosInstance.get<Article[]>(ApiUrls.news + `?page${page}&count=${count}`)
}
