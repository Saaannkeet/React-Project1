import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className='sidebarTitle'>Top Posts</span>
        <img src='https://as2.ftcdn.net/v2/jpg/01/82/70/85/1000_F_182708596_Mv3o4eNgOM9KPA3fFMW2Ow8nn2FTGRqT.jpg' className='img-fluid shadow-4' alt='...' />
        <p>Nature is the endless expanse of life forms, beauty, resources, peace and nourishment. Every bud that grows to a flower, every caterpillar that flies with the wings of a butterfly and every infant who faces the world as a human, owes its survival and sustenance to nature. In addition to providing resources for our daily needs of food, clothing and shelter, nature also contributes to different industries and manufacturing units. Paper, furniture, oil, gemstones, petrol, diesel, the fishing industry, electrical units, etc. all derive their basic components from nature.</p>
        <span className='sidebarTitle'>Advertisement</span>

        <img width={400} className='add' src='https://pub-static.fotor.com/assets/projects/pages/8cc0e6aa49204fd882900f020ab6c0bf/fashion-promotion-poster-0a577d30edfd446eb36c5adaffe77fd4.jpg'/>
      </div>
    </div>
  )
} 