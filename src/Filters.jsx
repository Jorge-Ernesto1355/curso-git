import React, {useEffect} from 'react'
import {motion} from 'framer-motion'


const Filters = ({products, activeFilters, setFilters, setActiveFilters}) => {

  useEffect(()=>{
    if(activeFilters === 'all'){
      setFilters(products)
      return 
    }

    const filters = products.filter((p)=> p.categories.includes(activeFilters))
    setFilters(filters)
  }, [activeFilters, products, setFilters])
  return (
    <div>
      <motion.button  onClick={()=> setActiveFilters('all')} className={`filtersButon ${activeFilters === 'all' && 'active' }`} layoutId='active' >All</motion.button>
        <motion.button  onClick={()=> setActiveFilters('women')} className={`filtersButon ${activeFilters === 'all' && 'active' }`}  layoutId='active'>Women</motion.button>
          <motion.button  onClick={()=> setActiveFilters('men')} className={`filtersButon ${activeFilters === 'all' && 'active' }`}  layoutId='active'>men</motion.button>
    </div>
  )
}

export default Filters