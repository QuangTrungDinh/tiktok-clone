import TikTokLogo from "./svgIcons/TikTokLogo";
import SearchBar from './SearchBar';
import UserInfo from "./UserInfo";

import "./index.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="header">
        <TikTokLogo />
        <SearchBar />
        <UserInfo />
      </div>
    </div>
  );
};

export default NavBar;
