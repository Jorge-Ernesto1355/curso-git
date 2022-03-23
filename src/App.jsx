import React,{useState, useEffect} from 'react'
import './App.css'
import axios from 'axios'

import Product from './JorgeGuapo'
import Filters from './Filters'
const App = () => {

  const [products, setProducts] = useState([])
  const [filters, setFilters] = useState([])
  const [activeFilters, setActiveFilters] = useState('all')
  

  useEffect(()=>{
    const fetchApiProducts = async()=>{
      const data = await axios('https://tshirtdev.herokuapp.com/api/products')
      setProducts(data.data)
      setFilters(products) 
    }
    fetchApiProducts()
  }, [])

  return (
  <div>
      <div className="products">
          <Filters
           products={products}
           activeFilters={activeFilters}
           setFilters={setFilters}
           setActiveFilters={setActiveFilters}/>
        {filters.map((product)=>(
          <Product key={product.id} product={product}/>
        ))}
      </div>
  </div>
  )
}
export default App