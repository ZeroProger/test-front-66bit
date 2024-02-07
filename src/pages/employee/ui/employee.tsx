import { EmployeeInfo, useEmployee } from '@/entities/employee'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styles from './styles.module.scss'

export function Employee() {
	const { employeeId } = useParams()
	const { employee, isLoading, getEmployee, resetEmployee } = useEmployee()

	useEffect(() => {
		if (employeeId) {
			getEmployee(employeeId)
		} else {
			resetEmployee()
		}
	}, [employeeId])

	if (isLoading) return <div>Загрузка информации о сотруднике...</div>

	if (!employee) return <div>Сотрудник с ID {employeeId} не найден</div>

	return (
		<div className={styles.container}>
			<EmployeeInfo employee={employee} />
		</div>
	)
}
