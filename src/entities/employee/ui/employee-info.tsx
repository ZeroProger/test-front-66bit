import { Employee } from '../types'
import styles from './employee-info.module.scss'

export function EmployeeInfo({ employee }: { employee: Employee }) {
	return (
		<div className="px-layout">
			<div className={styles.employeeInfo}>
				<img src={employee.photo} className={styles.photo} />
				<h1 className={styles.name}>{employee.name}</h1>
				<h2 className={styles.position}>{employee.position}</h2>
				<ul className={styles.stack}>
					{employee.stack.map((technology) => (
						<li key={technology} className={styles.technology}>
							{technology}
						</li>
					))}
				</ul>
			</div>
			<hr className="border-none bg-accent h-0.5 my-5 sm:my-10 -mx-layout sm:mx-0" />
			<div className={styles.mainInfo}>
				<h3 className="text-md sm:text-3xl font-semibold mb-8">Основная информация</h3>
				<div className="flex flex-col gap-6">
					<div className={styles.data}>
						<span className={styles.label}>Контактный телефон:</span>
						<span className={styles.value}>{employee.phone}</span>
					</div>
					<div className={styles.data}>
						<span className={styles.label}>Дата рождения:</span>
						<span className={styles.value}>{employee.birthdate}</span>
					</div>
					<div className={styles.data}>
						<span className={styles.label}>Дата устройства:</span>
						<span className={styles.value}>{employee.dateOfEmployment}</span>
					</div>
				</div>
			</div>
		</div>
	)
}
