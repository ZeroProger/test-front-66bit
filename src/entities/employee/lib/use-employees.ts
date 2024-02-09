import { QueryKeys } from '@/shared/lib/react-query'
import { useInfiniteQuery } from '@tanstack/react-query'
import { useFilterEmployees } from '.'
import { EmployeesRequestWithoutPage, fetchEmployees } from '../api'

export function useEmployees() {
	const count = 10
	const { filters } = useFilterEmployees()

	const requestData: EmployeesRequestWithoutPage = {
		count,
		name: filters.searchTerm,
		gender: filters.gender,
		position: filters.position,
		stack: filters.stack,
	}

	const {
		data: employees,
		fetchNextPage,
		hasNextPage,
		isFetching,
		isFetchingNextPage,
	} = useInfiniteQuery({
		queryKey: [QueryKeys.employees, requestData],
		queryFn: ({ pageParam }) => fetchEmployees({ ...requestData, page: pageParam }),
		initialPageParam: 1,
		select: (data) => data.pages.flatMap((p) => p.data),
		getNextPageParam: (lastPage, _, lastPageParam) => {
			if (lastPage.data.length < 10) {
				return undefined
			}
			return lastPageParam + 1
		},
	})

	return { employees, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage }
}
