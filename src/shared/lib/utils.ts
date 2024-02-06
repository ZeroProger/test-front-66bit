import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const getSearchParamsString = (searchParams?: Record<string, unknown>) => {
	let paramsString = ''

	if (searchParams !== undefined) {
		for (const key in searchParams) {
			// eslint-disable-next-line no-prototype-builtins
			if (searchParams.hasOwnProperty(key)) {
				const strKey = String(key)
				const strValue = String(searchParams[key])
				if (strValue.length > 0) {
					paramsString += `${strKey.trim()}=${strValue.trim()}&`
				}
			}
		}
	}

	return paramsString.substring(0, paramsString.length - 1)
}
