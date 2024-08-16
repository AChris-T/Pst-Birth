import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import image1 from "../assets/b1.jpg"
import image2 from "../assets/b2.jpg"
import image3 from "../assets/b4.jpg"
import image4 from "../assets/bb1.jpg"

const images = [
    image1,
    image2,
    image3,
    image4
]
const ImageView = () => {
  return (
    <div className="md:mx-8 lg:mx-20 mb-14">
      <ResponsiveMasonry
                columnsCountBreakPoints={{350: 2, 750: 2, 900: 3}}
            >
                <Masonry  gutter="10px">
                    {images.map((image, i) => (
                        <img
                            key={i}
                            src={image}
                            style={{width: "100%", display: "block", objectFit:"cover"}}
                            alt=""
                        />
                    ))}
                </Masonry>
            </ResponsiveMasonry>
    </div>
  )
}

export default ImageView
