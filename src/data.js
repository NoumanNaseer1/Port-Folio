import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import {  AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import { BsCircleFill } from 'react-icons/bs'

export const services = [
	{
		Icon: RiComputerLine,
		title: 'Frontend Development',
		about: 'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
	},
	{
		Icon: FaServer,
		title: 'Backend  Development',
		about: 'handle database, server, api using <b>Express </b> & other popular frameworks',
	},
	{
		Icon: AiOutlineApi,
		title: 'API Development',
		about: 'I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ',
	},
	{
		Icon: MdDeveloperMode,
		title: 'Competitive Coder',
		about: 'I am ambitious, hard working and have a never give up attitudewhich enables me to overcome any obstacle that I can ever face.',
	},

]

export const languages = [
	{
		Icon: BsCircleFill,
		name: 'JavaScript',
		level: '60',
	},

	{
		Icon: BsCircleFill,
		name: 'React',
		level: '90',
	},
	{
		Icon: BsCircleFill,
		name: 'Node & Express.js',
		level: '80',
	},
	{
		Icon: BsCircleFill,
		name: 'Bootstrap',
		level: '80',
	},
	{
		Icon: BsCircleFill,
		name: 'Python',
		level: '45',
	},

]

export const tools = [
	{
		Icon: BsCircleFill,
		name: 'VS Code',
		level: '85',
	},
	{
		Icon: BsCircleFill,
		name: 'Postman',
		level: '65',
	},
	{
		Icon: BsCircleFill,
		name: 'Git & GitHub',
		level: '60',
	},
	{
		Icon: BsCircleFill,
		name: 'MongoDB',
		level: '45',
	},
]

export const projects = [
	

	{
		id: 1,
		name: 'Developers Portfolio',
		image_path: '/images/portfolio.png',
		github_url: 'https://github.com/NoumanNaseer1/Portfolio',
		description: 'This is a developers portfolio project on github',
		category: ['react'],
		key_techs: ['React', 'tailwind', 'Framer Motion'],
	},
	{
		id: 2,
		name: 'Simple E-Commerce Site',
		image_path: '/images/Ecommerce.png',
		github_url: 'https://github.com/NoumanNaseer1/Simple-ECommerce',
		description: 'This is a simple E-commerce which has add to cart,increase quantity and delete item functions ',
		category: ['react'],
		key_techs: ['React'],
	},

	{
		id: 3,
		name: 'Todo Application',
		image_path: '/images/todoapp.png',
		github_url: 'https://github.com/NoumanNaseer1/To-Do-App',
		description: 'This is a todo App.',
		category: ['react', 'firebase'],
		key_techs: ['React', 'Firebase'],
	},
	{
		id: 4,
		name: 'Pictures search Engine',
		image_path: '/images/picturesdata.png',
		
		github_url: 'https://github.com/NoumanNaseer1/Pictures-Search-Engine',
		description: 'In this App you can search any type of picutes',
		category: ['react', 'firebase'],
		key_techs: ['React', 'Firebase'],
	},
	{
		id: 5,
		name: 'Youtube search ',
		image_path: '/images/youtube.png',
		
		github_url: 'https://github.com/NoumanNaseer1/Youtube-Videos-Search',
		description: 'This App is similar to youtube home page',
		category: ['react', 'firebase'],
		key_techs: ['React'],
	},

]
