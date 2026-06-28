import {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";

import ImageSlide from "../components/ImageSlide";
import ImageGallery from '../components/ImageGallery';
import { ironworkFolderNames, type galleryDataType } from '../App';

import BackArrow from '../components/icons/BackArrowIcon';

export type singleGalleryType = {folder: string, URLS: {icon: string, full: string}[]};

function Landscaping({galleryData}: {galleryData?: galleryDataType}) {
    const [selectedGallery, setSelectedGallery] = useState<singleGalleryType | false>(false);

    const location = useLocation();

    const exitGallery = () => {
        setSelectedGallery(false);
        console.log('occured');
    };

    useEffect(() => { //When landscaping route clicked
        if(selectedGallery) {
            exitGallery();
        }
    }, [location.key]);

    const slideClicked = (slide: singleGalleryType) => {
        setSelectedGallery(slide);
    };


    return (
        <div className="landscaping">
            {
            !selectedGallery ? <h2>Landscaping Gallery</h2> :  /* Gallery title and back button */

            <div className='landscaping-title-container'>
                <BackArrow onClick={exitGallery} classname={"back-button"}/>
                <h2>{selectedGallery.folder}</h2> 
                <BackArrow classname={"spacer-button"}/>
            </div>
            }

            {!selectedGallery && galleryData ? 
            Object.entries(galleryData).map(([key, value]) => {
                if (ironworkFolderNames[key]) {
                    return;
                }
                return(
                <div className="image-slide-container" onClick={() => slideClicked({folder: key, URLS: value})}>
                    <h2 className="image-slide-title">{key.replaceAll('_', ' ')}</h2>
                    <ImageSlide imgURLS={value.slice(0, 7)} />
                </div>
                )
            })
            :
            <ImageGallery singleGallery={selectedGallery as singleGalleryType} />
        }
        </div>
    )
}

export default Landscaping;