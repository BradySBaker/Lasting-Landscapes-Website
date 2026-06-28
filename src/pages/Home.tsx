import {Link} from "react-router-dom"
import ImageSlide from "../components/ImageSlide";
import {useEffect, useState} from "react";
import type { galleryDataType } from "../App";
import { ironworkFolderNames } from "../App";

function Home({galleryData}: {galleryData?: galleryDataType}) {
    const [ironWorksURLS, setIronWorkURLS] = useState<{icon: string, full: string}[]>([]);
    const [landscapingHomeURLS, setLandscapingHomeURLS] = useState<{icon: string, full: string}[]>([]);


    useEffect(() => {
        if (!galleryData) {
            return;
        }
        const curIronWorkURLS: {icon: string, full: string}[] = [];
        const curLandscapingURLS: {icon: string, full: string}[] = [];

        for (const [key, value] of Object.entries(galleryData)) {
            if (!ironworkFolderNames[key]) { //Skip any ironwork folders
                curLandscapingURLS.push(value[0]);
            }
        }

        for (let i = 1; i <= 8; i++ ) { //For ironworks since there's only one category we choose first 8
            curIronWorkURLS.push(galleryData.Ironworks[i]);
        }

        setIronWorkURLS(curIronWorkURLS);
        setLandscapingHomeURLS(curLandscapingURLS);
    }, [galleryData]);
    
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