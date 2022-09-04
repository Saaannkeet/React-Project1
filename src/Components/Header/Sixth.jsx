import './post.css'

const Post = () => {
    return (

        <div className='post'>
                 <img
                className='postImg'
                src="https://thumbs.dreamstime.com/b/pizza-pepperoni-cheese-salami-vegetables-58914487.jpg" alt="..." />

            <div className='postInfo'>
               <div className='postCats'>
                <span className="postCat">Pizza</span>

               </div>
               <span className="postTitle">
               <h6>One of the simplest and most traditional pizzas is the Margherita, which is topped with tomatoes or tomato sauce, mozzarella, and basil. Popular legend relates that it was named for Queen Margherita, wife of Umberto I, </h6>
               </span>
               <span  > </span>
            </div>
          <p className='postDesc'>pizza, dish of Italian origin consisting of a flattened disk of bread dough topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many other ingredients, baked quickly—usually, in a commercial setting, using a wood-fired oven heated to a very high temperature—and served hot ...</p>
        </div>

    )
}

export default Post
