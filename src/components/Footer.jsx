import './Footer.css'
import F1 from './../assets/img/F1.svg'
import F2 from './../assets/img/F2.svg'
import F3 from './../assets/img/F3.svg'
import F4 from './../assets/img/F4.svg'
function Footer({menu , logo}) {
  return (
    <div className='Footer'>
        <div className='containerlogo'><h1 className='logo'>{logo}</h1><h1 className='logotext'><span style={{fontWeight:700}}>M</span>umair</h1></div>
       <div className='list'>
       <ul>
            {menu.map((element,index)=>{return(
                <li key={index}>{element.title}</li>
            )})}
        </ul>
</div>
<div className='social'>
<i class="fa-brands fa-facebook fa-2xl"></i> <i class="fa-brands fa-twitter fa-2xl"></i> <i class="fa-brands fa-square-instagram fa-2xl"></i> <i class="fa-brands fa-invision fa-2xl"></i>
</div>
<div style={{padding:"0 10%" , display:"flex" , alignItems:"center" , justifyContent:"center"}}><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106456.53228354025!2d36.36529695340279!3d33.50744822518092!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x6b9f66ebd1e394f2!2z2K_Zhdi02YLYjCDYs9mI2LHZitin!5e0!3m2!1sar!2s!4v1712908885400!5m2!1sar!2s" style={{width:"100%" , height:"300px" , border:"0",referrerpolicy:"no-referrer-when-downgrade"}}></iframe></div>
<div className='imagesfooter'>
  <img src={F1} alt="" />
  <img src={F2} alt="" />
  <img src={F3} alt="" />
  <img src={F4} alt="" />
</div>
<div  className="endfooter">© 2023 <span style={{color : "rgba(253, 111, 0, 1)" , margin : "0 5px"}}>Mumair</span> All Rights Reserved , Inc.</div>
    </div>
  )
}

export default Footer