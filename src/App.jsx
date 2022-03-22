import React,{useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'

import Product from './JorgeGuapo'
const App = () => {

  const [products, setProducts] = useState([])
  console.log(products)

  useEffect(()=>{
    const fetchApiProducts = async()=>{
      const data = await axios('https://tshirtdev.herokuapp.com/api/products')
      setProducts(data.data)
    }
    fetchApiProducts()
  }, [])

  return (
  <div>
      <div className="products">
        {products.map((product)=>(
          <Product key={product.id} product={product}/>
        ))}
      </div>
  </div>
  )
}
export default App