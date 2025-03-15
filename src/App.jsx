import './App.css'

import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/home';
import Menu from './pages/menu';
import Drinks from './pages/drinks'
import Burgers from './pages/burgers'
import Navbar from './cpmponents/navbar';
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/drinks" element={<Drinks />} />
        <Route path="/burgers" element={<Burgers />} />
      </Routes>
      <div className="clas">
        <h1>hello teacher</h1>
        <h3>hello              </h3>
        <h4>
          azizbek
        </h4>
        <button>azzzz</button>
        <p>ffff</p>
      </div>
    </>

  )
}

export default App
