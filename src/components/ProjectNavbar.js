

const NavItem = ({ value, active, handleFilterCategory }) => {
	var className = 'capitalize cursor-pointer hover:text-green'
	if (active === value) className += ' text-green'

	return (
		<li className={className} onClick={() => handleFilterCategory(value)}>
			{value}
		</li>
	)
}

const ProjectNavbar = () => {
	return (
		<nav className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
			
			
		</nav>
	)
}

export default ProjectNavbar
