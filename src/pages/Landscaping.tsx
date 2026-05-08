import ImageSlide from "../components/ImageSlide";
import { useState } from "react";

type LandscapingURLs = {
  landscapingPatio: string[];
  landscapingPlanting: string[];
  landscapingStoneWork: string[];
  landscapingPathways: string[];
  landscapingWater: string[];
};

function Landscaping() {



    return (
        <div className="landscaping">
            <h2>Landscaping</h2>

              <h2 className="image-slide-title">Lasting Landscapes</h2>
              <ImageSlide imgURLS={['none']}/>
        </div>
    )
}

export default Landscaping;