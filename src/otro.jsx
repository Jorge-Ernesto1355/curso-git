
     {items.map(item => (
  <motion.div className='jorge' key={item.id} layoutId={item.id} onClick={() => setSelectedId(item.id)}>
    <motion.h5>{item.subtitle}</motion.h5>
    <motion.h2>{item.title}</motion.h2>
  </motion.div>
))}

<AnimatePresence>
  {selectedId && (
    <motion.div animate={{ scale:1.3,  transition:{
      duration:.8
    }}}  onClick={() => setSelectedId(null)}className='jorgeone' layoutId={selectedId}>
      <motion.h5 initial={{ opacity: 0}} animate={{ opacity:1, transition:{duration:1.6} }}
       >{carta(selectedId).subtitle}</motion.h5>
      <motion.h2 initial={{ opacity: 0}} animate={{ opacity:1, transition:{duration:1.8} }}
      >{carta(selectedId).title}</motion.h2>
      <motion.h2  initial={{ opacity: 0}} animate={{ opacity:1, transition:{duration:1.8} }}>jorge guapo </motion.h2>

    </motion.div>
  )}
</AnimatePresence>
