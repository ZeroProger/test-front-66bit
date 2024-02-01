import { axiosInstance } from '@/shared/api/instance'
import { ApiUrls } from '@/shared/api/urls'

export function fetchTheme(name: string) {
	return axiosInstance.get<Theme>(ApiUrls.theme + `?name=${name}`)
}
