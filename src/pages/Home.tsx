import {Link} from "react-router-dom"
import ImageSlide from "../components/ImageSlide";
import {useEffect, useState} from "react";
import {baseURL} from '../App';

export const landscapingCategories = [
    {name: 'Patios & Outdoor Living', dir: 'Patios_Outdoor_Living'},
    {name: 'Planting & Softscapes', dir: 'Planting_Softscapes'},
    {name: 'Stonework & Grading', dir: 'Stonework_Grading'},
    {name: 'Walkways & Pathways', dir: 'Walkways_Pathways'},
    {name: 'Water Features & Ponds', dir: 'Water_Features_Ponds'},
    {name: 'Speciality Projects', dir: 'Speciality_Projects'}
];

function Home() {
    const [ironWorksURLS, setIronWorkURLS] = useState<string[]>([]);
    const [landscapingURLS, setLandscapingURLS] = useState<string[]>([]);

    useEffect(() => {
        const curIronWorkURLS: string[] = [];
        const curLandscapingURLS: string[] = [];
        for (let i = 1; i <= 8; i++ ) {
            // curURLS.push(`https://res.cloudinary.com/dztqjtask/image/upload/f_auto,q_auto/Ironworks/${i}`); //Production
            curIronWorkURLS.push(`${baseURL}IronWorks/${i}.jpg`); //DEV
        }
        setIronWorkURLS(curIronWorkURLS);
        landscapingCategories.forEach((cur) => {
            // curURLS.push(`https://res.cloudinary.com/dztqjtask/image/upload/f_auto,q_auto,w_400/${cur.dir}/1`); //Production
            curLandscapingURLS.push(`${baseURL}landscaping/${cur.dir}/1.avif`);
        })
        setLandscapingURLS(curLandscapingURLS);
    }, []);
    console.log(ironWorksURLS);
    console.log("baseURL:", baseURL);
    return (
        <>
            <div className="home">
                <Link to="/landscaping" className="image-slide-container">
                    <h2 className="image-slide-title">Lasting Landscapes</h2>
                    <ImageSlide imgURLS={landscapingURLS}/>
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