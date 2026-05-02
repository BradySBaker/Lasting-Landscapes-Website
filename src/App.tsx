import { useState } from "react";
import {Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Landscaping from "./pages/Landscaping.tsx";
import Ironworks from "./pages/Ironworks.tsx";
import About from "./pages/About.tsx";

function App() {
  const ironWorksLogos = ['Hammer Anvil 0.png', 'Hammer Anvil.gif'];
  const lastingLandscapesURLS = ['Lasting Landscapes/1.avif', 'Lasting Landscapes/2.avif', 'Lasting Landscapes/3.avif', 'Lasting Landscapes/4.avif', 'Lasting Landscapes/5.avif', 'Lasting Landscapes/6.avif'];

  const [ironWorkSrc, setIronWorkSrc] = useState(ironWorksLogos[0]);

  return (
    <>
      <div className="header">
        <div className='header-content'>
        <h1>Lasting Landscapes</h1>
        <div className='underline'></div>
      </div>
      <div className="navbar"> 
          <a href="/">Home</a>
          <a href="/landscaping">Landscaping</a>
          <div className="ironworks" onMouseEnter={() => {setIronWorkSrc(ironWorksLogos[1])}} onMouseLeave={() => {setIronWorkSrc(ironWorksLogos[0])}}>
            <a href="/ironworks">Ironworks</a>
            <img className='anvil-hammer' src={ironWorkSrc}/>
          </div>
          <a href="/about">About</a>
        </div> 
      </div>


      <Routes> {/* Pages */}
        <Route path="/" element={<Home imgURLS={lastingLandscapesURLS}/>} />
        <Route path="/landscaping" element={<Landscaping />} />
        <Route path="/ironworks" element={<Ironworks />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
