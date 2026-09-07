import {useState} from 'react'

function VideoGallery() {
    const [selectedVidURL, setSelectedVidURL] = useState('');

    return (
        <div className="gallery">
            {selectedVidURL && 
                <div className='backdrop' onClick={() => setSelectedVidURL('')}>
                    <img className='selected-image' src={selectedVidURL}/>
                </div>
            }
            
            <div className='gallery-img-container'>
            </div>
        </div>
    )
}

export default VideoGallery;