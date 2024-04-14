import './Blogcard.css'
function Blogcard({image , title , descrip , text}) {
  return (
    <div className='Blogcard'>
        <img src={image} alt="" />
        <div style={{padding:"25px 0 16px 25px"}}>
        <div className='web_tempates' >{title}</div>
        <div className='Blogcard_descrip' >{descrip}</div>
        <div className='learn_more' >{text}<i class="fa-solid fa-chevron-right" id='icon_learn'></i></div>
        </div>
    </div>
  )
}

export default Blogcard