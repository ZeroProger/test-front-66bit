import { useUnit } from 'effector-react'
import { useState } from 'react'
import { useFilterEmployees } from '.'
import { EmployeesRequest, fetchEmployees } from '../api'
import { $page, addEmployeesFn, incrementPageFn, setEmployeesFn, setPageFn } from '../model'
import { $employees } from './../model/index'

export function useEmployees() {
	const [employees, addEmployees, setEmployees] = useUnit([
		$employees,
		addEmployeesFn,
		setEmployeesFn,
	])
	const [page, incrementPage, setPage] = useUnit([$page, incrementPageFn, setPageFn])
	const [isLoading, setIsLoading] = useState(false)
	const [hasMoreItems, setHasMoreItems] = useState(true)
	const { filters } = useFilterEmployees()
	const count = 10

	const nextEmployees = async () => {
		setIsLoading(true)

		const { data } = await fetchEmployees({
			page,
			count,
			name: filters.searchTerm,
			gender: filters.gender,
			position: filters.position,
			stack: filters.stack,
		})

		setHasMoreItems(data.length < 10)

		addEmployees(data)
		incrementPage()

		setIsLoading(false)

		return data
	}

	const getEmployees = async (params: Omit<EmployeesRequest, 'page' | 'count'>) => {
		setIsLoading(true)

		const { data } = await fetchEmployees({ page: 1, count, ...params })

		setHasMoreItems(data.length < 10)

		setEmployees(data)
		setPage(2)

		setIsLoading(false)
	}

	return { employees, isLoading, hasMoreItems, nextEmployees, getEmployees }
}
