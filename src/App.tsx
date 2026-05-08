import { useState, useEffect } from "react";
import {Routes, Route, Link } from "react-router-dom";

import LandscapingLogo from "./components/landscapingLogo.tsx";

import Home from "./pages/Home.tsx";
import Landscaping from "./pages/Landscaping.tsx";
import Ironworks from "./pages/Ironworks.tsx";
import About from "./pages/About.tsx";


function App() {
  const ironWorksLogos = ['/icons/Hammer Anvil 0.png', '/icons/Hammer Anvil.gif'];
  const landscapingHomeURLS = ['/Lasting Landscapes/1.avif', 'Lasting Landscapes/2.avif', '/Lasting Landscapes/3.avif', '/Lasting Landscapes/4.avif', '/Lasting Landscapes/5.avif', '/Lasting Landscapes/6.avif'];
  const ironWorksHomeURLS = ['/IronWorks/1.jpg', '/IronWorks/2.jpg', '/IronWorks/3.jpg', '/IronWorks/4.jpg', '/IronWorks/5.jpg', '/IronWorks/6.jpg'];
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
          <a className='navbar-buttons' href="/">Home</a>
          <a className='navbar-buttons' href="/landscaping">Landscaping</a>
          <Link to="/ironworks" className="ironworks-button" onMouseEnter={() => {setIronWorkIconSrc(ironWorksLogos[1])}} onMouseLeave={() => {setIronWorkIconSrc(ironWorksLogos[0])}}>
            <p className='navbar-buttons'>Ironworks</p>
            <img className='anvil-hammer' src={ironWorkIconSrc}/>
          </Link>
          <a className='navbar-buttons' href="/about">About</a>
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
