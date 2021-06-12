import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavItem = ({ active, setActive, name, route }) => {
	return active !== name ? (
		<Link to={route}>
			<span className="mx-2 cursor-pointer hover:border-b-4 hover:text-black" onClick={() => setActive(name)}>
				{name}
			</span>
		</Link>
	) : null
}

const Navbar = () => {
	const [active, setActive] = useState('')

	const { pathname } = useLocation()

	useEffect(() => {
		if (pathname === '/') setActive('About')
		else if (pathname === '/projects') setActive('Projects')
		else if (pathname === '/resume') setActive('Resume')
	}, [pathname])

	return (
		<div className="flex items-center justify-between px-5 py-3 my-3">
			<span className="text-xl font-bold border-b-4 md:text-2xl border-gray ">{active}</span>

			<div className="text-base font-normal md:text-xl">
				<NavItem active={active} setActive={setActive} name="About" route="/" />
				<NavItem active={active} setActive={setActive} name="Resume" route="/resume" />
				<NavItem active={active} setActive={setActive} name="Projects" route="/projects" />
			</div>
		</div>
	)
}

export default Navbar
