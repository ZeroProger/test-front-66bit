import { useEmployee } from '@/entities/employee'
import { RouterUrls } from '@/shared/routes/urls'
import { useParams } from 'react-router-dom'
import { BreadcrumbItem } from './breadcrumb-item'
import styles from './styles.module.scss'

export function Breadcrumbs() {
	const { employeeId } = useParams()
	const { employee } = useEmployee(employeeId!)

	return (
		<ul className={styles.breadcrumbs}>
			{!employee && <BreadcrumbItem href={RouterUrls.home} content="Главная" />}
			<BreadcrumbItem href={RouterUrls.home} content="Список сотрудников" isLast={!employeeId} />
			{employee && (
				<BreadcrumbItem href={RouterUrls.employee(employee.id)} content={employee.name} isLast />
			)}
		</ul>
	)
}
