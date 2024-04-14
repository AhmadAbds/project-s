import './Blog.css'
import Blogcard from './Blogcard'
import B1 from './../assets/img/B1.svg'
import B2 from './../assets/img/B2.svg'
import B3 from './../assets/img/B3.svg'
function Blog() {
    let PortfolioCards =[{
        id : 1,
        image : `${B1}`,
        title : "How to make web tempates",
        descrip : "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum a Urna ",
        text : "Learn more"
    },{
        id : 2,
        image : `${B2}`,
        title : "make Business card",
        descrip : "Lorem ipsum dolor sit Amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ",
        text : "Learn more"
    },{
        id : 3,
        image : `${B3}`,
        title : "How to make Flyer Design",
        descrip : "Lorem ipsum dolor sit Amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna ",
        text : "Learn more"
    }]
  return (
    <div className='Blog'>
        <h1 id='Blog_1' >Blog</h1>
        <h1 id='Blog_2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</h1>
        <div className="container_Blog">
        {PortfolioCards.map((element,index)=>{return(
            <Blogcard key={index} title = {element.title} descrip={element.descrip} image={element.image} text={element.text} />
        )})}
        </div>
    </div>
  )
}

export default Blog