import Photo1 from '../assets/illustrations/IMG-20250127-WA0021.png'

function About() {
    return(
        <>
        <section className="flex flex-col md:flex-row justify-center items-center border-b-2 min-h-[40vh] mt-[6rem] pb-[6rem] px-4" id="acerca">
            
            <div className="flex h-[16.5rem] w-[16.5rem] rounded-full mb-6 md:mr-12 border-2 border-gray-300 overflow-hidden justify-center items-center order-1 md:order-none">
                <img src={Photo1} alt="Foto_Descripcion" className="h-[22rem] object-cover mt-4" />
            </div>

            <div className="flex flex-col items-center justify-center order-2 md:order-none">
                <h2 className="text-3xl md:self-start font-semibold italic text-gray-800 text-center md:text-left">Anderson Delgado</h2>
                <h3 className="text-lg md:self-start text-gray-400 text-center md:text-left">Desarrollador Web Fullstack</h3>

                <p className="text-lg text-gray-600 mt-4 max-w-[44rem] text-center md:text-left">
                    Soy un <b>desarrollador web Fullstack y diseñador frontend</b>, estudio Ingeniería en sistemas actualmente, <b>poseo título de Técnico Superior Universitario</b> y me encuentro cerca de ser Ingeniero. Me gusta trabajar en proyectos innovadores y diseños de interfaces amigables.
                </p>

                <p className="text-lg text-gray-600 mt-4 max-w-[44rem] text-center md:text-left">
                    Trabajo principalmente con <b>PHP (Estructura MVC), MySQL, React, SASS, Tailwind.</b> Me encuentro enfocado en el desarrollo de sitios web y aplicaciones móviles utilizando tecnologías de la comunidad.
                </p>
            </div>

        </section>
        </>
    )
}


export default About;