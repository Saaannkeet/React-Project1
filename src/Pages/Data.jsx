import React from 'react'
import { createContext,useState } from 'react'
export const store = createContext();

const Data = (props) => {
const [details,setdetails] = useState([{
    'id': 1 ,
    'name1' : 'Sanjay Datt',
    'image1' : <img  src='https://images.firstpost.com/wp-content/uploads/2020/07/sanjay-dutt-KGF-min.jpg' className='img-fluid shadow-4' alt='...' />,
    'info1': ' Sanjay Dutt is back, this time in a powerful role of Adheera in KGF Chapter 2. As the film released on Thursday, his wife Maanayata Dutt shared a special message about how proud she was of her actor husband. Sanjay plays actor Yash(character name Rocky) nemesis in the film. Maanayata has called K.G.F: Chapter 2 a very special film in Sanjay’s career'
},


{
  'id': 6 ,
  'name6' : 'Samsung galaxy ultra 20 pro',
  'image6' : <img src='https://9to5google.com/wp-content/uploads/sites/4/2020/08/samsung_galaxy_note_20_ultra_5.jpg?quality=82&strip=all' className='img-fluid shadow-4' alt='...' />,
  'info6':'The phone is powered by an Exynos 990 SoC and has 12GB of RAM and 128GB of storage onboard. The Galaxy S20 Ultra launched in India supports 4G networks only. It packs in a 5,000mAh battery and has support for 45W fast charging. Samsung ships a 25W charger in the box which is quick to charge the device.'
},

{
  'id': 11,
  'name11' : 'Dr.Strange:Multiverse Of Madness ',
  'image11' : <img src='https://lumiere-a.akamaihd.net/v1/images/p_drstrangeinthemultiverseofmadness_245_476cabb1.jpeg' className='img-fluid shadow-4' alt='...' />,
  'info11':'Doctor Strange in the Multiverse of Madness is a 2022 American superhero film based on Marvel Comics featuring the character Doctor Strange. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the sequel to Doctor Strange (2016) and the 28th film in the Marvel Cinematic Universe (MCU).'
},
{
  'id': 12,
  'name12' : 'Batman',
  'image12' : <img src='https://www.mansworldindia.com/wp-content/uploads/2022/08/cropped-Robert-Pattinson.jpg' className='img-fluid shadow-4' alt='...' />,
  'info12':' Batman is a superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939. In the DC Universe continuity, Batman is the alias of Bruce Wayne, a wealthy American playboy, philanthropist, and industrialist who resides in Gotham City'
},

,
{
  'id': 16,
  'name16' : 'Yoga',
  'image16' : <img src='https://www.victoriavn.com/images/healthlibrary/hatha-yoga.jpg' className='img-fluid shadow-4' alt='...' />,
  'info16': ' Yoga offers physical and mental health benefits for people of all ages. And, if you’re going through an illness, recovering from surgery or living with a chronic condition, yoga can become an integral part of your treatment and potentially hasten healing.'
},
 {
  'id': 21,
  'name21' : 'Pizza',
  'image21' : <img src='https://thumbs.dreamstime.com/b/pizza-pepperoni-cheese-salami-vegetables-58914487.jpg' className='img-fluid shadow-4' alt='...' />,
  'info21': 'One of the simplest and most traditional pizzas is the Margherita, which is topped with tomatoes or tomato sauce, mozzarella, and basil. Popular legend relates that it was named for Queen Margherita, wife of Umberto I.'
}
]);
  return (
    <div>
      <store.Provider value={[details,setdetails]}>
      {props.children}
      </store.Provider>
    </div>
  )
}

export default Data