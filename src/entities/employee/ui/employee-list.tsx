import { InfiniteScroll } from '@/features/infinite-scroll'
import { useEffect } from 'react'
import { useEmployees } from '../lib/use-employees'
import styles from './styles.module.scss'

export function EmployeeList() {
	const { employees, getEmployees } = useEmployees()

	useEffect(() => {
		getEmployees()
	}, [])

	if (employees.length === 0) return <div className="text-xl text-center">Загрузка...</div>

	const renderEmployee = (employee: Employee) => {
		return (
			<div key={employee.id} className={styles.employee}>
				<h3 className="text-text-color text-xl">{employee.name}</h3>
				<p className="text-text-color">{employee.gender}</p>
			</div>
		)
	}

	return (
		<div className={styles.list}>
			<InfiniteScroll next={getEmployees} items={employees} renderItem={renderEmployee} />
		</div>
	)
}
