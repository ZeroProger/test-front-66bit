import { cn } from '@/shared/lib/utils'
import { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ className, children, ...props }: ButtonProps) => {
	return (
		<button className={cn('px-4 py-2 text-xl rounded-lg text-text-color', className)} {...props}>
			{children}
		</button>
	)
}
