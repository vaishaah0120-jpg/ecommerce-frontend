function Productcard({ title, image, price }) {
  return (
    <article className="product-card">
      <img src={image} alt={title}></img>
      <h3 className="product-title">{title}</h3>
      <p className="product-price">${price}</p>
    </article>
  )
}

export default Productcard