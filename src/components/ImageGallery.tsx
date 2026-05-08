import {useEffect, useState} from 'react'
import { baseURL } from '../App';
import LazyImage from './LazyImage';

function ImageGallery({folderName}: {folderName: string}) {

    const [galleryURLS, setGalleryURLS] = useState<string[]>([]);
    const [selectedImgURL, setSelectedImgURL] = useState('');

    const imageClick = (imgNum: number) => {
        // setSelectedImgURL(`https://res.cloudinary.com/dztqjtask/image/upload/f_auto,q_auto/${folderName}/${imgNum}`); //Production
         setSelectedImgURL(`${baseURL}${folderName}/${imgNum}.jpg`) //Dev
    }

    const imageClose = () => {
        setSelectedImgURL('');
    }

    useEffect(() => {
        const curURLS: string[] = [];
        for (let i = 1; i <= 28; i++ ) {
            // curURLS.push(`https://res.cloudinary.com/dztqjtask/image/upload/f_auto,q_auto,w_500/${folderName}/${i}`); //Production
            curURLS.push(`${baseURL}${folderName}/${i}.jpg`); //DEV
        }
        setGalleryURLS(curURLS);
    }, [])

    return (
        <div className="gallery">
            {selectedImgURL && 
                <div className='backdrop' onClick={imageClose}>
                    <img className='selected-image' src={selectedImgURL}/>
                </div>
            }
            
            <div className='gallery-img-container'>
            {galleryURLS.map((curURL, index) => {
                return (
                    <LazyImage key={curURL} src={curURL} onClick={() => imageClick(index + 1)} />
                )
            })}
            </div>
        </div>
    )
}

export default ImageGallery;