function Card(props: any) {
  let item = props.item;
  return (
    <div className="product-card">
      <img src={item.img} alt={item.title} />
      <h3>{item.title}</h3>
      <p className="brand">{item.company}</p>
      
      <div className="rating">
        {item.star} {item.star} {item.star} {item.star}
        <span className="reviews">{item.reviews}</span>
      </div>

      <div className="price-container">
        <del className="prev-price">{item.prevPrice}</del>
        <span className="price">${item.newPrice}</span>
      </div>
    </div>
  );
}

export default Card;
