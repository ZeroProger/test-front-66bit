import { EmployeeInfo, useEmployee } from '@/entities/employee'
import { useParams } from 'react-router-dom'
import styles from './styles.module.scss'

export function Employee() {
	const { employeeId } = useParams()
	const { employee, isLoading } = useEmployee(employeeId!)

	if (isLoading) return <div>Загрузка информации о сотруднике...</div>

	if (!employee) return <div>Сотрудник с ID {employeeId} не найден</div>

	return (
		<div className={styles.container}>
			<EmployeeInfo employee={employee} />
		</div>
	)
}
