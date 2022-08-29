import Image from 'next/image'

export default function ProjectItem({src,title}){
  return(
    <>
      <div className="flex flex-col justify-center items-center shadow-lg border border-gray-200">
        <div className="relative">
          <img className="block" src={src} alt="img" />
          <div className="absolute top-0 left-0 w-full h-full bg-black/80 opacity-0 hover:opacity-100 text-white flex justify-center items-center ease-in duration-300">
            <p className="font-bold text-lg">{title}</p>
          </div>
        </div>
      </div>
    </>
  )
}