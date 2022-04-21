import React from 'react'
import pizzas from '../pizzas'
import { Pizza } from '../Component/Pizza'
function Home() {
  return (
      <div className="row">
        {pizzas.map(pizza=>{
          return <div className='col-md-4'>
               <Pizza pizza={pizza} />
             </div>
        })}
      </div>
  )
}

export default Home