type Employee = {
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

type Techology = `${keyof typeof ETehnology}`

type Gender = `${keyof typeof EGender}`

type Position = `${keyof typeof EPosition}`

enum ETehnology {
	CSharp = 'CSharp',
	React = 'React',
	Java = 'Java',
	PHP = 'PHP',
	Figma = 'Figma',
	Word = 'Word',
}

enum EPosition {
	Frontend = 'Frontend',
	Backend = 'Backend',
	Analyst = 'Analyst',
	Manager = 'Manager',
	Designer = 'Designer',
}

enum EGender {
	Male = 'Male',
	Female = 'Female',
}

enum EGenderReadable {
	Male = 'Мужчина',
	Female = 'Женщина',
}

enum EPositionReadable {
	Frontend = 'Frontend-разработчик',
	Backend = 'Backend-разработчик',
	Analyst = 'Аналитик',
	Manager = 'Менеджер',
	Designer = 'Дизайнер',
}
