import './List.css'
import Child from './Child'
import Vector from './../assets/img/Vector.svg'
import Layer from './../assets/img/Layer.svg'
import Vector3 from './../assets/img/Vector3.svg'
import Vector4 from './../assets/img/Vector4.svg'
const List = () => {
    let products =[{
        id : 1,
        image : `${Vector}`,
        title : "UI/UX",
        descrip : "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
    },{
        id : 2,
        image : `${Layer}`,
        title : "Web Design ",
        descrip : "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
    },{
        id : 3,
        image : `${Vector3}`,
        title : "App Design",
        descrip : "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
    },{
        id : 4,
        image : `${Vector4}`,
        title : "Graphic Design",
        descrip : "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum"
    }]
  return (
    <div className='containerlist'>
        {products.map((element,index)=>{return(
            <Child key={index} title = {element.title} descrip={element.descrip} image={element.image}/>
        )})}
    </div>
  )
}

export default List