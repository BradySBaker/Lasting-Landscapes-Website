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
                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/__RqreA33rg?si=xuuS8dW9Heu1m3vD"
                        title="Landscape Project"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </div>
    )
}

export default VideoGallery;
