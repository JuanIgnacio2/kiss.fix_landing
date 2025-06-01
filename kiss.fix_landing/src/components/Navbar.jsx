import {useState} from "react"; 
import { FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => setMenuOpen(!menuOpen)

    const menuItems = [
    { name: 'Inicio', href: '#hero' },
    { name: 'Servicios', href: '#services' },
    { name: 'Sobre Nosotros', href: '#about' },
    { name: 'Contacto', href: '#contact' },
    ]

    return(
        <nav className="w-full fixed top-0 left-0 z-50 bg-black bg-opacity-90 shadow-md">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/*LOGO*/}
                <div className="text-2xl font-bold">
                    <a href="/" className="flex items-center">
                        <img src="../../public/kiss.fix_icono.png" alt="Logo" className="h-8 mr-2" />
                    </a>
                </div>

                {/* Menú de escritorio */}
                <ul className="hidden md:flex space-x-8 text-white text-lg">
                {menuItems.map((item) => (
                    <li key={item.name}>
                    <a
                        href={item.href}
                        className="hover:text-[#D4AF37] transition"
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
                    className="text-[#D4AF37] text-2xl hover:text-white transition mr-4"
                >
                    <FaInstagram />
                </a>

                <button
                    className="text-white text-2xl ml-4 p-1 rounded bg-[#d4af3744] backdrop-blur-sm md:hidden"
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
                menuOpen ? 'max-h-60 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
                }`}
            >
                <div className="bg-gray-900 px-6 py-4 space-y-4 text-white text-lg transform transition-transform rounded-b-lg shadow-md">
                    {menuItems.map((item) => (
                        <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="block hover:text-[#D4AF37] transition"
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