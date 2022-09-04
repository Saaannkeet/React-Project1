import { store } from './Data'
import React, { useContext } from 'react'

const Fitness = () => {
       const [details] = useContext(store);
       return (
              <div>
                     {details.map((item) =>
                            <h1 className='name'>{item.name16}</h1>)}
                     {details.map((item) =>
                            <h1 className='img1'>{item.image16}</h1>)}
                     {details.map((item) =>
                            <p>{item.info16}</p>)}
                 


              </div>
       )
}

export default Fitness