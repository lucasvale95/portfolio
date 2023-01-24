import {FaGithub, FaNodeJs} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3 } from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {SiTypescript, SiReact, SiPython, SiTailwindcss, SiExpress, SiPostgresql} from 'react-icons/si'
import TypeWriterEffect from "react-typewriter-effect";
import { Link } from "react-scroll";

function Main(){

    return (
        <div id='home' className="bg-gray-900 mt-20 flex flex-row justify-between h-full border-b-5 border-gray-400">
        <div className="xl:pl-20">

            <div className="h-screen md:w-11/12 lg:w-11/12 xl:w-8/12 2xl:w-7/12 m-auto xl:m-0 flex flex-col justify-start pl-4 xl:ml-48">

                <div className="mb-5 flex flex-row pt-48">
                    <img src="https://uploaddeimagens.com.br/images/004/306/532/thumb/foto_perfil.jpeg?1674242948" alt="Foto Perfil" className="w-32 h-32 rounded-full mr-7 my-auto object-cover"/>
                    <div className="w-96 text-white pb-4 sm:text-md md:text-xl">
                        <TypeWriterEffect
                            className="text-green-400"
                            white-space="nowrap"
                            startDelay={100}
                            cursorColor="#4ade80"
                            text="Olá, meu nome é Lucas Vale"
                            typeSpeed={100}
                            eraseSpeed={100}
                            fontWeight={200}
                        />
                        <h2 className="pt-4 text-white text-3xl font-bold xl:text-4xl xsm:tracking-tight sm:tracking-normal 2xl:tracking-normal">Sou desenvolvedor <span className="text-green-400 ">Full Stack</span> <span className="text-green-400"></span></h2>
                    </div>  
                </div>

                <div>                    
                    <p className="sm:w-full pl-1 text-white">A curiosidade por aprender e a vontade de superar desafios me movem a ser um desenvolvedor cada vez melhor.</p>
                </div>

                <div className='mt-8 flex flex-row mx-auto md:mt-8 md:ml-2' >
                    <Link activeClass="active" to="projetos" spy={true} smooth={true} offset={-70} duration={500} className="px-2 py-3 text-md bg-green-400 font-bold border-2 border-transparent sm:px-6 sm:py-3 text-black rounded-lg mr-5 hover:bg-green-500 hover:border-2 hover:border-black hover:cursor-pointer">Ver Projetos</Link>
                    <a href="https://docs.google.com/document/d/14-PA8sKHxxPeJACuG1nqLxzROWhxXuBrXbnHM5aUeWk/edit?usp=sharing" target='blank' className="px-1 py-1 sm:px-7 sm:py-3 border-2 border-white font-bold text-md px-9 py-3 text-white mr-5 rounded-lg hover:border-black hover:bg-gray-200 hover:text-black">Currículo Online</a>
                    <a href='https://github.com/lucasvale95' target='blank' className='flex items-center justify-center hover:cursor-pointer pr-2'>
                        <FaGithub size={50} className='text-white hover:text-black hover:bg-white rounded-full p-0.5'/>
                    </a>
                </div>

                <div className='mt-14 h-64 pr-4 flex flex-row flex-wrap justify-between mx-auto items-center w-12/12 gap-4 md:w-9/12 md:mt-8 md:ml-2'> 
                    <div className='sm:w-1/6 text-transparent hover:text-white flex flex-col items-center'>
                        <AiFillHtml5 size={70} className='text-gray-400'/>
                        <span className='text-md font-bold'>HTML</span>
                    </div>
                    <div className='sm:w-1/6 text-transparent hover:text-white flex flex-col items-center'>
                        <DiCss3 size={70} className='text-gray-400'/>
                        <span className='text-md font-bold'>CSS</span>
                    </div>
                    <div className='sm:w-1/6 text-transparent hover:text-white flex flex-col items-center'>
                        <IoLogoJavascript size={70} className='text-gray-400'/>
                        <span className='text-md font-bold'>JavaScript</span>
                    </div>
                    <div className='sm:w-1/6 text-transparent hover:text-white flex flex-col items-center justify-between'>
                        <SiTypescript size={50} className='text-gray-400'/>
                        <span className='text-md font-bold '>TypeScript</span>
                    </div>
                    <div className='sm:w-1/6 text-transparent hover:text-white flex flex-col items-center justify-between'>
                        <SiReact size={50} className='text-gray-400'/>
                        <span className='text-md font-bold'>React</span>
                    </div>
                    <div className='sm:w-1/6 text-transparent hover:text-white flex flex-col items-center'>
                        <SiTailwindcss size={70} className='text-gray-400'/>
                        <span className='text-md font-bold'>Tailwind</span>
                    </div>
                    <div className='sm:w-1/6 text-transparent hover:text-white flex flex-col items-center'>
                        <FaNodeJs size={60} className='text-gray-400'/>
                        <span className='text-md font-bold'>NodeJS</span>
                    </div>
                    <div className='sm:w-1/6 text-transparent hover:text-white flex flex-col items-center'>
                        <SiExpress size={70} className='text-gray-400'/>
                        <span className='text-md font-bold'>Express</span>
                    </div>
                    <div className='sm:w-1/6 text-transparent hover:text-white flex flex-col items-center'>
                        <SiPython size={70} className='text-gray-400'/>
                        <span className='text-md font-bold'>Python</span>
                    </div>
                    <div className='sm:w-1/6 text-transparent hover:text-white flex flex-col items-center'>
                        <SiPostgresql size={70} className='text-gray-400'/>
                        <span className='text-md font-bold'>Postgres</span>
                    </div>
                    
                </div>

            </div>
            
            
        
        </div>
        <div className='bg-[url(https://svgshare.com/i/pdk.svg)] md:w-5/12 lg:w-7/12 xl:w-5/12 bg-right bg-no-repeat bg-fixed'> 
        </div>
        </div>
    )

}

export default Main