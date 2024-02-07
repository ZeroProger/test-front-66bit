import { axiosInstance } from '@/shared/api/instance'
import { ApiUrls } from '@/shared/api/urls'
import { convertToQueryString } from '@/shared/lib/utils'
import { Employee, Gender, Position, Technology } from '../types'

export type EmployeesRequest = {
	page: number | string
	count: number | string
	name?: string
	gender?: Gender[]
	position?: Position[]
	stack?: Technology[]
	[key: string]: number | string | string[] | undefined
}

export function fetchEmployees(params: EmployeesRequest) {
	const searchParamsString = convertToQueryString(params)

	return axiosInstance.get<Employee[]>(ApiUrls.employees + searchParamsString)
}

export function fetchEmployee(employeeId: number | string) {
	return axiosInstance.get<Employee>(ApiUrls.employee(employeeId))
}
