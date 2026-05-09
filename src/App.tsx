import { useState, useMemo } from "react";
import {Routes, Route, Link } from "react-router-dom";

export const baseURL = '/Lasting-Landscapes-Website/';

import LandscapingLogo from "./components/landscapingLogo.tsx";

import Home from "./pages/Home.tsx";
import Landscaping from "./pages/Landscaping.tsx";
import Ironworks from "./pages/Ironworks.tsx";
import About from "./pages/About.tsx";
import Contact from "./components/Contact.tsx";
export type landscapingCategory = {name: string, dir: string, urls: string[], count: number}


const baseLandscapingCategories: landscapingCategory[] = [ //Landscaping Photo and Category Info
    {name: 'Patios & Outdoor Living', dir: 'Patios_Outdoor_Living', urls: [], count: 53},
    {name: 'Planting & Softscapes', dir: 'Planting_Softscapes', urls: [], count: 34},
    {name: 'Stonework & Grading', dir: 'Stonework_Grading', urls: [], count: 23},
    {name: 'Walkways & Pathways', dir: 'Walkways_Pathways', urls: [], count: 23},
    {name: 'Water Features & Ponds', dir: 'Water_Features_Ponds', urls: [], count: 11},
    {name: 'Speciality Projects', dir: 'Speciality_Projects', urls: [], count: 6}
];


function App() {
  const [landscapingClicked, setLandscapingClicked] = useState<boolean>(false);

  const landscapingCategories: landscapingCategory[] = useMemo(() => {
    return baseLandscapingCategories.map(cat => ({
      ...cat,
      urls: Array.from({ length: cat.count }, (_, i) =>
        `${baseURL}landscaping/${cat.dir}/${i + 1}.avif` //Dev
      )
    }));
  }, []);

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
        <Route path="/" element={<Home landscapingCategories={landscapingCategories}/>} />
        <Route path="/landscaping" element={<Landscaping  landscapingCategories={landscapingCategories}/>}/>
        <Route path="/ironworks" element={<Ironworks />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Contact />
    </>
  )
}

export default App
