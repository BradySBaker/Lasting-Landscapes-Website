import ImageSlide from "../components/ImageSlide";
import { useState } from "react";

function Landscaping() {

    const [landscapingPatio, setLandscapingPatio] = useState([]);
    const [landscapingPlanting, setLandscapingPlanting] = useState([]);
    const [landscapingStoneWork, setLandsdcapingStoneWork] = useState([]);
    const [landscapingPathways, setLandscapingPathways] = useState([]);
    const [landscapingWater, setLandscapingWater] = useState([]);

    return (
        <div className="landscaping">
            <h2>Landscaping</h2>

              <h2 className="image-slide-title">Lasting Landscapes</h2>
              <ImageSlide imgURLS={lastingLandscapesURLS}/>
        </div>
    )
}

export default Landscaping;