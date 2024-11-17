import { MdArrowOutward } from "react-icons/md"
import { PROJECTS } from "../constants"
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <section id="projects" className="pt-20">
            <motion.h2
                className="mb-8 text-center text-3xl lg:text-4xl"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                Projects
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    PROJECTS.map((project) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            key={project.id}
                            className="group relative overflow-hidden rounded-3xl"
                        >
                            <motion.img
                                whileHover={{ scale: 1.1 }}
                                src={project.image}
                                alt={project.name}
                                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100">
                                <h3 className="mb-2 text-xl">{project.name}</h3>
                                <p className="mb-12 p-4">{project.description}</p>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300">
                                        <div className="flex items-center">
                                            <span>View on GitHub</span>
                                            <MdArrowOutward />
                                        </div>
                                    </a>
                                    {/* <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300">
                                        <div className="flex items-center">
                                            <span>View Live Preview</span>
                                            <MdArrowOutward />
                                        </div>
                                    </a> */}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects