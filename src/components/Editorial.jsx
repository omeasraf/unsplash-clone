import { useEffect, useState } from "react";
import { getRandomImage, getTopics } from "../client/unsplash";
import "../css/home.css";

import { BiSearch } from "react-icons/bi";
import { RiCameraLensFill } from "react-icons/ri";

const Editorial = () => {
  const [bannerImage, setBannerImage] = useState(null);
  const [allTopics, setAllTopics] = useState();

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
  }, []);

  if (bannerImage == null) return <></>;
  if (allTopics == null) return <></>;

  console.log(allTopics);
  return (
    <>
      <div
        className="banner"
        style={{
          backgroundImage: `url("${bannerImage.urls.full}")`,
        }}
      >
        <div className="imagecredit">
          <div className="credits">
            Photo of the Day by{" "}
            <a href={bannerImage.user.links.html}>{bannerImage.user.name}</a>
          </div>
        </div>
        <div className="center">
          <div className="contents">
            <div className="title">Unsplash</div>
            <div className="slogan">
              <p>
                The internet’s source of <a href="#">freely-usable images</a>.
              </p>
              <p>Powered by creators everywhere.</p>
            </div>
            <form action="/search" className="search-form square">
              <button>
                <BiSearch />
              </button>
              <div className="searchField">
                <input
                  type="search"
                  className="search"
                  placeholder="Search free high-resolution photos"
                />
              </div>

              <div className="searchByImage">
                <button>
                  <RiCameraLensFill />
                </button>
              </div>
            </form>
            <p className="trendingTopics">
              Trending:{" "}
              <ul>
                {allTopics.map((topic, i) => {
                  return <li>{topic.title}</li>;
                })}
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Editorial;
