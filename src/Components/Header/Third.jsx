import './post.css'

const Post = () => {
    return (

        <div className='post'>
        <h3 className='holy'>Hollywood</h3>
                    <img
                className='postImg'
                src="https://lumiere-a.akamaihd.net/v1/images/p_drstrangeinthemultiverseofmadness_245_476cabb1.jpeg" alt="..." />

            <div className='postInfo'>
               <div className='postCats'>
                <span className="postCat"> Dr.Strange:Multiverse Of Madness</span>

                

               </div>
               <span className="postTitle">
               <h6>  Doctor Strange in the Multiverse of Madness is a 2022 American superhero film based on Marvel Comics featuring the character Doctor Strange. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to Doctor Strange (2016) and the 28th film in the Marvel Cinematic Universe (MCU). </h6>
               </span>
               <span className='postDate' > 2h 6m</span>
            </div>
          <p className='postDesc'>Doctor Strange teams up with a mysterious teenage girl from his dreams who can travel across multiverses, to battle multiple threats, including other-universe versions of himself, which threaten to wipe out millions across the multiverse. They seek help from Wanda the Scarlet Witch, Wong and others.</p>
        </div>

    )
}

export default Post
