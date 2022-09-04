import './App.css';
import './Components/style.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Bollywood from './Pages/Bollywood';
import Technology from './Pages/Technology';
import Hollywood from  './Pages/Hollywood'
import Fitness from './Pages/Fitness'
import Food from './Pages/Food'
import Data from './Pages/Data'

function App() {
  return (
    <Data>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Bollywood" element={<Bollywood />} />
        <Route path="/Technology" element={<Technology />} />
        <Route path="/Hollywood" element={<Hollywood/>} />
        <Route path="/Fitness" element={<Fitness/>} />
        <Route path="/Food"element={<Food/>} />
      </Routes>
    </BrowserRouter>
    </Data>
  );
}

export default App;