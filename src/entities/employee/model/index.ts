import { createEvent, createStore } from 'effector'
import { Employee } from '../types'

export const addEmployeesFn = createEvent<Employee[]>()
export const setEmployeesFn = createEvent<Employee[]>()

export const $employees = createStore<Employee[]>([])
	.on(addEmployeesFn, (state, employees) => [...state, ...employees])
	.on(setEmployeesFn, (_, employees) => [...employees])

export const incrementPageFn = createEvent()
export const setPageFn = createEvent<number>()
export const resetPageFn = createEvent()

export const $page = createStore<number>(1)
	.on(incrementPageFn, (state) => state + 1)
	.on(setPageFn, (_, page) => page)
	.reset(resetPageFn)
