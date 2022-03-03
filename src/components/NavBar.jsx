import "../css/navbar.css";
import UnsplashIcon from "../icons/UnsplashIcon";

import { HiMenu } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { RiCameraLensFill } from "react-icons/ri";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="icon">
        <UnsplashIcon />
      </div>
      <div style={{ width: "18px" }}></div>
      <form action="/search" className="search-form">
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
      <div className="actionButtons">
        <button>Explore</button>
        <button>Advertise</button>
        <button>Blog</button>
      </div>
      <div className="vertical-line"></div>
      <div className="actionButtons">
        <button>Log in</button>
        <button className="submitButton">Submit a photo</button>
        <button className="menuButton">
          <HiMenu />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
