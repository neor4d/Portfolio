import { useEffect, useState } from 'react';
import Logo from '../assets/logo/Logo_neor.png';

function Header() {

    const [activeSection, setActiveSection] = useState('inicio');

    useEffect(() => {
      const sections = document.querySelectorAll('section');
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Cuando el 50% de la sección es visible
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      }, observerOptions);
  
      sections.forEach(section => observer.observe(section));
  
      return () => {
        sections.forEach(section => observer.unobserve(section));
      };
    }, []);
  
    // Función para verificar si una sección está activa
    const isActive = (sectionId) => activeSection === sectionId;

    return (
        <>
        <header>
            <nav className="fixed w-full bg-white border-gray-200 z-50 px-4 lg:px-6 py-2.5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                    <a href="#inicio" className="flex items-center">
                        <img src={Logo} className="mr-3 !h-[3rem] sm:h-9" alt="Portfolio Logo" />
                    </a>

                    <div className="flex items-center">
                        <button data-collapse-toggle="collapse_menu" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>

                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="collapse_menu">
                        <ul className="flex flex-col items-center mt-4 font-semibold text-sm lg:flex-row lg:items-end lg:space-x-8 lg:mt-0">

                            <li>
                                <a href="#inicio" class={`block py-2 rounded ${isActive('inicio') ? 'text-orange-500' : 'text-gray-500 hover:text-gray-700 ease-in duration-200'}`} aria-current="page">Inicio</a>
                            </li>
                            <li>
                                <a href="#acerca" class={`block py-2 rounded ${isActive('acerca') ? 'text-orange-500' : 'text-gray-500 hover:text-gray-700 ease-in duration-200'}`}>Sobre mi</a>
                            </li>
                            <li>
                                <a href="#servicios" class={`block py-2 rounded ${isActive('servicios') ? 'text-orange-500' : 'text-gray-500 hover:text-gray-700 ease-in duration-200'}`}>Servicios</a>
                            </li>
                            <li>
                                <a href="#trabajos" class={`block py-2 rounded ${isActive('trabajos') ? 'text-orange-500' : 'text-gray-500 hover:text-gray-700 ease-in duration-200'}`}>Trabajos</a>
                            </li>
                            <li>
                                <a href="https://wa.link/p9jrqj" class="block px-4 py-2 text-white bg-orange-500 rounded-full">Contáctame</a>
                            </li>

                        </ul>
                    </div>

                </div>

            </nav>
        </header>
        <div className="h-16"></div>
        </>
    )

}


export default Header;