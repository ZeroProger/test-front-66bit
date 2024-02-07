/* eslint-disable no-prototype-builtins */
import { EmployeesRequest } from '@/entities/employee'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function convertToQueryString(params: EmployeesRequest): string {
	const queryStringParams: string[] = []

	for (const key in params) {
		if (
			params.hasOwnProperty(key) &&
			params[key] !== undefined &&
			params[key] !== null &&
			params[key] !== ''
		) {
			const value = params[key]

			if (Array.isArray(value) && value.length === 0) continue

			if (Array.isArray(value) && value.length > 0) {
				queryStringParams.push(
					`${key}=${value.map((item) => encodeURIComponent(String(item))).join(`&${key}=`)}`
				)
			} else {
				queryStringParams.push(`${key}=${encodeURIComponent(String(value))}`)
			}
		}
	}

	return queryStringParams.length > 0 ? `?${queryStringParams.join('&')}` : ''
}
