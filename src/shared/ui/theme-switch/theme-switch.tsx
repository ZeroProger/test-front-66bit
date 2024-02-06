import { default as Moon } from '@/app/assets/moon.svg?react'
import { default as Sun } from '@/app/assets/sun.svg?react'
import { Switch } from '../switch'
import { useTheme } from '../theme-provider'

export function ThemeSwitch() {
	const { theme, setTheme } = useTheme()

	const onChange = (checked: boolean) => {
		setTheme(checked ? 'dark' : 'light')
	}

	return (
		<Switch
			checked={theme === 'dark'}
			onCheckedChange={onChange}
			className="h-[26px]"
			icon={theme === 'dark' ? <Moon /> : <Sun />}
		/>
	)
}
