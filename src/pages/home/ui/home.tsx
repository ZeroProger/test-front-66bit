import {
	EGenderReadable,
	EPositionReadable,
	EmployeeList,
	useEmployees,
	useFilterEmployees,
} from '@/entities/employee'
import { resetPageFn } from '@/entities/employee/model'
import { FilterEmployees } from '@/features/filter-employees'
import { SearchEmployees } from '@/features/search-employees'
import { Button } from '@/shared/ui/button'
import { useUnit } from 'effector-react'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import styles from './styles.module.scss'

export function Home() {
	const [resetPage] = useUnit([resetPageFn])
	const { filters, resetFilters, changeGenderFilter, changePositionFilter, changeStackFilter } =
		useFilterEmployees()
	const { getEmployees } = useEmployees()

	const handleSearch = () => {
		getEmployees({
			name: filters.searchTerm,
			position: filters.position,
			gender: filters.gender,
			stack: filters.stack,
		})
	}

	const handleResetFilters = () => {
		resetFilters()
		resetPage()
		getEmployees({})
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
					{filters.position.map((position) => (
						<Button
							key={`picked-filter-${position}`}
							className="bg-background hover:bg-background/60 rounded-md px-[10px] py-2 text-md font-normal flex gap-1 items-center text-foreground"
							onClick={() => changePositionFilter(position)}
						>
							<X size={20} />
							{EPositionReadable[position]}
						</Button>
					))}
					{filters.gender.map((gender) => (
						<Button
							key={`picked-filter-${gender}`}
							className="bg-background hover:bg-background/60 rounded-md px-[10px] py-2 text-md font-normal flex gap-1 items-center text-foreground"
							onClick={() => changeGenderFilter(gender)}
						>
							<X size={20} />
							{EGenderReadable[gender]}
						</Button>
					))}
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
