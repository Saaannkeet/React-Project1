import './post.css'

const Post = () => {
    return (

        <div className='post1'>
          
            <img
                className='postImg'
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Arduino_ftdi_chip-1.jpg/260px-Arduino_ftdi_chip-1.jpg" alt="..." />

            <div className='postInfo'>
               <div className='postCats'>
                <span className="postCat">Technology</span>

               </div>
               <span className="postTitle">
             <h6> Technology is the result of accumulated knowledge and application of skills, methods, and processes used in industrial production and scientific research. Technology is embedded in the operation of all machines and electronic devices, with or without detailed knowledge of their function, for the intended purpose of an organization.</h6> 
               </span>
               <span className='postDate' > Emerged since the 1980s</span>
            </div>
          <p className='postDesc'>Electronics is a branch of physics and electrical engineering that deals with the emission, behaviour and effects of electrons using electronic devices. Electronics uses active devices to control electron flow by amplification and rectification, which distinguishes it from classical electrical engineering, which only uses passive effects such as resistance, capacitance and inductance to control electric current flow.</p>
        </div>

    )
}

export default Post
