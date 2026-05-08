import ImageSlide from "../components/ImageSlide";
import { useState, useEffect } from "react";

type LandscapingURLs = {
  landscapingPatio: string[];
  landscapingPlanting: string[];
  landscapingStoneWork: string[];
  landscapingPathways: string[];
  landscapingWater: string[];
};

function Landscaping() {
    const landscapingCategories = ['Patios & Outdoor Living', 'Planting & Softscapes', 'Stonework & Grading', 'Walkways & Pathways', 'Water Features & Ponds'];

    return (
        <div className="landscaping">
            <h2>Landscaping Gallery</h2>
            {landscapingCategories.map((curCat) => {
                return(
                <div className="image-slide-container">
                    <h2 className="image-slide-title">{curCat}</h2>
                    <ImageSlide imgURLS={['URLS']}/>
                </div>
                )
            })}
        </div>
    )
}

export default Landscaping;