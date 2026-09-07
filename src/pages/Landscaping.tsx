import {useState, useEffect} from 'react';
import { useLocation } from "react-router-dom";

import ImageSlide from "../components/ImageSlide";
import ImageGallery from '../components/ImageGallery';
import VideoGallery from '../components/VideoGallery';
import VideoSlide from '../components/VideoSlide';

import { ironworkFolderNames, type galleryDataType } from '../App';

import BackArrow from '../components/icons/BackArrowIcon';

export type singleGalleryType = {folder: string, URLS: {icon: string, full: string}[]};

function Landscaping({galleryData}: {galleryData?: galleryDataType}) {
    const [selectedImgGallery, setSelectedImgGallery] = useState<singleGalleryType | false>(false);
    const [selectedAerialShowcases, setSelectedAerialShowcases] = useState<boolean>(false);

    const location = useLocation();

    const exitGallery = () => {
        setSelectedImgGallery(false);
        setSelectedAerialShowcases(false);
    };

    useEffect(() => { //When landscaping route clicked
        if(selectedImgGallery) {
            exitGallery();
        }
    }, [location.key]);

    const imgSlideClicked = (slide: singleGalleryType) => {
        setSelectedImgGallery(slide);
    };


    return (
        <div className="landscaping">
            {
            !selectedImgGallery && !selectedAerialShowcases ? <h2>Landscaping Gallery</h2> :  /* Gallery title and back button */
            <div className='landscaping-title-container'>
                <BackArrow onClick={exitGallery} classname={"back-button"}/>
                {selectedImgGallery ? <h2>{selectedImgGallery.folder.replaceAll('_', ' ')}</h2> : <h2>Aerial Showcases</h2>}
                <BackArrow classname={"spacer-button"}/>
            </div>
            }
            {galleryData &&
            <>
                {!selectedImgGallery && !selectedAerialShowcases ? 
                <>
                <div className="image-slide-container" onClick={() => setSelectedAerialShowcases(true)}>
                     <h2 className="image-slide-title">Aerial Showcases</h2>
                     <VideoSlide />
                </div>
                 {Object.entries(galleryData).map(([key, value]) => {
                        if (ironworkFolderNames[key]) {
                            return;
                        }
                        return(
                        <div className="image-slide-container" onClick={() => imgSlideClicked({folder: key, URLS: value})}>
                            <h2 className="image-slide-title">{key.replaceAll('_', ' ')}</h2>
                            <ImageSlide imgURLS={value.slice(0, 7)} />
                        </div>
                        )
                    })}
                </>
                    :
                    selectedImgGallery ? <ImageGallery singleGallery={selectedImgGallery as singleGalleryType} /> : <VideoGallery />
                }
            </>
        }
        </div>
    )
}

export default Landscaping;