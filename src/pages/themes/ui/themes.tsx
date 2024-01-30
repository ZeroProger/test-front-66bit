import { ThemeSwitch } from '@/features/theme-switch'
import styles from './styles.module.scss'

export function Themes() {
	return (
		<div className={styles.container}>
			<ThemeSwitch />
		</div>
	)
}
