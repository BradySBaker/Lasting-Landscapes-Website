import {Link} from "react-router-dom"
import ImageSlide from "../components/ImageSlide";
import {useEffect, useState} from "react";
import {baseURL} from '../App';

function Home() {
    const [ironWorksURLS, setIronWorkURLS] = useState<string[]>([]);
    const [landscapingHomeURLS, setLandscapingHomeURLS] = useState<string[]>([]);


    useEffect(() => {
        const curIronWorkURLS: string[] = [];

        let curLandscapingURLS: string[] = [];

        for (let i = 1; i <= 8; i++ ) {
            // curURLS.push(`https://res.cloudinary.com/dztqjtask/image/upload/f_auto,q_auto/Ironworks/${i}`); //Production
            curIronWorkURLS.push(`${baseURL}IronWorks/${i}.jpg`); //DEV
        }

        setIronWorkURLS(curIronWorkURLS);
        setLandscapingHomeURLS(curLandscapingURLS);
    }, []);
    
    return (
        <>
            <div className="home">
                <Link to="/landscaping" className="image-slide-container">
                    <h2 className="image-slide-title">Lasting Landscapes</h2>
                    <ImageSlide imgURLS={landscapingHomeURLS}/>
                </Link>
                <Link to="/ironworks" className="image-slide-container">
                    <h2 className="image-slide-title">Iron Works</h2>
                    <ImageSlide imgURLS={ironWorksURLS}/>
                </Link>
            </div>
        </>
    )
}

export default Home;