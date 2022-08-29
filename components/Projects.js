import ProjectItem from './ProjectItem.js'
import projectInfo from '../utils/projectsInfo.js'
import Link from 'next/link'

export default function Projects(){
  return(
    <>
      <div id="projects" className="w-full py-16">
        <h2 className="my-4 uppercase">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projectInfo.map((item)=>(<Link href={`/project/${item.slug}`} key={item.title}><a><ProjectItem src={item.img} title={item.title} description={item.description} /></a></Link>))}
        </div>
      </div>
    </>
  )
}