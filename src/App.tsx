import { useState, useEffect } from "react";
import {Routes, Route, Link } from "react-router-dom";

import LandscapingLogo from "./components/landscapingLogo.tsx";

import Home from "./pages/Home.tsx";
import Landscaping from "./pages/Landscaping.tsx";
import Ironworks from "./pages/Ironworks.tsx";
import About from "./pages/About.tsx";

const base = '/Lasting-Landscapes-Website/';

function App() {
  const ironWorksLogos = [
    base + 'icons/Hammer Anvil 0.png',
    base + 'icons/Hammer Anvil.gif'
  ];

  const landscapingHomeURLS = [
    base + 'Lasting Landscapes/1.avif',
    base + 'Lasting Landscapes/2.avif',
    base + 'Lasting Landscapes/3.avif',
    base + 'Lasting Landscapes/4.avif',
    base + 'Lasting Landscapes/5.avif',
    base + 'Lasting Landscapes/6.avif'
  ];

  const ironWorksHomeURLS = [
    base + 'IronWorks/1.jpg',
    base + 'IronWorks/2.jpg',
    base + 'IronWorks/3.jpg',
    base + 'IronWorks/4.jpg',
    base + 'IronWorks/5.jpg',
    base + 'IronWorks/6.jpg'
  ];
  const [ironWorkIconSrc, setIronWorkIconSrc] = useState(ironWorksLogos[0]);


  useEffect(() => {
  }, [])



  return (
    <>
      <div className="header">
        <div className='header-content'>
        <div className='header-title'>
          <h1>Lasting Landscapes</h1>
          <LandscapingLogo />
        </div>
        <div className='underline'></div>
      </div>
      <div className="navbar"> 
          <Link className='navbar-buttons' to="/">Home</Link>
          <Link className='navbar-buttons' to="/landscaping">Landscaping</Link>
          <Link to="/ironworks" className="ironworks-button" onMouseEnter={() => {setIronWorkIconSrc(ironWorksLogos[1])}} onMouseLeave={() => {setIronWorkIconSrc(ironWorksLogos[0])}}>
            <p className='navbar-buttons'>Ironworks</p>
            <img className='anvil-hammer' src={ironWorkIconSrc}/>
          </Link>
          <Link className='navbar-buttons' to="/about">About</Link>
        </div> 
      </div>


      <Routes> {/* Pages */}
        <Route path="/" element={<Home landscapingHomeURLS={landscapingHomeURLS} ironWorksHomeURLS={ironWorksHomeURLS}/>} />
        <Route path="/landscaping" element={<Landscaping />} />
        <Route path="/ironworks" element={<Ironworks />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
