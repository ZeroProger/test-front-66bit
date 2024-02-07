export type Employee = {
	id: number
	name: string
	photo: string
	phone: string
	gender: string
	position: string
	stack: string[]
	birthdate: string
	dateOfEmployment: string
}

export type Technology = `${keyof typeof ETechnology}`

export type Gender = `${keyof typeof EGender}`

export type Position = `${keyof typeof EPosition}`

export enum ETechnology {
	CSharp = 'CSharp',
	React = 'React',
	Java = 'Java',
	PHP = 'PHP',
	Figma = 'Figma',
	Word = 'Word',
}

export enum EPosition {
	Frontend = 'Frontend',
	Backend = 'Backend',
	Analyst = 'Analyst',
	Manager = 'Manager',
	Designer = 'Designer',
}

export enum EGender {
	Male = 'Male',
	Female = 'Female',
}

export enum EGenderReadable {
	Male = 'Мужчина',
	Female = 'Женщина',
}

export enum EPositionReadable {
	Frontend = 'Frontend-разработчик',
	Backend = 'Backend-разработчик',
	Analyst = 'Аналитик',
	Manager = 'Менеджер',
	Designer = 'Дизайнер',
}
