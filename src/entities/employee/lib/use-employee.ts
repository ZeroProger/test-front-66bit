import { useState } from 'react'
import { fetchEmployee } from '../api'
import { Employee } from '../types'

export function useEmployee() {
	const [employee, setEmployee] = useState<Employee | null>(null)
	const [isLoading, setIsLoading] = useState(false)

	const getEmployee = async (employeeId: number | string) => {
		setIsLoading(true)

		const { data } = await fetchEmployee(employeeId)
		setEmployee(data)

		setIsLoading(false)
	}

	const resetEmployee = () => {
		setEmployee(null)
	}

	return { employee, isLoading, getEmployee, resetEmployee }
}
