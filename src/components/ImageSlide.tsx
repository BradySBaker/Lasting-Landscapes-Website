function ImageSlide({imgURLS}: {imgURLS: {icon: string, full: string}[] | string[]}) {

    const loopURLS = [...imgURLS, ...imgURLS]
    return(
        <div className="image-slide">
            <div className="track">
                 {loopURLS.map((curURL, index) => {
                    if (typeof curURL === "string") {
                        return <img className="slide-img" src={curURL} key={index} />;
                    } else {
                        return <img className="slide-img" src={curURL.icon} key={index} />;
                    }
                })}
            </div>
        </div>
    )
}

export default ImageSlide;
