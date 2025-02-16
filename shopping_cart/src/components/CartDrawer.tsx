// import React from 'react'
import { Item } from '../store/Store'
import style from '../styles/CartDrawer.module.css'

interface Props {
  item: Item
}

const CartDrawer = ({item}: Props) => {
  return (
    <div className={style.drawer}>
      { 
        <article key={item.id} className={`${style.cartItem}`}>
          <img src={item.image} alt={item.title} />
          <div>
            <h4>{item.title}</h4>
            <h5>${item.price}</h5>
            <div className={style.btnContainer}>
              <div>
                <p className={style.qty}>Quantity: {item.quantity}</p>
                <div className={style.qtyBtns}>
                  <button>-</button>
                  <button>+</button>
                </div>
              </div>
              <button>Remove</button>
            </div>
          </div>
        </article>
      }
    </div>
  )
}

export default CartDrawer
