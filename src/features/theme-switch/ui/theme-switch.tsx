import { useTheme } from '@/entities/theme/lib/use-theme'
import { Button } from '@/shared/ui/button'

export function ThemeSwitch() {
	const { theme, changeTheme } = useTheme()

	return (
		<div className="flex items-center flex-wrap gap-x-4 gap-y-2">
			<Button
				className={theme?.name === 'dark' ? 'border-2 border-text-color' : ''}
				onClick={() => changeTheme('dark')}
			>
				Темная тема
			</Button>
			<Button
				className={theme?.name === 'light' ? 'border-2 border-text-color' : ''}
				onClick={() => changeTheme('light')}
			>
				Светлая тема
			</Button>
			<Button
				className={theme?.name === 'blue' ? 'border-2 border-text-color' : ''}
				onClick={() => changeTheme('blue')}
			>
				Голубая тема
			</Button>
		</div>
	)
}
