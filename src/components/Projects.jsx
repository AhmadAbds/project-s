import './Projects.css'
import w1 from './../assets/img/w1.svg'
import w2 from './../assets/img/w2.svg'
import w3 from './../assets/img/w3.svg'
import w4 from './../assets/img/w4.svg'
import w5 from './../assets/img/w5.svg'
import w6 from './../assets/img/w6.svg'
function Projects() {
  return (
    <div className='Projects'>
        <h1>My Projects</h1>
        <h2>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus</h2>
        <div className="containerbutton">
            <button className='All'>All</button>
            <button className='UI'>UI/UX</button>
            <button className='Web'>Web Design</button>
            <button className='App'>App Design</button>
            <button className='Graghic'>Graphic Design</button>
        </div>
        <div className="containerprojects">
          <div className="project">
            <div className="cardimgproject1">
            <img src={w1} alt="" className='imgwp1' />
            <img src={w2} alt="" className='imgwp2'/>
          </div>
          <div className='Web_Design'>Web Design</div>
          <div className='text_Design'>AirCalling Landing Page Design </div>
          </div>

          <div className="project"><div className="cardimgproject1">
            <img src={w3} alt="" className='imgwp1' />
            <img src={w4} alt="" className='imgwp2'/>
          </div>
          <div className='Web_Design'>Web Design</div>
          <div className='text_Design'>AirCalling Landing Page Design </div></div>
          <div className="project"><div className="cardimgproject1">
            <img src={w5} alt="" className='imgwp1' />
            <img src={w6} alt="" className='imgwp2'/>
          </div>
          <div className='Web_Design'>Web Design</div>
          <div className='text_Design'>AirCalling Landing Page Design </div></div>
        </div>
    </div>
  )
}

export default Projects