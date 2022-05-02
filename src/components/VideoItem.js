import VideoInfo from "./VideoInfo";
import VideoInteraction from "./VideoInteraction";
import Video from "./Video";

const VideoItem = (props) => {
  return (
    <div class="video-item">
      <img src={props.video.author.avatar} alt="avatar" />
      <div>
        <VideoInfo video={props.video}/>
        <div class="video">
          <Video video={props.video.video} volume={props.volume} updateVolume={props.updateVolume}/>
          <VideoInteraction interaction={props.video.interaction}/>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
