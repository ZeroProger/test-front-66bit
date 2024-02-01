import { useEffect, useState } from 'react'
import { fetchTheme } from '../api'
import { DEFAULT_THEME_NAME, THEME_LS_KEY } from '../config'

export function useTheme() {
	const [theme, setTheme] = useState<Theme | null>(null)

	const changeTheme = async (name: string) => {
		const { data: theme } = await fetchTheme(name)

		setTheme(theme)

		localStorage.setItem(THEME_LS_KEY, JSON.stringify(theme))
	}

	useEffect(() => {
		const themeFromLS = localStorage.getItem(THEME_LS_KEY)

		if (themeFromLS) {
			setTheme(JSON.parse(themeFromLS) as Theme)
		} else {
			changeTheme(DEFAULT_THEME_NAME)
		}
	}, [])

	useEffect(() => {
		if (theme) {
			console.log(theme)
			document.documentElement.style.setProperty('--main-color', `${theme.mainColor}`)
			document.documentElement.style.setProperty('--second-color', `${theme.secondColor}`)
			document.documentElement.style.setProperty('--text-color', `${theme.textColor}`)
		}
	}, [theme])

	return { theme, changeTheme }
}
