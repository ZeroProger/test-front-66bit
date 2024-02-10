import {
	EGenderReadable,
	EPositionReadable,
	EmployeeList,
	useFilterEmployees,
} from '@/entities/employee'
import { FilterEmployees } from '@/features/filter-employees'
import { SearchEmployees } from '@/features/search-employees'
import { Button } from '@/shared/ui/button'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import styles from './styles.module.scss'

export function Home() {
	const { filters, resetFilters, changeGenderFilter, changePositionFilter, changeStackFilter } =
		useFilterEmployees()

	const handleSearch = () => {}

	const handleResetFilters = () => {
		resetFilters()
	}

	useEffect(() => {
		handleResetFilters()
	}, [])

	return (
		<div className={styles.container}>
			<div className={styles.subheader}>
				<h1 className="text-xl sm:text-4xl font-bold">Список сотрудников</h1>
				<FilterEmployees />
			</div>
			<SearchEmployees />
			<div className={styles.pickedFilters}>
				<span className={styles.label}>Выбранные фильтры:</span>
				<div className={styles.filters}>
					{filters.position && (
						<Button
							key={`picked-filter-${filters.position}`}
							className="bg-background hover:bg-background/60 rounded-md px-[10px] py-2 text-md font-normal flex gap-1 items-center text-foreground"
							onClick={() => changePositionFilter()}
						>
							<X size={20} />
							{EPositionReadable[filters.position]}
						</Button>
					)}
					{filters.gender && (
						<Button
							key={`picked-filter-${filters.gender}`}
							className="bg-background hover:bg-background/60 rounded-md px-[10px] py-2 text-md font-normal flex gap-1 items-center text-foreground"
							onClick={() => changeGenderFilter()}
						>
							<X size={20} />
							{EGenderReadable[filters.gender]}
						</Button>
					)}
					{filters.stack.map((technology) => (
						<Button
							key={`picked-filter-${technology}`}
							className="bg-background hover:bg-background/60 rounded-md px-[10px] py-2 text-md font-normal flex gap-1 items-center text-foreground"
							onClick={() => changeStackFilter(technology)}
						>
							<X size={20} />
							{technology}
						</Button>
					))}
				</div>
				<Button
					className="bg-background hover:bg-background/70 text-foreground text-md"
					onClick={handleResetFilters}
				>
					Сбросить
				</Button>
				<Button className="px-12 py-3 text-md" onClick={handleSearch}>
					Найти
				</Button>
			</div>
			<EmployeeList />
		</div>
	)
}
