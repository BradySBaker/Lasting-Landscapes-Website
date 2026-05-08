import {Link} from "react-router-dom"
import ImageSlide from "../components/ImageSlide";

function Home({landscapingHomeURLS, ironWorksHomeURLS}: {landscapingHomeURLS: string[], ironWorksHomeURLS: string[]}) {
    
    return (
        <>
            <div className="home">
                <Link to="/landscaping" className="image-slide-container">
                    <h2 className="image-slide-title">Lasting Landscapes</h2>
                    <ImageSlide imgURLS={landscapingHomeURLS}/>
                </Link>
                <Link to="/ironworks" className="image-slide-container">
                        <h2 className="image-slide-title">Iron Works</h2>
                        <ImageSlide imgURLS={ironWorksHomeURLS}/>
                </Link>
            </div>
        </>
    )
}

export default Home;