export default function SkillItem({src,skill}){
  return(
    <>
      <div className="flex flex-col justify-center items-center shadow-lg p-2 border border-gray-200">
        <div className="flex flex-col items-center justify-between">
          <img className="h-[40px]" src={src} alt={skill} width="40px" height="40px" />
          <p>{skill}</p>
        </div>
      </div>
    </>
  )
}