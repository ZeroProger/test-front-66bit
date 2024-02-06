import { useState } from 'react'
import { fetchEmployees } from '../api'

export function useEmployees() {
	const [employees, setEmployees] = useState<Employee[]>([])
	const [page, setPage] = useState(1)
	const count = 10

	const getEmployees = async () => {
		const { data } = await fetchEmployees({ page, count })

		setEmployees((prev) => [...prev, ...data])
		setPage((prev) => prev + 1)

		return data
	}

	return { employees, getEmployees }
}
