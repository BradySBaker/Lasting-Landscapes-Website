function ImageSlide({imgURLS}: {imgURLS: {icon: string, full: string}[]}) {

    const loopURLS = [...imgURLS, ...imgURLS]
    return(
        <div className="image-slide">
            <div className="track">
                 {loopURLS.map((curURL, index) => {
                    return (
                        <img className='slide-img' src={curURL.icon} key={index}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ImageSlide;
