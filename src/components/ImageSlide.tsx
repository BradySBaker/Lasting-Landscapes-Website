function ImageSlide({imgURLS}: {imgURLS: string[]}) {
    const imgWidth = 400;
    const margin = 10;
    const width = imgURLS.length * (imgWidth + margin);

    const loopURLS = [...imgURLS, ...imgURLS]
    return(
        <div className="image-slide">
            <div className="track" style={{"--scroll-width": `-${width}px`} as React.CSSProperties}>
                 {loopURLS.map((curURL, index) => {
                    console.log(curURL)
                    return (
                        <img className='slide-img' src={curURL} key={index} style={{width: imgWidth, marginRight: margin}}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ImageSlide;
