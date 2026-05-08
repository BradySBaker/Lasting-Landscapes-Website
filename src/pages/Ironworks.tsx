import {useEffect, useState} from 'react'
import { baseURL } from '../App';

function Ironworks() {

    const [ironWorkURLS, setIronWorkURLS] = useState<string[]>([]);
    const [selectedImgURL, setSelectedImgURL] = useState('');

    const imageClick = (e: React.MouseEvent<HTMLImageElement>) => {
        const src = e.currentTarget.src;
        setSelectedImgURL(src);
    }

    const imageClose = () => {
        setSelectedImgURL('');
    }

    useEffect(() => {
        const curURLS: string[] = [];
        for (let i = 1; i <= 28; i++ ) {
            // curURLS.push(`https://res.cloudinary.com/dztqjtask/image/upload/f_auto,q_auto/Ironworks/${i}`); //Production
            curURLS.push(`${baseURL}IronWorks/${i}.jpg`); //DEV
        }
        setIronWorkURLS(curURLS);
    }, [])

    return (
        <div className="ironworks">
            {selectedImgURL && 
                <div className='backdrop' onClick={imageClick}>
                    <img className='selected-image' src={selectedImgURL}/>
                </div>
            }
            
            <h2>Custom Fabrication</h2>
            <div className='ironworks-img-container'>
            {ironWorkURLS.map((curURL) => {
                return (
                    <img className='ironworks-img' src={curURL} onClick={imageClick} loading="lazy"/>
                )
            })}
            </div>
        </div>
    )
}

export default Ironworks;