import logo from '../assets/kiss.fix_variant.png';
import {motion} from 'framer-motion';

const HeroSection = () => {
    return (
        <section id="hero" className = "relative min-h-screen flex flex-col justify-center items-center text-center px-4 bg-black overflow-hidden">
            {/* Imagen de fondo tipo marca de agua */}
            <motion.img
                src={logo}
                alt="Kiss Fix Logo"
                className="absolute inset-0 w-full h-full object-contain pointer-events-none"
                initial={{scale: 1.2, filter: "blur(0px)"}}
                animate={{scale: 1, filter: "blur(4px)"}}
                transition={{duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse"}}
            />
            {/* Capa oscura para mejor legibilidad */}
            <div className="absolute inset-0 bg-black opacity-60"/>

            {/* Animación de entrada */}
            <motion.div
                className="relative z-10 flex flex-col items-center text-white"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                >
                {/* Titulo */}
                <h1 className = "text-4xl sm:text-5xl font-bold mb-4">
                    <span className="text-[#D4AF37]">KISS FIX</span> ELECTRONICS
                </h1>
                {/* Descripción */}
                <motion.p 
                    className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    Reparación profesional de dispositivos electrónicos, celulares, computadoras y más. Soluciones simples y confiables.
                </motion.p>
                <motion.a
                    href="#contact"
                    className="bg-[#D4AF37] text-white px-6 py-3 rounded-xl font-semibold hover:bg-yellow-500 transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                    >
                    Contactar ahora
                </motion.a>
            </motion.div>
        </section>
    )
}
export default HeroSection;