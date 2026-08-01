import { useState, useEffect } from "react";
import Productcard from "./Productcard";

function Products({ serachquery }) {
  const [products, setproducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setproducts(data));
  }, [])

  let filteredproducts = products.filter((p) => {
    return p.title.toLowerCase().includes(serachquery.toLowerCase())
  })

  return (
    <section>
      <div className="section-heading">
        <h3>Popular products</h3>
        <p>Search through the catalog and discover quality picks.</p>
      </div>

      <div className="products-grid">
        {filteredproducts.length ? (
          filteredproducts.map((p, index) => {
            return <Productcard key={`${p.title}-${index}`} title={p.title} image={p.image} price={p.price} />
          })
        ) : (
          <div className="empty-state">No products found for this search.</div>
        )}
      </div>
    </section>
  )
}

export default Products