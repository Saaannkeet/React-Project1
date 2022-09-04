import {store} from './Data'
import React, { useContext } from 'react'

const Food = () => {
  const [details] = useContext(store);
  return (
    <div>
      {details.map((item)=>
       <h1 className='name'>{item.name21}</h1>)}
       {details.map((item)=>
       <h1 className='img1'>{item.image21}</h1>)}
       {details.map((item)=>
       <p>{item.info21}</p>)}



    </div>
  )
}

export default Food