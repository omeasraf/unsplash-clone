import { BiSearch } from "react-icons/bi";
import { RiCameraLensFill } from "react-icons/ri";

export var BannerImage = ({ randomImage, allTopics }) => {
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url("${randomImage.urls.full}")`,
      }}
    >
      <div className="imagecredit">
        <div className="credits">
          Photo of the Day by{" "}
          <a href={randomImage.user.links.html}>{randomImage.user.name}</a>
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
          <span className="trendingTopics">
            Trending:
            <ul>
              {allTopics.map((topic, i) => {
                return <li key={i}>{topic.title}</li>;
              })}
            </ul>
          </span>
        </div>
      </div>
    </div>
  );
};
