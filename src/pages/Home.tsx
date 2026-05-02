import ImageSlide from "../components/ImageSlide";

function Home({lastingLandscapesURLS, ironWorksURLS}: {lastingLandscapesURLS: string[], ironWorksURLS: string[]}) {

    return (
        <>
            <div className="home">
                <h2 className="image-slide-title">Lasting Landscapes</h2>
                <ImageSlide imgURLS={lastingLandscapesURLS}/>

                <h2 className="image-slide-title">Iron Works</h2>
                <ImageSlide imgURLS={ironWorksURLS}/>
            </div>
        </>
    )
}

export default Home;