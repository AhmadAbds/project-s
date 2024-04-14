import './Testimonials.css'
import { useState } from 'react'
import s1 from './../assets/img/s1.svg'
import s2 from './../assets/img/s2.svg'
const Testimonials = () => {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(true)
  const [show3, setShow3] = useState(false)
  const [show4, setShow4] = useState(false)
  return (
    <div className='Testimonials'>
        <h1>Testimonials</h1>
        <h2>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</h2>
        <div className="SLIDER">
        <div className='containerslider'>

       {show1? <div className="cardslider">
            <img src={s2} alt="" className='imgcardslider' />
            <div className='textslider'>
                <div className="textlorem"><span className='Mark1'>“</span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices. <span className='Mark2'>“</span></div>
                <div className="Name">Name</div>
                <div className='CEO'>CEO</div>
            </div>
        </div>:null}

        {show2?<div className="cardslider">
            <img src={s1} alt="" className='imgcardslider' />
            <div className='textslider'>
                <div className="textlorem"><span className='Mark1'>“</span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices. <span className='Mark2'>“</span></div>
                <div className="Name">Name</div>
                <div className='CEO'>CEO</div>
            </div>
        </div>:null}

        {show3?<div className="cardslider">
            <img src={s2} alt="" className='imgcardslider' />
            <div className='textslider'>
                <div className="textlorem"><span className='Mark1'>“</span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices. <span className='Mark2'>“</span></div>
                <div className="Name">Name</div>
                <div className='CEO'>CEO</div>
            </div>
        </div>:null}

       {show4? <div className="cardslider">
            <img src={s1} alt="" className='imgcardslider' />
            <div className='textslider'>
                <div className="textlorem"><span className='Mark1'>“</span>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices. <span className='Mark2'>“</span></div>
                <div className="Name">Name</div>
                <div className='CEO'>CEO</div>
            </div>
        </div>:null}
        
        </div>
        </div>
<div className='buttonslide'>
  <button onClick={()=>{setShow1(true);setShow2(false); setShow3(false) ;setShow4(false)}}></button>
  <button onClick={()=>{setShow1(false);setShow2(true);setShow3(false);setShow4(false)}}></button>
  <button onClick={()=>{setShow1(false);setShow2(false);setShow3(true);setShow4(false)}}></button>
  <button onClick={()=>{setShow1(false);setShow2(false);setShow3(false);setShow4(true)}}></button>
</div>
    </div>
  )
}

export default Testimonials