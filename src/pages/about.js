import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import { services } from '../data'
import { fadeInUp, routeFade, stagger } from '../animations'

const About = () => {
	return (
		<motion.div className="flex flex-col flex-grow px-6 pt-1" variants={routeFade} initial="hidden" animate="visible" exit="exit">
			
			<h4 className="my-3">
		<div style={{textAlign:'justify',textJustify:'inter-word'}}>
			<p>
			Imaginative and creative developer with 6 months of experience. Versed in Web and
Software Development and comfortable with different programming languages. Aiming
to leverage my technical gain and creative process as a Developer
			</p>
			</div>
			</h4>
			<div className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-black-100" style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
				<h4 className="my-3 text-xl font-semibold tracking-wide text-gray-900">Relevant Experience</h4>

				<motion.div className="grid gap-6 my-3 md:grid-cols-2" variants={stagger} animate="animate" initial="initial">
					{/* children's initial and animate property should be same as the parent during a stagger effect  */}
					{services.map((service) => (
						<motion.div
							className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-black-200 md:col-span-1 "
							key={service.title}
							variants={fadeInUp}
						>
							<ServiceCard service={service} />
						</motion.div>
					))}
				</motion.div>
			</div>
		</motion.div>
	)
}

export default About
