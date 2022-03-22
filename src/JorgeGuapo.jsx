import React from 'react'
import './Products.css'
const Product = ({product}) => {
  return (
    <div>
        <img className='productImg' src={product.img}/>
        <h1 className="productTitle">{product.title}</h1>
    </div>
  )
}

export default Product