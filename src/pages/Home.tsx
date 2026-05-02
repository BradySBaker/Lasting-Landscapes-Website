import ImageSlide from "../components/ImageSlide";

function Home({imgURLS}: {imgURLS: string[]}) {

    return (
        <>
            <div className="home">
                test
                <ImageSlide imgURLS={imgURLS}/>
            </div>
        </>
    )
}

export default Home;