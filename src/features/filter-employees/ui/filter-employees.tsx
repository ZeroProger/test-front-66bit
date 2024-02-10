import {
	EGenderReadable,
	EPositionReadable,
	Gender,
	Position,
	Technology,
	useFilterEmployees,
} from '@/entities/employee'
import { Button } from '@/shared/ui/button'
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu'
import { ChevronDown } from 'lucide-react'
import { genders, positions, technologies } from '../config'

export function FilterEmployees() {
	const { filters, changePositionFilter, changeGenderFilter, changeStackFilter } =
		useFilterEmployees()

	const handleChangePosition = (position: Position) => {
		changePositionFilter(position)
	}

	const handleChangeGender = (gender: Gender) => {
		changeGenderFilter(gender)
	}

	const handleChangeStack = (technology: Technology) => {
		changeStackFilter(technology)
	}

	return (
		<div className="flex items-center gap-6">
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="text-xl gap-4 px-0">
						Должность
						<ChevronDown className="w-6 h-6 text-primary" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					{positions.map((position) => (
						<DropdownMenuCheckboxItem
							key={position}
							checked={filters.position === position}
							onCheckedChange={() => handleChangePosition(position)}
						>
							{EPositionReadable[position]}
						</DropdownMenuCheckboxItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="text-xl gap-4 px-0">
						Пол
						<ChevronDown className="w-6 h-6 text-primary" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					{genders.map((gender) => (
						<DropdownMenuCheckboxItem
							key={gender}
							checked={filters.gender === gender}
							onCheckedChange={() => handleChangeGender(gender)}
						>
							{EGenderReadable[gender]}
						</DropdownMenuCheckboxItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant="ghost" className="text-xl gap-4 px-0">
						Стек технологий
						<ChevronDown className="w-6 h-6 text-primary" />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent align="end">
					{technologies.map((technology) => (
						<DropdownMenuCheckboxItem
							key={technology}
							checked={filters.stack.find((t) => t === technology) !== undefined}
							onCheckedChange={() => handleChangeStack(technology)}
						>
							{technology}
						</DropdownMenuCheckboxItem>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}
