import {FaGithub, FaNodeJs} from 'react-icons/fa'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3 } from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {SiTypescript, SiReact, SiStyledcomponents, SiTailwindcss, SiExpress, SiPostgresql} from 'react-icons/si'

function Main(){

    return (
        <div className="bg-gray-900 mt-20">

            <div className="h-screen md:w-11/12 lg:w-11/12 xl:w-8/12 2xl:w-7/12 m-auto flex flex-col justify-start pl-4">

                <div className="mb-5 flex flex-row pt-48 ">
                    <img src="https://github.com/samuelleaokenzie.png" alt="Foto Perfil" className="w-32 h-32 rounded-full mr-7 my-auto"/>
                    <div className="w-96">
                        <p className="text-white pb-4 sm:text-md md:text-xl ">Olá, meu nome é Lucas Vale</p>
                        <h2 className="text-white text-3xl font-bold xl:text-4xl md:text-3xl xsm:text-3xl xsm:tracking-tight sm:tracking-normal md:tracking-normal lg:tracking-normal xl:tracking-normal 2xl:tracking-normal">I <span className="text-green-400 ">love</span> creating and <span className="text-green-400">developing</span> projects</h2>
                    </div>  
                </div>

                <div>                    
                    <p className="sm:w-full md:w-4/6 lg:w-3/6 pl-1 text-white">Discover here in this environment, created especially for you, all my projects and technologies</p>
                </div>

                <div className='mt-8 flex flex-row' >
                    <a href="" className="px-2 py-3 text-md bg-green-400 font-bold border-2 border-transparent sm:px-6 sm:py-3 text-black rounded-lg mr-5 hover:bg-green-500 hover:border-2 hover:border-black">Ver Projetos</a>
                    <a href="" className="px-1 py-1 sm:px-7 sm:py-3 border-2 border-white font-bold text-md px-9 py-3 text-white mr-5 rounded-lg hover:border-black hover:bg-gray-200 hover:text-black">Currículo Online</a>
                    <div className='flex items-center justify-center hover:cursor-pointer pr-2'>
                        <FaGithub size={50} className='text-white hover:text-black hover:bg-white rounded-full p-0.5'/>
                    </div>
                </div>

                <div className='mt-20 w-8/12 h-64 flex flex-row flex-wrap justify-between items-center gap-4 xl:gap-8 lg:w-6/12 xl:w-8/12'> 
                    <div className='w-24 text-transparent hover:text-white flex flex-col items-center'>
                        <AiFillHtml5 size={90} className='text-gray-400'/>
                        <span className='text-md font-bold'>HTML</span>
                    </div>
                    <div className='w-24 text-transparent hover:text-white flex flex-col items-center'>
                        <DiCss3 size={90} className='text-gray-400'/>
                        <span className='text-md font-bold'>CSS</span>
                    </div>
                    <div className='w-24 text-transparent hover:text-white flex flex-col items-center'>
                        <IoLogoJavascript size={90} className='text-gray-400'/>
                        <span className='text-md font-bold'>JavaScript</span>
                    </div>
                    <div className='w-24 h-24 text-transparent hover:text-white flex flex-col items-center justify-between'>
                        <SiTypescript size={70} className='text-gray-400'/>
                        <span className='text-md font-bold '>TypeScript</span>
                    </div>
                    <div className='w-24 h-24 text-transparent hover:text-white flex flex-col items-center justify-between'>
                        <SiReact size={70} className='text-gray-400'/>
                        <span className='text-md font-bold'>React</span>
                    </div>
                    <div className='w-24 text-transparent hover:text-white flex flex-col items-center'>
                        <SiStyledcomponents size={90} className='text-gray-400'/>
                        <span className='text-md font-bold'>Styled-Components</span>
                    </div>
                    <div className='w-24 text-transparent hover:text-white flex flex-col items-center'>
                        <SiTailwindcss size={90} className='text-gray-400'/>
                        <span className='text-md font-bold'>Tailwind</span>
                    </div>
                    <div className='w-24 text-transparent hover:text-white flex flex-col items-center'>
                        <FaNodeJs size={80} className='text-gray-400'/>
                        <span className='text-md font-bold'>NodeJS</span>
                    </div>
                    <div className='w-24 text-transparent hover:text-white flex flex-col items-center'>
                        <SiExpress size={90} className='text-gray-400'/>
                        <span className='text-md font-bold'>Express</span>
                    </div>
                    <div className='w-24 text-transparent hover:text-white flex flex-col items-center'>
                        <SiPostgresql size={90} className='text-gray-400'/>
                        <span className='text-md font-bold'>Postgres</span>
                    </div>
                    
                </div>

            </div>
            
            
        
        </div>
    )

}

export default Main