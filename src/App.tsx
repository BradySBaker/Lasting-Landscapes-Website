import { useState, useMemo, useEffect } from "react";
import {Routes, Route, Link } from "react-router-dom";

export const baseURL = '/';

import LandscapingLogo from "./components/icons/LandscapingLogo.tsx";

import Home from "./pages/Home.tsx";
import Landscaping from "./pages/Landscaping.tsx";
import Ironworks from "./pages/Ironworks.tsx";
import About from "./pages/About.tsx";
import Contact from "./components/Contact.tsx";

import getStaticRawGalleryData from "./StaticGalleryData.tsx";

export type galleryDataType = {[category: string]: {icon: string, full: string}[]}
export type rawGalleryDataType = {[category: string]: string[]}

export const ironworkFolderNames: {[key: string]: boolean} = {
  Ironworks: true,
};

function App() {
  const [galleryData, setGalleryData] = useState<galleryDataType | undefined>();
  const staticRawGalleryData: rawGalleryDataType = useMemo(() => getStaticRawGalleryData(), []); //Incase of server outage
  const baseURL = `https://res.cloudinary.com/dztqjtask/image/upload/`

  const createGalleryData = (rawGalleryData: rawGalleryDataType) => {
    const result: galleryDataType = {};
    for (const [key, value] of Object.entries(rawGalleryData)) {

      result[key] = [];

      value.forEach((cur) => {
        result[key].push({icon: `${baseURL}f_auto,q_auto,w_400/${cur}`, full: `${baseURL}f_auto,q_auto/${cur}`})
      })
    }
    setGalleryData(result);
  }

  useEffect(() => {
    fetch("https://cloudinary-worker-roach.bradysamuelbaker.workers.dev/galleryData")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Fetch failed");
        }
        return res.json();
      })
      .then((data: rawGalleryDataType) => createGalleryData(data))
      .catch(() => {
        console.log("Using static gallery data fetch failed");
        createGalleryData(staticRawGalleryData);
      });
  }, []);

  console.log(galleryData);

  const ironWorksLogos = [
    '/icons/Hammer Anvil 0.png',
    '/icons/Hammer Anvil.gif'
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
        <Route path="/" element={<Home galleryData={galleryData}/>} />
        <Route path="/landscaping" element={<Landscaping galleryData={galleryData}/>}/>
        <Route path="/ironworks" element={<Ironworks galleryData={galleryData}/>} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Contact />
    </>
  )
}

export default App
