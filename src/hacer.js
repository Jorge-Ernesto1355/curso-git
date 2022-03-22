import React, {useState} from 'react'
import {motion, AnimateSharedLayout, AnimatePresence} from 'framer-motion'
const UL = () => {

  const items = [1, 2, 3]
  return (
    <AnimateSharedLayout>
        <motion.ul>
          {items.map(item =>(
            <Item key={item}/>
          ))}
        </motion.ul>
    </AnimateSharedLayout>
  )
}


const Item = ()=>{
  const [isOpen, setIsOpen] = useState(false)

  return(
    <motion.li layout onClick={()=> setIsOpen(!isOpen)}>
        <motion.div className='avatar' layout></motion.div>
        <AnimatePresence>{isOpen && <Content/>}</AnimatePresence>
    </motion.li>
  )
}

const Content = ()=>{
  return (
    <motion.div layout 
     initia={{ opacity: 0}}
     animate={{ opacity: 1}}
     exit={{ opacity: 0}}>
     
     <div className='row'></div>
      
    </motion.div>
  )
}

export default UL