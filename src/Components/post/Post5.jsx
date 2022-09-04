import './post.css'

const Post = () => {
    return (

        <div className='post'>
        <h3 className='YF'>Yoga and Food</h3>
            <img
                className='postImg'
                src="https://www.victoriavn.com/images/healthlibrary/hatha-yoga.jpg" alt="..." />

            <div className='postInfo'>
               <div className='postCats'>
                <span className="postCat">Yoga</span>
               </div>
               <span className="postTitle">
              <h6>Yoga offers physical and mental health benefits for people of all ages. And, if you’re going through an illness, recovering from surgery or living with a chronic condition, yoga can become an integral part of your treatment and potentially hasten healing. </h6>
               </span>
               <span className='postDate' > 1 week ago</span>
            </div>
          <p className='postDesc'>Yoga is essentially a spiritual discipline based on an extremely subtle science, which focuses on bringing harmony between mind and body. It is an art and scince of healthy living. The word 'Yoga' is derived from the Sanskrit root 'Yuj', meaning 'to join' or 'to yoke' or 'to unite'</p>
        </div>

    )
}

export default Post
