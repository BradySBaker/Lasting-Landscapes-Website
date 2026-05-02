function ImageSlide({imgURLS}: {imgURLS: string[]}) {
    return(
        <div className="image-slide">
            {imgURLS.map((curURL, index) => {
                console.log(curURL)
                return (
                    <img className='slide-img' src={curURL} key={index}/>
                )
            })}
        </div>
    )
}

export default ImageSlide;
