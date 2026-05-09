import {Link} from "react-router-dom"
import ImageSlide from "../components/ImageSlide";
import {useEffect, useState} from "react";
// import {baseURL} from '../App';
import type { landscapingCategory } from "../App";

function Home({landscapingCategories}: {landscapingCategories: landscapingCategory[]}) {
    const [ironWorksURLS, setIronWorkURLS] = useState<string[]>([]);
    const [landscapingHomeURLS, setLandscapingHomeURLS] = useState<string[]>([]);


    useEffect(() => {
        const curIronWorkURLS: string[] = [];

        let curLandscapingURLS: string[] = [];

        for (let i = 1; i <= 8; i++ ) {
            curIronWorkURLS.push(`https://res.cloudinary.com/dztqjtask/image/upload/f_auto,q_auto,w_400/Ironworks/${i}`); //Production
            // curIronWorkURLS.push(`${baseURL}ironworks/${i}.jpg`); //DEV
        }
        landscapingCategories.forEach((curCat) => {
            curLandscapingURLS.push(curCat.urls[0]);
        });
        console.log(curLandscapingURLS);

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