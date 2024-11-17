import { HERO } from "../constants"
import amanImage from "../assets/aman.jpg"
import { motion } from "framer-motion"
import resume from "../assets/amansoni.pdf"

const Hero = () => {
    return (
        <section className="flex min-h-screen flex-wrap items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2 lg"
            >
                <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg:text-[7rem]">
                    {HERO.name}
                </h2>
                <p className="p-2 text-3xl tracking-tighter lg:text-4xl">{HERO.greet}</p>
                <p className="mb-4 p-2 text-xl">{HERO.description}</p>
                <a
                    className="bg-white mb-8 ml-2 font-bold p-2 text-black text-xl rounded-lg"
                    href={resume}
                    download="AmanSoni_Resume.pdf"
                >
                    Download Cv
                </a>
            </motion.div>
            <motion.div
                className="w-full md:w-1/2 lg:p-8 mt-8 lg:mt-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="flex justify-center">
                    <motion.img
                        src={amanImage}
                        width={550}
                        height={550}
                        alt="aman soni"
                        className="rounded-3xl w-[550px] h-[550px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    />
                </div>
            </motion.div>
        </section>
    )
}

export default Hero