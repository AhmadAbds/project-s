import  './Child.css'
const Child = ({image , title , descrip}) => {
  return (
    <div className='Child_list'>
      <img src={image} alt="" className='imggg'/>
        <h1>{title}</h1>
        <h3>{descrip}</h3>
    </div>
  )
}

export default Child