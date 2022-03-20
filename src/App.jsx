import { useState } from 'react'
import {motion} from "framer-motion"
import './App.css'

function App() {
  const [input, setInput] = useState({name:"", apellido:""})
  const [inputs, setInputs] = useState([])
  const [show, setShow] = useState(false)
  const [crud, setCrud] = useState(false)

  const variantLogin = {
    show:{
      opacity:1,
    }, 
    hidden:{
      opacity:0,
      y: 400,
      x:3,
    transition:{
      duration:0.3
    }    }
  }

  const variantsCrud = {
     show:{
      opacity:1, 
    }, 
    hidden:{
      opacity:0,
      x: 700,
      y:3,
    transition:{
      duration:0.3
    }    }
  }


  const Output = (e)=>{
      const {value, name} =  e.target    
     setInput({
       ...input, 
       [name]:value
     })
     
     console.log(input)
     
  }

  const j = ()=>{
    if(crud){
      return 
    }else{
      setShow(!show)
    }
  }
  const c = ()=>{
     if(show){
      return 
    }else{
      setCrud(!crud)
    }
  }

  console.log(crud)

  const handleLogin =(e)=>{
   setInputs([...inputs, input])
   setInput({name:"", apellido:""})
 
   
  }

  const handleBorrar = name =>{
    setInputs(inputs.filter((e) => e.name !== name))
  }  
 
  


  return (
    <div className="App">
           <div className="button-block">
             <div className="buttons">
               <button className="buton" onClick={()=> j()} >login</button>
               <button className="buton" onClick={()=> c()} >crud</button>
             </div>
             <motion.div
             animate={show ? 'show': 'hidden'}
               variants={variantLogin} className="block">
               <motion.div 
                className="login">
                    <h2>Logindddd</h2>
                    <div className='form'>

                    <input type="text" value={input.name} name="name" onChange={(e)=> Output(e)} />
                    <input type="text" name="apellido" value={input.apellido} onChange={(e)=> Output(e)} />
                    <button  onClick={(e)=>handleLogin(e)}>enviar</button>
                    </div>

                    {
                      inputs.map((e)=>(
                        <div>
                          <div>{e.name}</div>
                          <div>{e.apellido}</div>
                          <button onClick={()=>handleBorrar(e.name)}>borrar</button>
                        </div>
                      ))
                    }
               </motion.div>
             </motion.div>
              <motion.div
               animate={crud ? 'show': 'hidden'}
               variants={variantsCrud} className="block">
               <motion.div 
                className="login">
                    <h2>Crud</h2>
                    <div className='form'>

                    <input type="text" value={input.name} name="name" onChange={(e)=> Output(e)} />
                    <input type="text" name="apellido" value={input.apellido} onChange={(e)=> Output(e)} />
                    <button  onClick={(e)=>handleLogin(e)}>enviar</button>
                    </div>

                    {
                      inputs.map((e)=>(
                        <div>
                          <div>{e.name}</div>
                          <div>{e.apellido}</div>
                          <button onClick={()=>handleBorrar(e.name)}>borrar</button>
                        </div>
                      ))
                    }
               </motion.div>
             </motion.div>
           </div>
    </div>
  )
}

export default App
