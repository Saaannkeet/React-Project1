import { store } from './Data'
import React, { useContext } from 'react'

const Hollywood = () => {
       const [details] = useContext(store);
       return (
              <div>
                     {details.map((item) =>
                            <h1 className='name'>{item.name11}</h1>)}
                     {details.map((item) =>
                            <h1 className='img1'>{item.image11}</h1>)}
                     {details.map((item) =>
                            <p>{item.info11}</p>)}
<hr />
                     {details.map((item) =>
                            <h1 className='name'>{item.name12}</h1>)}
                     {details.map((item) =>
                            <h1 className='img1'>{item.image12}</h1>)}
                     {details.map((item) =>
                            <p>{item.info12}</p>)}

         </div>
       )
}

export default Hollywood