

function Productcard( {title , image,price}) {
  return (
    <>
    <div style={{border:" 1px solid black  ", width:" 250px"}}>
        <img  height={250} width={250} src={image}alt=""></img>
        <p>  {title}</p>
        <p> {price}</p>
    </div>
    
    
    
    </>
  )
}

export default Productcard