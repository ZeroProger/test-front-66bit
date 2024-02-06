import { EmployeeList } from '@/entities/employee'
import styles from './styles.module.scss'

export function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.subheader}>
				<h1 className="text-2xl text-text-color">Список работников</h1>
			</div>
			<EmployeeList />
		</div>
	)
}
