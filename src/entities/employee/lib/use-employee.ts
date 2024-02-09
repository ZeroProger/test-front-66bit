import { QueryKeys } from '@/shared/lib/react-query'
import { useQuery } from '@tanstack/react-query'
import { fetchEmployee } from '../api'

export function useEmployee(employeeId: number | string) {
	const { data: employee, isLoading } = useQuery({
		queryKey: [QueryKeys.employee, employeeId],
		queryFn: () => fetchEmployee(employeeId),
		select: (data) => data.data,
		enabled: !!employeeId,
	})

	return { employee, isLoading }
}
