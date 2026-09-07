function VideoGallery() {
    const videoUrls: string[] = ['https://www.youtube.com/embed/__RqreA33rg?si=xuuS8dW9Heu1m3vD'];

    return (
        <div className="gallery">
            <div className='gallery-img-container'>
                {videoUrls.map((url, key) => {
                    return (
                        <div className="video-container" key={key}>
                            <iframe
                                src={url}
                                title="Landscape Project"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default VideoGallery;
