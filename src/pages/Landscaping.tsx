import {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";

import ImageSlide from "../components/ImageSlide";
import ImageGallery from '../components/ImageGallery';
import type { landscapingCategory } from "../App";

import BackArrow from '../components/icons/backArrowIcon';

function Landscaping({landscapingCategories}: {landscapingCategories: landscapingCategory[]}) {
    const [selectedCategory, setSelectedCategory] = useState<landscapingCategory | false>(false);

    const location = useLocation();

    const exitGallery = () => {
        setSelectedCategory(false);
        console.log('occured');
    };

    useEffect(() => { //When landscaping route clicked
        if(selectedCategory) {
            exitGallery();
        }
    }, [location.key]);

    const slideClicked = (slide: landscapingCategory) => {
        setSelectedCategory(slide);
    };


    return (
        <div className="landscaping">
            {
            !selectedCategory ? <h2>Landscaping Gallery</h2> :  /* Gallery title and back button */

            <div className='landscaping-title-container'>
                <BackArrow onClick={exitGallery} classname={"back-button"}/>
                <h2>{selectedCategory.name}</h2> 
                <BackArrow classname={"spacer-button"}/>
            </div>
            }

            {!selectedCategory ? 
            landscapingCategories.map((curCat) => {
                return(
                <div className="image-slide-container" onClick={() => slideClicked(curCat)}>
                    <h2 className="image-slide-title">{curCat.name}</h2>
                    <ImageSlide imgURLS={curCat.urls.slice(0, 7)} />
                </div>
                )
            })
            :
            <ImageGallery folderName={selectedCategory.dir} urls={selectedCategory.urls} />
        }
        </div>
    )
}

export default Landscaping;