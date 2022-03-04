import { useEffect, useState } from "react";
import { getPhotos, getRandomImage, getTopics } from "../client/unsplash";
import "../css/home.css";

import { BannerImage } from "./BannerImage";
import MasonryView from "./MasonryView";

const Editorial = () => {
  const [bannerImage, setBannerImage] = useState(null);
  const [allTopics, setAllTopics] = useState([]);
  const [allImages, setAllImages] = useState([]);

  useEffect(() => {
    getRandomImage(1, "landscape")
      .then((data) => {
        setBannerImage(data.data);
      })
      .catch((e) => {
        console.log(e);
      });

    getTopics(5, "popular")
      .then((data) => {
        setAllTopics(data.data);
      })
      .catch((error) => {
        console.log(error);
      });

    getPhotos(30, 1)
      .then((data) => {
        setAllImages(data.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  if (bannerImage == null) return <></>;

  return (
    <>
      <BannerImage randomImage={bannerImage} allTopics={allTopics} />
      <MasonryView images={allImages} />
    </>
  );
};

export default Editorial;
