export default function About(){
  return(
    <>
      <div id="about" className="w-full py-16 border-b border-purple-400">
        <h2 className="my-4 uppercase">About</h2>
        <div>
          <p>I started web development with PHP project and found it very interesting from which I decided to become a web developer.Also, I have a pragmatic approach when it comes to learning new tech.
          </p>
        </div>
        
        <div className="my-4">
          <h3 className="text-lg font-bold">My tech interests</h3>
          <ul className="">
            <li className="">Blockchain</li>
            <li className="">Learn Golang for back-end</li>
            <li className="">Learn Rust for Blockchain development</li>
          </ul>
        </div>
        
        <div className="my-4">
          <h3 className="text-lg font-bold">My Achievements</h3>
          <ul className="">
            <li className="">Gold Medal in National SQAY Martial Arts Tournament Harayana</li>
            <li className="">3 Silver Medals in National SQAY Martial Arts Tournament in Harayana and Goa</li>
            <li className="">2 Bronze Medals in National SQAY Martial Arts Tournament in Solapur and Delhi</li>
          </ul>
        </div>
      </div>
    </>
  )
}