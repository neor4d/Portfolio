import Tecnocity from '../assets/bg/TecnoCity.png'
import WifiTicket from '../assets/bg/WifiTicket.png'
import Sistema from '../assets/bg/Sistema.jpg'

function Portfolio() {
    return(
        <>
        <section class="bg-white" id="trabajos">
            <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                
                <div className="flex flex-col items-center mb-16">
                    <h3 className="font-semibold text-gray-500 mt-4 max-w-[44rem] text-center md:text-left">Mis Trabajos</h3>
                    <h2 className="font-semibold text-2xl text-gray-800 max-w-[44rem] text-center md:text-left">Proyectos en los que he trabajado</h2>
                </div> 

                <div class="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">

                    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex">
                        <a href="#" class="overflow-hidden">
                            <img class="h-[214px] w-[614px] rounded-lg sm:rounded-none sm:rounded-l-lg object-cover" src={Tecnocity} alt="Tecnocity"/>
                        </a>

                        <div class="p-5">
                            <h3 class="text-xl font-bold tracking-tight text-gray-900">
                                <a href="#">Tecnocity</a>
                            </h3>

                            <span class="text-gray-500">Ecommerce</span>

                            <p class="mt-3 mb-4 font-light text-gray-500">Tecnocity es un Ecommerce y fue la primera página en la que trabaje, fue desarrollada en PHP nativo, MySQL, HTML, CSS y Bootstrap.</p>

                            <ul class="flex space-x-4 sm:mt-0">
                                <li>
                                    <a href="#" class="text-orange-500 font-semibold hover:text-gray-900">
                                        Link no disponible
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div> 

                    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex">
                        <a href="#" class="overflow-hidden">
                            <img class="h-[214px] w-[614px] rounded-lg sm:rounded-none sm:rounded-l-lg object-cover" src={WifiTicket} alt="Tecnocity"/>
                        </a>

                        <div class="p-5">
                            <h3 class="text-xl font-bold tracking-tight text-gray-900">
                                <a href="#">WiFi Ticket</a>
                            </h3>

                            <span class="text-gray-500">Landing Page</span>

                            <p class="mt-3 mb-4 font-light text-gray-500">Wifi Ticket fue una página de tipo landing Page hecha en HTML, CSS, Javascript y PHP.</p>

                            <ul class="flex space-x-4 sm:mt-0">
                                <li>
                                    <a href="https://www.wifitiket.com/" class="text-orange-500 font-semibold hover:text-gray-900">
                                        Ver página
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div> 

                    <div class="items-center bg-gray-50 rounded-lg shadow sm:flex">
                        <a href="#" class="overflow-hidden">
                            <img class="h-[214px] w-[614px] rounded-lg sm:rounded-none sm:rounded-l-lg object-cover" src={Sistema} alt="Tecnocity"/>
                        </a>

                        <div class="px-5">
                            <h3 class="text-xl font-bold tracking-tight text-gray-900">
                                <a href="#">Sistema de ventas</a>
                            </h3>

                            <span class="text-gray-500">Sistema</span>

                            <p class="mt-3 mb-4 font-light text-gray-500">Este sistema de ventas fue hecho con la finalidad de ayudar a vendedores, está programado en PHP, MySQL, Tailwind, Html y Javascript.</p>

                            <ul class="flex space-x-4 sm:mt-0">
                                <li>
                                    <span className="text-sm text-gray-600"> Usuario: usuario_prueba@gmail.com   ||   Pass: Usuario</span>
                                    <br />
                                    <a href="https://sistemaventas.alwaysdata.net/" class="text-orange-500 font-semibold hover:text-gray-900">
                                        Ver página
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div> 
                </div>  
            </div>
        </section>
        </>
    )
}

export default Portfolio;