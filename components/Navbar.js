import Link from 'next/link'
import {AiOutlineMenu,AiOutlineClose,AiOutlineGithub,AiOutlineLinkedin,AiOutlineMail} from 'react-icons/ai'
import {useState,useEffect} from 'react'
import links from '../utils/links'

export default function Navbar(){
  const [nav,setNav] = useState(false)
  const [shadow,setShadow] = useState(false)
  const toggleNav = ()=>{
    setNav(!nav)
  }
  useEffect(()=>{
    document.addEventListener('scroll',()=>{
      if(window.scrollY > 90){
        setShadow(true)
      }else{
        setShadow(false)
      }
    })
  },[])
  return(
    <>
      <header className={`${shadow? 'fixed w-full bg-[#ecf0f3] shadow-md z-50' : 'fixed w-full bg-[#ecf0f3] z-50' }`}>
        <nav className="flex items-center justify-between h-20 px-4 z-50">
          <Link href="/">
            <a className="text-lg font-bold uppercase">Nikhil</a>
          </Link>
          <div className="uppercase hidden md:flex">
            <Link href="/#about">
              <a className="links">About</a>
            </Link>
            <Link href="/#skills">
              <a className="links">Skills</a>
            </Link>
            <Link href="/#projects">
              <a className="links">Projects</a>
            </Link>
          </div>
          
          <div className="md:hidden">
            <AiOutlineMenu onClick={toggleNav} size={25} />
          </div>
        </nav>
        <div className={`${nav? 'fixed top-0 left-0 bg-black/70 w-full h-screen z-50' : ''}`} onClick={toggleNav}>
          <div className={`${nav? 'fixed top-0 left-0 bg-[#ecf0f3] h-screen p-5 w-[75%] sm:w-[60%] md:w-[45%] ease-in duration-300' : 'fixed top-0 left-[-100%] p-5 duration-500 h-screen z-50'}`}>
            <div className="">
              <div className="flex w-full items-center justify-between">
                <p className="text-lg font-bold uppercase">Nikhil</p>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                  <AiOutlineClose onClick={toggleNav} />
                </div>
              </div>
              
              <div className="uppercase flex flex-col mt-16 z-100">
                <Link href="/#about">
                  <a className="mob-links">About</a>
                </Link>
                <Link href="/#skills">
                  <a className="mob-links">Skills</a>
                </Link>
                <Link href="/#projects">
                  <a className="mob-links">Projects</a>
                </Link>
              </div>
              
              <div className="flex pt-40 z-100">
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
          </div>
        </div>
      </header>
    </>
  )
}