import { store } from './Data'
import React, { useContext } from 'react'

const Bollywood = () => {
       const [details] = useContext(store);
       return (
              <div>
                     {details.map((item) =>
                            <h1 className='name'>{item.name1}</h1>)}
                     {details.map((item) =>
                            <h1 className='img1'>{item.image1}</h1>)}
                     {details.map((item) =>
                            <p>{item.info1}</p>)}
                 


              </div>
       )
}

export default Bollywood