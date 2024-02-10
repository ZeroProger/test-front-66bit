/* eslint-disable no-mixed-spaces-and-tabs */
import { createContext, useContext, useState } from 'react'
import { Gender, Position, Technology } from '../types'

interface FilterState {
	gender: Gender | undefined
	position: Position | undefined
	stack: Technology[]
	searchTerm: string
}

interface FilterContextType {
	filters: FilterState
	changeGenderFilter: (gender?: Gender) => void
	changePositionFilter: (position?: Position) => void
	changeStackFilter: (technology: Technology) => void
	changeSearchTerm: (searchTerm: string) => void
	resetFilters: () => void
}

const FilterContext = createContext<FilterContextType | undefined>(undefined)

const initialFiltersState: FilterState = {
	gender: undefined,
	position: undefined,
	stack: [],
	searchTerm: '',
}

// Провайдер для контекста
export const FilterEmployeesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [filters, setFilters] = useState<FilterState>(initialFiltersState)

	const changeGenderFilter = (gender?: Gender) => {
		setFilters((prev) => ({ ...prev, gender }))
	}

	const changePositionFilter = (position?: Position) => {
		setFilters((prev) => ({ ...prev, position }))
	}

	const changeStackFilter = (technology: Technology) => {
		const hasFilters = filters.stack.find((t) => t === technology)

		if (hasFilters) {
			setFilters((prev) => ({ ...prev, stack: filters.stack.filter((t) => t !== technology) }))
		} else {
			setFilters((prev) => ({ ...prev, stack: [...prev.stack, technology] }))
		}
	}

	const changeSearchTerm = (searchTerm: string) => {
		setFilters((prev) => ({ ...prev, searchTerm }))
	}

	const resetFilters = () => {
		setFilters(initialFiltersState)
	}

	return (
		<FilterContext.Provider
			value={{
				filters,
				changeGenderFilter,
				changePositionFilter,
				changeStackFilter,
				changeSearchTerm,
				resetFilters,
			}}
		>
			{children}
		</FilterContext.Provider>
	)
}

export const useFilterEmployees = () => {
	const context = useContext(FilterContext)

	if (!context) {
		throw new Error('useFilterEmployees must be used within a FilterProvider')
	}

	return context
}
