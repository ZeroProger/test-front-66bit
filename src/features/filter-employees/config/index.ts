import { EGender, EPosition, ETechnology, Gender, Position, Technology } from '@/entities/employee'

export const positions = Object.values(EPosition) as Position[]

export const genders = Object.values(EGender) as Gender[]

export const technologies = Object.values(ETechnology) as Technology[]
