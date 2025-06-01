const HeroSection = () => {
    return (
        <section className = "min-h-screen flex flex-col justify-center items-center text-center px-4 bg-black">
            <h1 className = "text-5xl font-bold text-white mb-4">
                <span className="text-[#D4AF37]">KISS FIX</span> REPAIRS
            </h1>
            <p className="text-xl text-gray-300 mb-8">
                Reparación profesional de dispositivos electrónicos, celulares, computadoras y más.
            </p>
            <button className = "bg-[#D4AF37] text-black px-6 py-3 rounded-full shadow hover:bg-yellow-500 transition">
                Contáctanos
            </button>
        </section>
    )
}
export default HeroSection;