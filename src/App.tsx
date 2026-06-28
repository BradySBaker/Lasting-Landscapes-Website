import { useState, useMemo, useEffect } from "react";
import {Routes, Route, Link } from "react-router-dom";

export const baseURL = '/';

import LandscapingLogo from "./components/icons/LandscapingLogo.tsx";

import Home from "./pages/Home.tsx";
import Landscaping from "./pages/Landscaping.tsx";
import Ironworks from "./pages/Ironworks.tsx";
import About from "./pages/About.tsx";
import Contact from "./components/Contact.tsx";

import getStaticGalleryData from "./StaticGalleryData.tsx";

export type landscapingCategory = {name: string, dir: string, urls: string[], count: number}
export type galleryDataType = {category: {folder: string, url: string[]}[]}



function App() {
  
  const [galleryData, setGalleryData] = useState<galleryDataType | null>(null);

  useEffect(() => {
    fetch("https://cloudinary-worker-roach.bradysamuelbaker.workers.dev/galleryData")
      .then((res) => {
        if (!res.ok) {
          console.log("Status:", res.status);
          return;
        }
        console.log(res);
        return res.json();
      }).then((data) => setGalleryData(data));
  }, []);

  console.log(galleryData);

  const staticGalleryData: landscapingCategory[] = useMemo(() => getStaticGalleryData(), []); //Incase of server outage

  const ironWorksLogos = [
    baseURL + 'icons/Hammer Anvil 0.png',
    baseURL + 'icons/Hammer Anvil.gif'
  ];
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
        <Route path="/" element={<Home landscapingCategories={staticGalleryData}/>} />
        <Route path="/landscaping" element={<Landscaping  landscapingCategories={staticGalleryData}/>}/>
        <Route path="/ironworks" element={<Ironworks />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Contact />
    </>
  )
}

export default App
