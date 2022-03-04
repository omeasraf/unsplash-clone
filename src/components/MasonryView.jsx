import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { IoMdDownload } from "react-icons/io";
import { AiTwotoneHeart, AiOutlinePlus } from "react-icons/ai";
const MasonryView = ({ images }) => {
  return (
    <div className="masonryview">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1600: 4, 1800: 5 }}
      >
        <Masonry gutter="20px">
          {images.map((image, i) => (
            <div className="masonryImage" key={i}>
              <div className="masonry_buttons">
                <div className="top">
                  <a className="masonry_button">
                    <AiTwotoneHeart />
                  </a>
                  <a className="masonry_button">
                    <AiOutlinePlus />
                  </a>
                </div>
                <div className="bottom">
                  <div className="profile">
                    <img src={image.user.profile_image.medium} alt="" />
                    <p>{image.user.name}</p>
                  </div>
                  <a
                    href={image.links.download + "&force=true"}
                    download
                    className="masonry_button"
                  >
                    <IoMdDownload />
                  </a>
                </div>
              </div>
              <img
                src={image.urls.regular}
                alt={image.description}
                style={{ width: "100%", display: "block" }}
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default MasonryView;
