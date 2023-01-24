import { useState } from "react"
import { Link } from "react-scroll";

function Header() {

    const [isOpen, setIsOpen] = useState(false)
    const [toggleBtn, setToggleBtn] = useState('')

    function handleToggle () {
        setIsOpen((prev)=> !prev)
        
        if (!isOpen) {
            return setToggleBtn('toggle-btn')
        }     
        setToggleBtn('')
        
        

    }

    return(
        <>
            <div className="w-full bg-black h-20 border-b-2 border-green-400 flex items-center fixed top-0 left-0">
                <div className="w-screen md:w-11/12 lg:w-11/12 xl:w-8/12 2xl:w-8/12 m-auto flex flex-row justify-between">
                    <div className="text-white text-2xl grow flex items-center pl-4">
                        Lucas Vale
                    </div>

                    <ul className="w-5/12 xl:w-4/12 hidden sm:block pr-4">
                        <li className="flex flex-row flex justify-between" >
                            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-70} duration={500} className="text-white text-lg hover:cursor-pointer">Home</Link>
                            <Link activeClass="active" to="projetos" spy={true} smooth={true} offset={-70} duration={500} className="text-white text-lg hover:cursor-pointer">Projetos</Link>
                            <Link activeClass="active" to="contatos" spy={true} smooth={true} offset={-70} duration={500} className="text-white text-lg hover:cursor-pointer">Contatos</Link>                            
                        </li>
                    </ul>

                    <div className="sm:w-4/5 sm:hidden pr-4 relative ">
                        <div >
                            <button className={`relative p-4 ${toggleBtn}`} aria-expanded="true" aria-haspopup="true" onClick={handleToggle}>
                                <div className="bg-white w-8 h-1 rounded absolute right-0.5 transition-all duration-500 before:content-[''] before:bg-white before:h-1 before:w-8 before:absolute before:rounded before:-translate-x-4 before:translate-y-3 before:transition-all before:duration-500 after:content-[''] after:bg-white after:h-1 after:w-8 after:absolute after:rounded after:-translate-x-4 after:translate-y-4 after:-top-7 after:transition-all after:duration-500"></div>
                            </button>
                        </div>
                        {
                            isOpen &&
                            <div className={`absolute right-3 z-10 mt-2 w-40 origin-top-right rounded-md bg-gray-700 shadow-lg ring-1 ring-green-900 ring-opacity-5 focus:outline-none animate-open-menu`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div className="py-1 " role="none">
                                <Link activeClass="active" to="home" smooth={true} offset={-70} duration={500} class="text-gray-100 block px-4 py-2 text-lg hover:cursor-pointer" onClick={handleToggle}>Home</Link>
                                <Link activeClass="active" to="projetos" smooth={true} offset={-70} duration={500} class="text-gray-100 block px-4 py-2 text-lg hover:cursor-pointer" onClick={handleToggle}>Projetos</Link>
                                <Link activeClass="active" to="contatos" smooth={true} offset={-70} duration={500} class="text-gray-100 block px-4 py-2 text-lg mb-1 hover:cursor-pointer" onClick={handleToggle}>Contato</Link>
                            </div> 
                        </div> 
                        }
                        
                    </div>    
                </div>
            </div>
        </>
    )
}


export default Header