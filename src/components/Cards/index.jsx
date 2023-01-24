import {FaGithub, FaShare } from "react-icons/fa"

function Cards(project){

    console.log(project)

    return(
        <>
            <div className="w-12/12  mx-auto h-60 rounded-md flex flex-row">
                        
                <div className="w-full h-40 sm:w-80 sm:h-48 bg-black shadow-md shadow-green-400/30 flex mt-4 rounded-md flex flex-col justify-between p-3 pl-4">
                    <h3 className="text-base text-green-400 w-full font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-200 w-full ">{project.description}</p>
                    <div className="flex items-end justify-center ">
                        <a href={project.githubLink} target="blank" className="text-xs xl:mr-4 font-semibold text-gray-200 mt-2 mr-8 flex flex-row gap-2 hover:text-green-400"><FaGithub size={16}/>Link GitHub</a>
                        <a href={project.deployLink} target="blank" className="text-xs font-semibold text-gray-200 mt-2 flex flex-row gap-2 hover:text-green-400"><FaShare size={16}/> Ver em Produção</a>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Cards;