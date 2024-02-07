export const RouterPaths = {
	home: '/',
	employee: '/employee/:employeeId'
}

export const RouterUrls = {
	home: '/',
	employee: (id: number | string) => `/employee/${id}`
}