import { InfiniteScroll } from '@/features/infinite-scroll'
import { RouterUrls } from '@/shared/routes/urls'
import { useNavigate } from 'react-router-dom'
import { useEmployees } from '../lib'
import { Employee } from '../types'
import styles from './employee-list.module.scss'

export function EmployeeList() {
	const navigate = useNavigate()

	const { employees, isFetching, hasNextPage, fetchNextPage } = useEmployees()

	const handleEmployeeClick = (employeeId: number | string) => {
		navigate(RouterUrls.employee(employeeId))
	}

	if ((!employees || employees.length === 0) && !isFetching)
		return (
			<div className="text-3xl text-center">По выбранным фильтрам не найдено ни 1 сотрудника</div>
		)

	const renderEmployee = (employee: Employee) => {
		return (
			<tr
				key={employee.id}
				className={styles.employee}
				onClick={() => handleEmployeeClick(employee.id)}
			>
				<td className="text-start flex-1 min-w-[200px]">{employee.name}</td>
				<td className="text-start basis-[350px] min-w-[200px]">{employee.position}</td>
				<td className="text-start basis-[300px] min-w-[200px]">{employee.phone}</td>
				<td className="text-start basis-[200px] min-w-[200px]">{employee.birthdate}</td>
			</tr>
		)
	}

	return (
		<InfiniteScroll items={employees || []} next={fetchNextPage} hasMore={hasNextPage}>
			<table className={styles.table}>
				<thead>
					<tr className="flex items-center gap-4">
						<th className="text-start flex-1 min-w-[200px]">ФИО</th>
						<th className="text-start basis-[350px] min-w-[200px]">Должность</th>
						<th className="text-start basis-[300px] min-w-[200px]">Телефон</th>
						<th className="text-start basis-[200px] min-w-[200px]">Дата рождения</th>
					</tr>
				</thead>
				<tbody>{employees?.map(renderEmployee)}</tbody>
			</table>
		</InfiniteScroll>
	)
}
