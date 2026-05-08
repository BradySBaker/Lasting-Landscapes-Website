import {useEffect, useState} from 'react'
import { baseURL } from '../App';
import LazyImage from '../components/LazyImage';

function Ironworks() {

    const [ironWorkURLS, setIronWorkURLS] = useState<string[]>([]);
    const [selectedImgURL, setSelectedImgURL] = useState('');

    const imageClick = (imgNum: number) => {
        // setSelectedImgURL(`https://res.cloudinary.com/dztqjtask/image/upload/f_auto,q_auto/Ironworks/${imgNum}`); //Production
         setSelectedImgURL(`${baseURL}IronWorks/${imgNum}.jpg`) //Dev
    }

    const imageClose = () => {
        setSelectedImgURL('');
    }

    useEffect(() => {
        const curURLS: string[] = [];
        for (let i = 1; i <= 28; i++ ) {
            // curURLS.push(`https://res.cloudinary.com/dztqjtask/image/upload/f_auto,q_auto,w_500/Ironworks/${i}`); //Production
            curURLS.push(`${baseURL}IronWorks/${i}.jpg`); //DEV
        }
        setIronWorkURLS(curURLS);
    }, [])

    return (
        <div className="ironworks">
            {selectedImgURL && 
                <div className='backdrop' onClick={imageClose}>
                    <img className='selected-image' src={selectedImgURL}/>
                </div>
            }
            
            <h2>Custom Fabrication</h2>
            <div className='ironworks-img-container'>
            {ironWorkURLS.map((curURL, index) => {
                return (
                    <LazyImage key={curURL} src={curURL} onClick={() => imageClick(index + 1)} />
                )
            })}
            </div>
        </div>
    )
}

export default Ironworks;