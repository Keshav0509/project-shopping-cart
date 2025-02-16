import { Item } from '../store/Store';
import style from '../styles/Product.module.css';
interface ProductProps {
  item: Item
  addToCart: (clickedItem: Item) => void;
  // buyNow: ()=>void;
}

const Product = ({item, addToCart}:ProductProps) => {
  return (
    <article className={style.productContainer} key={item.id}>
      <div className={style.container}>
        <div className={style.image}>
          <img src={item.image} alt={item.title} className={style.hero}/>
        </div>
        <div className={style.description}>
          <span className={style.title}>{item.title}</span>
          <span className={style.price}>Price: ${item.price}</span>
          <span className={style.quantity}>Quantity: {item.quantity}</span>
          <span className={style.ratting}>Rating: {item.rating.rate}</span>
          {/* <span>Description: No Description</span> */}
          <div className={style.btnContainer}>
            <button 
              onClick={()=>addToCart(item)}
              className={`${style.btn} ${style.addToCart}`}>Add to Cart</button>
            <button disabled={true} className={`${style.btn} ${style.buyNow}`}>Buy Now</button>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Product
