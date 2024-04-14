import './Hero.css'
import R2 from './../assets/img/R2.svg'
import R1 from './../assets/img/R1.svg'

function Hero({ title , name , jop , jopp , subtitle , btnn}) {
  return (
    <div className='Hero'>
        <div className='Text'>
        <h3>{title}</h3>
        <h2>{name}</h2>
        <h1>{jop}</h1>
        <h1 className='jopp'>{jopp}</h1>
        <div>{subtitle}</div>
        <button>{btnn}</button>
        </div>
        <div className='profile'>
        <div className='Cardimg' style={{background : `url(${R1})` ,backgroundSize: "100% 100%", backgroundRepeat: "no-repeat"}}>
          <img src={R2} alt="" className='Rectangle' />
        </div>
        </div> 
    </div>
  )
}

export default Hero