import SkillItem from './SkillItem.js'
import skillInfo from '../utils/skillsInfo.js'

export default function Skills(){
  return(
    <>
      <div id="skills" className="w-full py-16 border-b border-purple-400">
        <h2 className="my-4 uppercase">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skillInfo.map((item)=><SkillItem key={item.skill} src={item.img} skill={item.skill} />)}
        </div>
      </div>
    </>
  )
}