import React from 'react'
import Posts from '../Components/posts/Posts'
import Sidebar from '../Components/sidebar/Sidebar'


const Home = () => {
  return (
    <div className='home'>
    
     <Posts/>
     <Sidebar/>
   
    </div>
  )
}

export default Home