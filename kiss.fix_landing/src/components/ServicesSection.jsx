const FeaturesSection = () => {
    return (
        <section className="py-16 px-6 bg-gray-900">
            <h2 className="text-3xl font-bold text-center text-[#D4AF37] mb-12">
                Nuestros servicios
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-center text-white">
                <div className="bg-black p-6 rounded-xl shadow-lg border border gray.700">
                    <h3 className="text-xl font-semibold mb-2">Reparación de celulares</h3>
                    <p>Problemas de pantalla, batería, conectores, y más.</p>
                </div>
                <div className="bg-black p-6 rounded-xl shadow-lg border border gray.700">
                    <h3 className="text-xl font-semibold mb-2">PC y notebooks</h3>
                    <p>Servicio técnico para PC, notebooks y más.</p>
                </div>
                <div className="bg-black p-6 rounded-xl shadow-lg border border gray.700">
                    <h3 className="text-xl font-semibold mb-2">Diagnóstico</h3>
                    <p>Te decimos qué falla antes de reparar</p>
                </div>
            </div>
            </section>
    )
}

export default FeaturesSection;
// FeaturesSection.jsx