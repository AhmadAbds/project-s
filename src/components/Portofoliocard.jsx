import './Portofoliocard.css'

function Portofoliocard({image , title , descrip , text , btn}) {
  return (
    <div className='Portofoliocard'>
        <img src={image} alt=""/>
        <div id='cardText'>
        <h3>{title}</h3>
        <h1>{descrip}</h1>
        <h2>{text}</h2>
         <button>{btn}</button>
        </div>
    </div>
  )
}

export default Portofoliocard