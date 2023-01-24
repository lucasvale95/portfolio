import projects from "../../database/projects"
import Cards from "../Cards";

function Projects(){

    return (
        <>
            <div id="projetos" className="w-full sm:h-full lg:h-screen bg-black border-t-2 border-green-400">
                <div className="m-auto w-8/12 flex flex-row items-center justify-start gap-5">
                    <svg className="" width="60" height="30" viewBox="0 0 60 30">
                    <circle className="fill-green-400" cx="3" cy="2" r="2" fill="#121214"/>
                    <circle className="fill-green-400" cx="24" cy="2" r="2" fill="#121214"/>
                    <circle className="fill-green-400" cx="45" cy="2" r="2" fill="#121214"/>
                    <circle className="fill-green-400" cx="66" cy="2" r="2" fill="#121214"/>
                    <circle className="fill-green-400" cx="3" cy="12" r="2" fill="#121214"/>
                    <circle className="fill-green-400" cx="24" cy="12" r="2" fill="#121214"/>
                    <circle className="fill-green-400" cx="45" cy="12" r="2" fill="#121214"/>
                    <circle className="fill-green-400" cx="66" cy="12" r="2" fill="#121214"/>
                    <circle className="fill-green-400" cx="3" cy="22" r="2" fill="#121214"/>
                    <circle className="fill-green-400" cx="24" cy="22" r="2" fill="#121214"/>
                    <circle className="fill-green-400" cx="45" cy="22" r="2" fill="#121214"/>
                    <circle className="fill-green-400" cx="66" cy="22" r="2" fill="#121214"/>
                    </svg>
                    <h2 className="text-white pb-2 text-2xl tracking-wide font-normal w-8/12 flex items-center justify-start my-20">PROJETOS</h2>
                </div>
                <div className="w-10/12 sm:w-11/12 xl:w-8/12 m-auto gap-1 flex flex-row flex-wrap justify-between">
                    {
                       projects.map((project)=> <Cards title={project.title} description={project.description} githubLink={project.githubLink} deployLink={project.deployLink}/>) 

                    }
                </div>
            </div>
            
        </>
    )
}

export default Projects;

