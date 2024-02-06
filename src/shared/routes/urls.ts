export const RouterPaths = {
	home: '/',
	employee: '/employee/:id'
}

export const RouterUrls = {
	home: '/',
	employee: (id: number | string) => `/employee/${id}`
}