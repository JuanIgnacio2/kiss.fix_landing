
import {motion} from 'framer-motion'

const teamMembers = [
    {
        name: "Juan",
        role: "Técnico en Reparaciones",
        image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
        name: "Aixa",
        role: "Técnica en Reparaciones y manejo de redes sociales",
        image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
]

const AboutUsSection = () => {
    return (
        <section id="about" className="py-10 px-6 bg-black text-white">
            <motion.h2
                className="text-3xl font-bold text-center text-[#D4AF37] mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6}}
                viewport={{ once: true, amount: 0.2}}
            >
                Sobre nosotros
            </motion.h2>
            <motion.div 
                className="max-w-4xl mx-auto text-center text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <p className="text-lg mb-6">
                    En <span className="text-[#D4AF37] font-semibold">KISS FIX ELECTRONICS</span> somos un equipo apasionado por la tecnología y las soluciones prácticas.
                    Nos especializamos en reparaciones de celulares, computadoras y dispositivos electrónicos con un enfoque en la calidad, la confianza y la atención personalizada.
                </p>
                <p className="text-lg mb-6">
                    Fundado por <span className="text-white font-medium">Juan</span> y <span className="text-white font-medium">Aixa</span>, nuestro objetivo es que cada cliente se vaya con su dispositivo funcionando como nuevo y una sonrisa en el rostro.
                </p>   
            </motion.div>
            <div className='flex flex-col md:flex-row items-center gap-2'>
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        className="text-center w-full md:w-1/2"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: index * 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-50 h-50 rounded-full mx-auto mb-4 border-4 border-[#D4AF37] object-cover"
                        />
                        <h3 className="text-xl font-semibold">{member.name}</h3>
                        <p className="text-gray-400">{member.role}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default AboutUsSection;