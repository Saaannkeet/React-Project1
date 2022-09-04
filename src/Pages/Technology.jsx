import {store} from './Data'
import React, { useContext } from 'react'

const Technology = () => {
  const [details] = useContext(store);
  return (
    <div>
      {details.map((item)=>
       <h1 className='name'>{item.name6}</h1>)}
       {details.map((item)=>
       <h1 className='img1'>{item.image6}</h1>)}
       {details.map((item)=>
       <p>{item.info6}</p>)}



    </div>
  )
}

export default Technology