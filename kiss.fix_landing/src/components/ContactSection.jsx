import { FaWhatsapp } from 'react-icons/fa'

const ContactSection = () => {
    return (
        <section id="contact" className="py-16 px-6 bg-black text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className='text-3xl font-bold text-[#D4AF37] mb-6'>
                    Contacto
                </h2>
                <p className="text-lg text-gray-400 mb-12">
                    ¿Tenés un problema con tu dispositivo? Contactanos directamente por WhatsApp.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Contacto Juan */}
                    <div className="border-4 border-[#D4AF37] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-2xl font-semibold mb-2 text-[#D4AF37]">Juan</h3>
                        <p className="text-gray-400 mb-4">Especialista en reparación de hardware.</p>
                        <a
                            href="https://wa.me/5491134567890"
                            target='_blank'
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-4 rounded-full hover:bg-[#1ebd5a] transition"
                        >
                        <FaWhatsapp className="text-4xl animate-pulse"/>
                        </a>
                    </div>
                    {/* Contacto Aixa */}
                    <div className='border-4 border-[#D4AF37] p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300S'>
                        <h3 className="text-2xl font-semibold mb-2 text-[#D4AF37]">Aixa</h3>
                        <p className="text-gray-400 mb-4">Especialista en reparación de hardware.</p>
                        <a
                            href="https://wa.me/5491198765432"
                            target='_blank'
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-4 rounded-full hover:bg-[#1ebd5a] transition"
                        >
                            <FaWhatsapp className="text-4xl animate-pulse"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ContactSection;