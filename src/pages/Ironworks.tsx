import {useEffect, useState} from 'react'

function Ironworks() {

    const [setIronWorkURLS, ironWorksURLS] = useState([]);

    useEffect(() => {
        const curURLS = [];
        for (let i = 1; i <= 28; i++ ) {
            curURLS.push('https://res.cloudinary.com/dztqjtask/image/upload/f_auto,q_auto/Ironworks/i');
        }
    }, [])

    return (
        <div className="ironworks">
            <h2>Custom Fabrication</h2>
        </div>
    )
}

export default Ironworks;