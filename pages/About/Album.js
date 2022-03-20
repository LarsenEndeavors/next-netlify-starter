import Gallery from "react-grid-gallery";
import photos from "../../.next/data/photos"
import ImageGallery from 'react-image-gallery';

export const Album = () => {
    return (
        <div className={"row"}>
            <ImageGallery items={photos} />
        </div>
    )
}

export default Album;