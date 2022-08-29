import Link from 'next/link'
import {AiOutlineMenu,AiOutlineClose,AiOutlineGithub,AiOutlineLinkedin,AiOutlineMail} from 'react-icons/ai'
import links from '../utils/links'

export default function Main(){
  return(
    <>
      <div className="w-full text-center h-screen mt-40 border-b border-purple-400">
          <h2 className="my-4">Hi, I'm Nikhil</h2>
          <p className="my-4 text-lg">I'm a <span className="font-bold">Web Developer</span> and I like to build both frontend and backend</p>
          <button className="px-6 py-2 border-2 border-purple-300 rounded my-4 hover:bg-purple-200"><a href="/Resume.pdf" download="resume">Resume</a></button>
          <div className="flex justify-center items-center pt-10">
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer border border-[#ecf0f3] hover:border hover:border-purple-700 ease-in duration-300">
              <Link href={links.github}><a><AiOutlineGithub/></a></Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ml-6 border border-[#ecf0f3] hover:border hover:border-purple-700 ease-in duration-300">
              <Link href={links.linkedin}><a><AiOutlineLinkedin/></a></Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ml-6 border border-[#ecf0f3] hover:border hover:border-purple-700 ease-in duration-300">
              <Link href={links.mail}><a><AiOutlineMail/></a></Link>
            </div>
          </div>
      </div>
    </>
  )
}