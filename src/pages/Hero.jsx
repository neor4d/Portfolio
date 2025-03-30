import Illustration from '../assets/illustrations/a3ef2928-0fe1-43ed-afca-9ee7a7a17b5b.png'

function Hero() {
    return(
        <>
            <section className="border-b-2" id="inicio">
                <div className="flex items-center px-6 gap-4 h-[90vh] justify-center">
                    <div className="flex flex-col place-self-center items-center">

                        <div className="flex h-[70%] w-[70%] rounded-full mb-6 border-2 border-gray-300 overflow-hidden">
                            <img src={Illustration} className="rounded-full border-4 border-white" alt="avatar" />
                        </div>

                        <h3 className="font-semibold tracking-tight leading-none text-gray-500 xl:text-2xl text-base">Hola mi nombre es!</h3>
                        <h1 className="mb-2 font-extrabold tracking-tight leading-none text-gray-700 xl:text-6xl text-4xl ">Anderson Delgado</h1>
                        <h3 className="mb-4 font-semibold tracking-tight leading-none text-gray-500 xl:text-3xl text-xl">Soy <b className="text-gray-700">Desarrollador Web!</b></h3>

                        <div className="mt-8">
                            <a href="#" className="px-6 py-3 mr-4 bg-orange-500 rounded-full text-white font-semibold">
                                Contrátame
                            </a>
                            
                            <a href="#" className="px-6 py-3 mr-4 bg-gray-700 rounded-full text-white font-semibold">
                                Descarga mi CV
                            </a> 
                        </div>            

                    </div>

                    {/* <div className="hidden lg:flex lg:h-[30rem]">
                        <img src={Illustration} alt="mockup" />
                    </div>                 */}
                </div>
            </section>
        </>
    )
}


export default Hero;