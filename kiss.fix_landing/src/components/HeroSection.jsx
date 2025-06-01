const HeroSection = () => {
    return (
        <section className = "h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-600 to-purple-600 text-white px-4">
            <h1 className = "text-5xl md:text-7xl font-bold mb-4">Bienvenido a Tu Empresa</h1>
            <p className = "text-lg md:text-xl mb-8">Ofrecemos soluciones innovadoras para tu negocio</p>
            <button className = "bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
                Contáctanos
            </button>
        </section>
    )
}
export default HeroSection;