const FeaturesSection = () => {
    return (
        <section className="py-16 px-6 bg-gray-100">
            <h2 className="text-3xl font-bold text-center mb-12">Características principales</h2>
            <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-xl font-semibold mb-2">Interfaz Intuitiva</h3>
                    <p>Disfruta de una experiencia de usuario fluida y fácil de navegar.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-xl font-semibold mb-2">Seguridad Avanzada</h3>
                    <p>Protege tus datos con nuestras medidas de seguridad de última generación.</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow">
                    <h3 className="text-xl font-semibold mb-2">Soporte 24/7</h3>
                    <p>Estamos aquí para ayudarte en cualquier momento del día.</p>
                </div>
            </div>
            </section>
    )
}

export default FeaturesSection;
// FeaturesSection.jsx