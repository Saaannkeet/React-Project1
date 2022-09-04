import './post.css'

const Post = () => {
    return (

        <div className='post'>
            <img
                className='postImg'
                src="https://image.api.playstation.com/vulcan/img/rnd/202010/2621/H9v5o8vP6RKkQtR77LIGrGDE.png" alt="..." />

            <div className='postInfo'>
               <div className='postCats'>
                <span className="postCat">Batman</span>

                

               </div>
               <span className="postTitle">
               <h6> Batman is a superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939. In the DC Universe continuity, Batman is the alias of Bruce Wayne, a wealthy American playboy, philanthropist, and industrialist who resides in Gotham City </h6>               </span>
               <span className='postDate' > 2h 56m</span>
            </div>
          <p className='postDesc'>Batman was originally introduced as a ruthless vigilante who frequently killed or maimed criminals, but evolved into a character with a stringent moral code and strong sense of justice. Unlike most superheroes, Batman does not possess any superpowers, instead relying on his intellect, fighting skills, and wealth.</p> </div>

    )
}

export default Post
