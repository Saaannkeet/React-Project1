import './header1.css'
import First from '../Header/First'
import Second from '../Header/Second'
import Third from '../Header/Third'
import Fourth from '../Header/Fourth'
import Fifth from '../Header/Fifth'
import Sixth from '../Header/Sixth'

export default function Homepost() {
  return (
    <div className='posts'>
      <First/>
      <Second/>
      <Third/>
      <Fourth/>
      <Fifth/>
      <Sixth/>
    </div>
  )
}