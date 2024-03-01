interface NavObj {
	id: number
	name: string
	path: string
}

type NavArr = NavObj[]

export const navigation: NavArr = [
	{
		id: 1,
		name: 'Home',
		path: '/',
	},
	{
		id: 2,
		name: 'Movie',
		path: '/movie',
	},
	{
		id: 3,
		name: 'Trending',
		path: '/trending',
	},
]
