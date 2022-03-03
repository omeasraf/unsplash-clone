import "../css/navbar.css";
import UnsplashIcon from "../icons/UnsplashIcon";

import { HiMenu } from "react-icons/hi";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="icon">
        <UnsplashIcon />
      </div>
      <div className="search">
        <input type="text" name="search" />
      </div>
      <div className="actionButtons">
        <button>Explore</button>
        <button>Advertise</button>
        <button>Blog</button>
      </div>
      <div className="vertical-line"></div>
      <div className="calloutButtons">
        <button>Login</button>
        <button className="submitButton">Submit a photo</button>
        <button className="menuButton">
          <HiMenu />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
