import { useState,useEffect } from "react";
import Productcard from "./Productcard";
function Products({serachquery}) {

const [products, setproducts] = useState([])

    useEffect(()=>{
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(data => setproducts(data));
},[])

    let filteredproducts=products.filter((p)=>{
  return p.title.toLowerCase().includes(serachquery.toLowerCase())
 })



    // fetch the products from the server

  return (
    <>
    <div style={{display:" flex",flexWrap:"wrap", gap:"100px"}}>
         {
        filteredproducts.map((p)=>{
            return <Productcard  title={p.title} image={p.image}  price={p.price}  />

        })
    }
    </div>
    
    
    </>
  )
}

export default Products