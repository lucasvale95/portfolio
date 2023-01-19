import { useState } from "react"

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
            <div className="w-full bg-black h-20 border-b-4 border-green-400 flex items-center fixed top-0 left-0">
                <div className="w-screen md:w-11/12 lg:w-11/12 xl:w-8/12 2xl:w-7/12 m-auto flex flex-row justify-between">
                    <div className="text-white text-2xl grow flex items-center pl-4">
                        Lucas Vale
                    </div>

                    <ul className="w-2/5 md:w-3/6 hidden sm:block pr-4">
                        <li className="flex flex-row flex justify-between" >
                            <a href="#Home" className="text-white text-lg">Home</a>
                            <a href="#Projects" className="text-white text-lg">Projects</a>
                            <a href="#Contact" className="text-white text-lg">Contact</a>
                            <a href="#Switch" className="text-white text-lg">Switch</a>
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
                                <a href="#home" class="text-gray-100 block px-4 py-2 text-lg" role="menuitem" tabindex="-1" id="menu-item-0">Home</a>
                                <a href="#projects" class="text-gray-100 block px-4 py-2 text-lg" role="menuitem" tabindex="-1" id="menu-item-1">Projetos</a>
                                <a href="#contact" class="text-gray-100 block px-4 py-2 text-lg mb-1" role="menuitem" tabindex="-1" id="menu-item-2">Contato</a>
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