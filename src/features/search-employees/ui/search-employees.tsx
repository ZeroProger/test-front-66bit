import { useFilterEmployees } from '@/entities/employee'
import { ChangeEvent } from 'react'

export function SearchEmployees() {
	const { filters, changeSearchTerm } = useFilterEmployees()

	const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
		changeSearchTerm(event.target.value)
	}

	return (
		<div className="px-layout">
			<input
				type="text"
				className="w-full bg-transparent border border-accent text-xl p-[10px] rounded-md focus-visible:outline-none focus-visible:border-primary transition-colors"
				placeholder="Поиск"
				value={filters.searchTerm}
				onChange={handleChangeInput}
			/>
		</div>
	)
}
