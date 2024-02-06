import { axiosInstance } from '@/shared/api/instance'
import { ApiUrls } from '@/shared/api/urls'
import { getSearchParamsString } from '@/shared/lib/utils'

type RequestParams = {
	page: number | string
	count: number | string
	name?: string
	gender?: Gender
	position?: Position
	stack?: Techology
}

export function fetchEmployees(params: RequestParams) {
	const searchParamsString = getSearchParamsString(params)

	return axiosInstance.get<Employee[]>(ApiUrls.employees + `?${searchParamsString}`)
}
