import FollowingIcon from "./svgIcons/FollowingIcon";
import FollowingIconActive from "./svgIcons/FollowingIconActive";
import HomeIconActive from "./svgIcons/HomeIconActive";
import HomeIcon from "./svgIcons/HomeIcon";
import LiveIcon from "./svgIcons/LiveIcon";
import LiveIconActive from "./svgIcons/LiveIconActive";

const LeftMenuGeneral = (props) => {
  const test = () => {
    console.log("running...");
  }

  return (
    <div class="general">
      <div onClick={() => props.changeState(0)}>
        <span>
        { props.videoType === 0 &&<HomeIconActive /> }
        { props.videoType !== 0 &&<HomeIcon /> }
        </span>
        <span className={ props.videoType === 0 ? "active" : "" }>For You</span>
      </div>
      <div onClick={() => props.changeState(1)}>
        <span>
        { props.videoType === 1 &&<FollowingIconActive /> }
        { props.videoType !== 1 &&<FollowingIcon /> }
        </span>
        <span className={ props.videoType === 1 ? "active" : "" }>Following</span>
      </div>
      <div onClick={() => props.changeState(2)}>
        <span>
        { props.videoType === 2 &&<LiveIconActive /> }
        { props.videoType !== 2 &&<LiveIcon /> }
        </span>
        <span className={ props.videoType === 2 ? "active" : "" }>LIVE</span>
      </div>
    </div>
  );
};

export default LeftMenuGeneral;