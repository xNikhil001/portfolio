import projectInfo from '../../utils/projectsInfo.js'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Image from 'next/image'
import {FaCode} from 'react-icons/fa'

export default function ProjectInfo(){
  const router = useRouter();
  const slug = router.query.slug
  
  const project = projectInfo.find((item)=>{
    return item.slug == slug
  })
  if(!project){
    return (<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"><img src="/three-dots.svg" width="50px" height="50px"/></div>)
  }
  return(
    <>
      <div className="w-full h-screen pt-8 mb-12">
        <h2 className="font-bold uppercase text-lg">Project Info</h2>
        <h3 className="uppercase text-xl my-8 text-zinc-700">{project.title}</h3>
        <img className="shadow-lg rounded my-4" src={project.img} alt="img" />
        <div className="flex items-center justify-between">
          <Link href={project.url}><button className="px-8 py-2 hover:bg-purple-300 border-[2px] border-purple-400 rounded my-4 ">Visit</button>
          </Link>
          <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ml-6 border border-[#ecf0f3] hover:border hover:border-purple-700 ease-in duration-300">
            <Link href={project.git}><a><FaCode/></a></Link>
          </div>
        </div>
        <p className="text-justify">{project.description}</p>
        <h4 className="font-bold mt-4 mb-2">Tech used</h4>
        <ul className="">
          {project.tech.map((el)=><li key={el} className="ml-8">{el}</li>)}
        </ul>
      </div>
    </>
  )
}