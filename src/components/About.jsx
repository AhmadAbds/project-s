import './About.css'
import R2 from './../assets/img/R2.svg'
import R3 from './../assets/img/R3.svg'
function About({menu_range}) {
  return (
    <div className='About'>
      <div className='profile_About'>
        <div className='Cardimg_About' style={{background : `url(${R3})` ,backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}>
          <img src= {R2} alt="" className='Rectangle_About' />
        </div>
        </div> 
        <div className='AboutText'>
            <h1>About Me</h1>
            <div className='lorem'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</div>
            <div>
            {menu_range.map((element,index)=>{return(
                <div key={index}>
                    <div className='textrange'>{element.title}</div>
                    <input type="range" value={element.value}/>
                    </div>
                    )})}  
       </div>
        </div>
    </div>
  )
}

export default About