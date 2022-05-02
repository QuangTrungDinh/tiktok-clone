import UploadVideoIcon from "./svgIcons/UploadVideoIcon";
import MessageIcon from "./svgIcons/MessageIcon";
import InboxIcon from "./svgIcons/InboxIcon";
import InforHover from "./InforHover";

import { useState } from "react";

const UserInfo = () => {
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);

  let timeout = null;
  const mouseOverHandler = () => {
    clearTimeout(timeout);
    setIsAvatarHovered(true);
  };
  const mouseLeaveHandler = () => {
    timeout = setTimeout(() => { setIsAvatarHovered(false) }, 500);
  };

  return (
    <div className="info">
      <UploadVideoIcon />
      <MessageIcon />
      <InboxIcon />
      <div
        className="avatar"
        onMouseOver={mouseOverHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <img src="/assets/avatar.png" alt="avatar" />
        { isAvatarHovered && <InforHover /> }
      </div>
    </div>
  );
};

export default UserInfo;
