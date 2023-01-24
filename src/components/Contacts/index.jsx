import {BsWhatsapp, BsArrowUpRight} from "react-icons/bs"
import {CiLinkedin} from "react-icons/ci"
import {AiOutlineMail} from "react-icons/ai"


function Contacts(){
    return (
        <>

            <div id="contatos" className="w-full h-screen bg-gray-900 border-t-2 border-green-400 flex items-center">
                <div className="w-7/12 md:w-9/12 m-auto lg:w-8/12 flex flex-col md:flex-row items-center justify-center gap-14">
                    <h3 className="text-white w-12/12 font-bold text-3xl">Vamos conversar, <em></em><span className="text-green-400">desenvolver soluções</span> e <span className="text-green-400">aprimorar habilidades</span>, juntos!</h3>
                    <div className="w-6/12 flex flex-col items-center justify-center gap-6 xl:items-end">
                        <a href="https://whatsa.me/5514996709948" target='blank' className="group flex flex-row gap-7 h-24 items-center border-2 border-green-900 rounded-lg hover:cursor-pointer px-4 pr-6 hover:bg-gray-800 hover:border-green-600 relative animate-follow">
                            <BsWhatsapp size={65} className='text-green-600 pl-2'/> 
                            <div className="flex flex-col gap-2 justify-center w-32">
                                <h3 className="text-white text-lg font-bold">Whatsapp</h3>
                                <p className="text-white text-sm">Vamos conversar?</p>
                            </div>
                            <BsArrowUpRight size={20} className='text-transparent absolute right-3 top-3 group-hover:text-green-600 '/>
                        </a>
                        <a href="mailto:lucas.sv95@hotmail.com" className="group flex flex-row gap-7 h-24 items-center border-2 border-red-900 rounded-lg hover:cursor-pointer px-4 pr-6 hover:bg-gray-800 hover:border-red-600 relative animate-follow">
                            <AiOutlineMail size={65} className='text-red-600 pl-2'/> 
                            <div className="flex flex-col gap-2 justify-center w-32">
                                <h3 className="text-white text-lg font-bold">Email</h3>
                                <p className="text-white text-sm ">Enviar email</p>
                            </div>
                            <BsArrowUpRight size={20} className='text-transparent absolute right-3 top-3 group-hover:text-red-600 '/>
                        </a>
                        <a href="mailto:https://www.linkedin.com/in/lucasvale95/" target='blank' className="group flex flex-row gap-7 h-24 items-center border-2 border-blue-900 rounded-lg hover:cursor-pointer px-4 pr-6 hover:bg-gray-800 hover:border-blue-600 relative animate-follow">
                            <CiLinkedin size={65} className='text-blue-600 pl-2'/>  
                            <div className="flex flex-col gap-2 justify-center w-32">
                                <h3 className="text-white text-lg font-bold">LinkedIn</h3>
                                <p className="text-white text-sm">Fazer conexão</p>
                            </div>                        
                            <BsArrowUpRight size={20} className='text-transparent absolute right-3 top-3 group-hover:text-blue-600 '/>
                        </a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Contacts;