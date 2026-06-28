import {useState} from 'react'
import LazyImage from './LazyImage';
import type { singleGalleryType } from '../pages/Landscaping';

function ImageGallery({singleGallery}: {singleGallery: singleGalleryType}) {
    const [selectedImgURL, setSelectedImgURL] = useState('');

    return (
        <div className="gallery">
            {selectedImgURL && 
                <div className='backdrop' onClick={() => setSelectedImgURL('')}>
                    <img className='selected-image' src={selectedImgURL}/>
                </div>
            }
            
            <div className='gallery-img-container'>
            {singleGallery.URLS.map((curURL) => {
                return (
                    <LazyImage key={curURL.icon} src={curURL.icon} onClick={() => setSelectedImgURL(curURL.full)} />
                )
            })}
            </div>
        </div>
    )
}

export default ImageGallery;