import { FaWhatsapp } from 'react-icons/fa'

const ContactSection = () => {
    return (
        <section id="contact" className="py-16 bg-black text-white text-center px-4">
            <h2 className='text-3xl font-bold text-[#D4AF37] mb-6'>
                Contacto
            </h2>
            <p className="text-lg text-gray mb-8">
                ¿Tenés un problema con tu dispositivo? Contactanos directamente por WhatsApp.
            </p>

            <div className="flex justify-center gap-8 flex-wrap">
                <a
                    href="https://wa.me/5491134567890"
                    target='_blank'
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-xl hover:bg-[#1ebd5a] transition"
                >
                   <FaWhatsapp className="text-2xl"/> Hablar con Juan
                </a>
                <a
                    href="https://wa.me/5491198765432"
                    target='_blank'
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-2 rounded-xl hover:bg-[#1ebd5a] transition"
                >
                    <FaWhatsapp className="text-2xl"/> Hablar con Aixa
                </a>
            </div>
        </section>
    )
}
export default ContactSection;