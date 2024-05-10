import React from 'react';
import './styles/purchaseCard.css'

const PurchaseCart = ({prod}) => {

console.log(prod)

  return (
    <article className='purchasecard'>
        <h3 className='purchasecard__title'>{prod.product?.title}</h3>
        <figure className='purchasecard__img'>
            <img src={prod.product?.images[0].url} alt="product image" />
        </figure>
        <p className='purchasecard_date'>{prod.updatedAt?.slice(0, 10)}</p>
        <span className='purchasecard__quantity'>{prod.quantity}</span>
        <span className='purchasecard__price'>Total Price: $ {prod.product?.price * prod.quantity}</span>
    </article>
  )
}

export default PurchaseCart;
