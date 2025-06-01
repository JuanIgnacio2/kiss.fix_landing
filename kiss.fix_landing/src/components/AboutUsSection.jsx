const AboutUsSection = () => {
    return (
        <section className="py-16 px-6 bg-black text-white">
            <h2 className="text-3xl font-bold text-center text-[#D4AF37] mb-8">
                Sobre nosotros
            </h2>
            <div className="max-w-4xl mx-auto text-center text-gray-300">
                <p className="text-lg mb-6">
                    En <span className="text-[#D4AF37] font-semibold">KISS FIX REPAIRS</span> somos un equipo apasionado por la tecnología y las soluciones prácticas.
                    Nos especializamos en reparaciones de celulares, computadoras y dispositivos electrónicos con un enfoque en la calidad, la confianza y la atención personalizada.
                </p>
                <p className="text-lg">
                    Fundado por <span className="text-white font-medium">Juan</span> y <span className="text-white font-medium">Aixa</span>, nuestro objetivo es que cada cliente se vaya con su dispositivo funcionando como nuevo y una sonrisa en el rostro.
                </p>   
            </div>
        </section>
    )
}

export default AboutUsSection;