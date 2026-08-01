function Card(props) {
  const restaurants = [
    {
      name: "Maharaaj",
      address: "Infinia Tower, Chandrasekharpur, Bhubaneswar",
      img: "https://dineout-media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_600,h_400/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/11/5/c48b6233-75f2-4577-98d9-4fb0dd555f30_image1968203e8e28a4bd9a3355443044bdcd1.JPG"
    },
    {
      name: "Barbeque Nation",
      address: "Jaydev Vihar, Bhubaneswar",
      img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
    },
    {
      name: "Mainland China",
      address: "Esplanade One Mall, Bhubaneswar",
      img: "https://images.unsplash.com/photo-1552566626-52f8b828add9"
    },
    {
      name: "Kake Da Minar",
      address: "Saheed Nagar, Bhubaneswar",
      img: "https://images.unsplash.com/photo-1559339352-11d035aa65de"
    },
    {
      name: "The Zaika",
      address: "Patia, Bhubaneswar",
      img: "https://images.unsplash.com/photo-1514933651103-005eec06c04b"
    },
    {
      name: "Mughlai Roast",
      address: "KIIT Square, Bhubaneswar",
      img: "https://images.unsplash.com/photo-1515669097368-22e68427d265"
    },
    {
      name: "The Urban Kitchen",
      address: "Nayapalli, Bhubaneswar",
      img: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17"
    },
    {
      name: "Spice Affair",
      address: "Patrapada, Bhubaneswar",
      img: "https://images.unsplash.com/photo-1514326640560-7d063ef2aed5"
    },
    {
      name: "The Zaika",
      address: "KIIT Square, Bhubaneswar",
      img: "https://picsum.photos/id/835/600/400"
    },
    {
      name: "Urban Kitchen",
      address: "Nayapalli, Bhubaneswar",
      img: "https://picsum.photos/id/1025/600/400"
    },
    {
      name: "Spice Affair",
      address: "Patrapada, Bhubaneswar",
      img: "https://picsum.photos/id/1081/600/400"
    },
    {
      name: "99 North",
      address: "Swosti Premium, Bhubaneswar",
      img: "https://picsum.photos/id/1040/600/400"
    },
    {
      name: "The Spice Route",
      address: "Patia, Bhubaneswar",
      img: "https://picsum.photos/id/292/600/400"
    },
    {
      name: "Cafe Aroma",
      address: "Saheed Nagar, Bhubaneswar",
      img: "https://picsum.photos/id/431/600/400"
    },
    {
      name: "Royal Biryani House",
      address: "Jaydev Vihar, Bhubaneswar",
      img: "https://picsum.photos/id/1080/600/400"
    }
  ]

  return (
    <section>
      <div className="section-heading">
        <h3>Featured restaurants</h3>
        <p>Curated dining spots with a fresh, modern feel.</p>
      </div>

      <div className="card-grid">
        {restaurants.map((p, index) => {
          return (
            <div className="card" key={`${p.name}-${index}`}>
              <img className="card-image" src={p.img} alt={p.name} />
              <div className="card-body">
                <p className="card-badge">Popular pick</p>
                <h3 className="card-title">{p.name}</h3>
                <p className="card-text">{p.address}</p>
                {props.rating ? <p className="card-text">{props.rating}</p> : null}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Card