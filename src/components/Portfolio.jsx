import './Portfolio.css'
import P1 from './../assets/img/P1.svg'
import P2 from './../assets/img/P2.svg'
import P3 from './../assets/img/P3.svg'
import P4 from './../assets/img/P4.svg'
import P5 from './../assets/img/P5.svg'
import P6 from './../assets/img/P6.svg'
import Portofoliocard from './Portofoliocard'
function Portfolio() {
    let PortfolioCards =[{
        id : 1,
        image : `${P1}`,
        title : "UI-UX DESIGN",
        descrip : "Product Admin Dashboard",
        text : "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
        btn : "Case Study"
    },{
        id : 2,
        image : `${P2}`,
        title : "UI-UX DESIGN",
        descrip : "Product Admin Dashboard",
        text : "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
        btn : "Case Study"
    },{
        id : 3,
        image : `${P3}`,
        title : "UI-UX DESIGN",
        descrip : "Product Admin Dashboard",
        text : "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
        btn : "Case Study"
    },{
        id : 4,
        image : `${P4}`,
        title : "UI-UX DESIGN",
        descrip : "Product Admin Dashboard",
        text : "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
        btn : "Case Study"
    },{
        id : 5,
        image : `${P5}`,
        title : "UI-UX DESIGN",
        descrip : "Product Admin Dashboard",
        text : "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
        btn : "Case Study"
    },{
        id : 6,
        image : `${P6}`,
        title : "UI-UX DESIGN",
        descrip : "Product Admin Dashboard",
        text : "Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.",
        btn : "Case Study"
    }]
  return (
    <div className='Portfolio'>
         <h1 className='adress_1'>Portfolio</h1>
        <h1 className='adress_2'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</h1>
         <div className="countainer_Portfolio">
        {PortfolioCards.map((element,index)=>{return(
            <Portofoliocard key={index} title = {element.title} descrip={element.descrip} image={element.image} text={element.text} btn={element.btn} />
        )})}
        </div>
      {  <div style={{display:"flex" , justifyContent:"center"}}><button className='MoreProject'>More Project</button></div>}
    </div>
  )
}

export default Portfolio