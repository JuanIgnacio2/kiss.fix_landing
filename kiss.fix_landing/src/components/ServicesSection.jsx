import {motion} from 'framer-motion';
import { FaMobileAlt, FaTools, FaUserFriends } from 'react-icons/fa';

const services = [
    {
        title: 'Reparación de celulares',
        description:
            'Cambio de pantalla, batería, conectores y más. Reparamos todas las marcas con repuestos de calidad.',
        img: 'https://kbtech.com.br/wp-content/uploads/2022/09/professional-smart-phone-repair-shop-service-close-up-shot-electronics-concept_473712-2344-1024x682.jpg', // celular
        icon: <FaMobileAlt className="text-[#D4AF37] text-3xl mr-2" />,
    },
    {
        title: 'Electrónica general',
        description:
            'Reparamos tablets, notebooks, consolas, parlantes, y mucho más. Diagnóstico profesional y servicio express.',
        img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F2d%2Fd7%2F1d%2F2dd71d7251ce9d9abfb75481c3f73189.jpg&f=1&nofb=1&ipt=a134cfae4c7cf6ffc36f3c6ae9c571b1c11bcd202233cd1773af578b5c6a8d62', // taller
        icon: <FaTools className="text-[#D4AF37] text-3xl mr-2" />,
    },
    {
        title: 'Reparación de PC y Notebooks',
        description:
            'Reparamos computadoras de escritorio y portátiles. Desde problemas de hardware hasta software, te ofrecemos soluciones prácticas y efectivas.',
        img: 'https://cdn-ikpgfhh.nitrocdn.com/QcVtvDiveYjtKNYRKqPPSVyjItuISXUa/assets/images/optimized/rev-9911f1d/sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1024/https://www.gladesvillecomputers.com.au/wp-content/uploads/2019/01/cropped-laptop-repairs-in-hove-1024x608.jpg', // notebook
         icon: <FaUserFriends className="text-[#D4AF37] text-3xl mr-2" />,
    },
]

const ServicesSection = () => {
    return (
        <section id="services" className="py-16 px-4 bg-black text-white">
            <h2 className="text-3xl font-bold text-center text-[#D4AF37] mb-12">
                Nuestros servicios
            </h2>

            <div className="space-y-12 max-w-6xl mx-auto">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className={`flex flex-col md:flex-row ${
                        index % 2 !== 0 ? 'md:flex-row-reverse' : ''
                        } items-center gap-8`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <img
                            src={`${service.img}?auto=format&fit=crop&w=600&q=80`}
                            alt={service.title}
                            className="w-full md:w-1/2 rounded-2xl border-4 border-[#D4AF37] object-cover transition-transform duration-300 hover:scale-105 shadow-lg"
                        />
                        <div className='w-full md:w-1/2 flex flex-col justify-center'>
                            <div mb-4>
                                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                                    {service.icon}
                                    {service.title}
                                </h3>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-300 text-lg">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default ServicesSection;
// ServicesSection.jsx