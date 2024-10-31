import Image from "next/image"
import "./work.css"
function Work() {
  return (
    <div className="work-container">
        <div className="work-content">
        <h2>My Recent Work</h2>
        <p>Here are a few past design projects I&apos;ve worked on. Want to see more? <span id="text-blue">Email me.</span></p>
        <div className="grid grid-cols-3 project-gap w-90">
            <Image src="/images/project1.png" alt="" height={500} width={500} className="project" layout="responsive" quality={100}/>
            <Image src="/images/project2.png" alt="" height={500} width={500} className="project" layout="responsive" quality={100}/>
            <Image src="/images/project3.png" alt="" height={500} width={500} className="project" layout="responsive" quality={100}/>
            <Image src="/images/project4.png" alt="" height={500} width={500} className="project" layout="responsive" quality={100}/>
            <Image src="/images/project5.png" alt="" height={500} width={500} className="project" layout="responsive" quality={100}/>
            <Image src="/images/project6.png" alt="" height={500} width={500} className="project" layout="responsive" quality={100}/>
        </div>
        
        <button className="dribble-button-div flex"><Image src='/images/basketball.png' alt="basketball" height={25} width={25} quality={100}></Image>See more on Dribble</button>
        </div>
    </div>
  )
}

export default Work