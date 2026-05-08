import { useEffect } from "react";
import ImageSlide from "../components/ImageSlide";
import {landscapingCategories} from './Home';
// import { useState, useEffect } from "react";

// type LandscapingURLs = {
//   landscapingPatio: string[];
//   landscapingPlanting: string[];
//   landscapingStoneWork: string[];
//   landscapingPathways: string[];
//   landscapingWater: string[];
// };

function Landscaping() {

    return (
        <div className="landscaping">
            <h2>Landscaping Gallery</h2>
            {landscapingCategories.map((curCat) => {
                return(
                <div className="image-slide-container">
                    <h2 className="image-slide-title">{curCat.name}</h2>
                    <ImageSlide imgURLS={['URLS']}/>
                </div>
                )
            })}
        </div>
    )
}

export default Landscaping;