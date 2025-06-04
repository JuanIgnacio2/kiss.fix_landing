import {useEffect, useRef, useState} from "react"; 
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState("");
    
    const menuItems = [
        { name: 'Inicio', href: '#' },
        { name: 'Servicios', href: '#services' },
        { name: 'Sobre Nosotros', href: '#about' },
        { name: 'Contacto', href: '#contact' },
    ]
    
    const toggleMenu = () => setMenuOpen(!menuOpen)

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
            }
            });
        },
        { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
        );

        menuItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    // Prevenir scroll al abrir menú en móvil
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "auto";
    }, [menuOpen]);

    return(
        <nav className="fixed top-0 left-0 z-50 w-full bg-black text-white py-4 shadow-md">
            <div className="max-w-screen-xl mx-auto px-4 flex justify-between items-center">
                {/*LOGO*/}
                <div className="text-2xl font-bold">
                    <a href="/" className="flex items-center trasnsform transition-transform hover:scale-105 hover:rotate-1">
                        <img src="../../public/kiss.fix_icono.png" alt="Logo" className="h-8 mr-2" />
                    </a>
                </div>

                {/* Menú de escritorio */}
                <ul className="hidden md:flex space-x-8 text-white text-xl">
                {menuItems.map((item) => (
                    <li key={item.name}>
                    <a
                        href={item.href}
                        className={`px-2 py-1 border-b-2 transition-all duration-300 ${
                        activeSection === item.id
                            ? "text-[#D4AF37] border-[#D4AF37] font-semibold"
                            : "border-transparent hover:border-[#D4AF37]"
                        }`}
                    >
                        {item.name}
                    </a>
                    </li>
                ))}
                </ul>

                {/* Instagram + botón menú (mobile) */}
                <div className="flex items-center">
                <a
                    href="https://instagram.com/tuperfil"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-2xl transition mr-4 hover:scale-105"
                >
                    <FaInstagram />
                </a>

                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
                    onClick={toggleMenu}
                    aria-label="Menú"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
                </div>
            </div>
            {/* Menú móvil con efecto slide */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                menuOpen ? 'max-h-80 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
                }`}
            >
                <div className="px-6 pt-4 space-y-4 text-white text-lg flex flex-col items-center justify-center transform transition-transform rounded-b-lg shadow-md">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            onClick={() => setMenuOpen(false)}
                            className={`block px-2 py-2 rounded transition-all duration-200 ${
                                activeSection === item.id
                                ? "text-[#D4AF37] font-semibold"
                                : "hover:bg-[#D4AF37]/20 hover:text-[#D4AF37]"
                            }`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}
export default Navbar;