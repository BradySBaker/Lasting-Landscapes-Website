import type { galleryDataType } from "../App";
import ImageGallery from "../components/ImageGallery";

function Ironworks({galleryData}: {galleryData?: galleryDataType}) {
    return(
        <div className="ironworks">
            <h2>Custom Fabrication</h2>
            {galleryData?.Ironworks && <ImageGallery singleGallery={{folder: 'Ironworks', URLS: galleryData.Ironworks}}/>}
        </div>
    )
}

export default Ironworks;