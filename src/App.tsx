import { useState, useEffect } from "react";
import {Routes, Route, Link } from "react-router-dom";

import LandscapingLogo from "./components/landscapingLogo.tsx";

import Home from "./pages/Home.tsx";
import Landscaping from "./pages/Landscaping.tsx";
import Ironworks from "./pages/Ironworks.tsx";
import About from "./pages/About.tsx";

export const baseURL = '/Lasting-Landscapes-Website/';
function App() {
  const ironWorksLogos = [
    baseURL + 'icons/Hammer Anvil 0.png',
    baseURL + 'icons/Hammer Anvil.gif'
  ];

  const landscapingHomeURLS = [
    baseURL + 'Lasting Landscapes/1.avif',
    baseURL + 'Lasting Landscapes/2.avif',
    baseURL + 'Lasting Landscapes/3.avif',
    baseURL + 'Lasting Landscapes/4.avif',
    baseURL + 'Lasting Landscapes/5.avif',
    baseURL + 'Lasting Landscapes/6.avif'
  ];
  console.log(landscapingHomeURLS);
  const [ironWorkIconSrc, setIronWorkIconSrc] = useState(ironWorksLogos[0]);

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
        <Route path="/" element={<Home landscapingHomeURLS={landscapingHomeURLS}/>} />
        <Route path="/landscaping" element={<Landscaping />} />
        <Route path="/ironworks" element={<Ironworks />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
