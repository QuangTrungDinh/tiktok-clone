import VideoItem from "./VideoItem";
import { useState } from "react";

const ListVideos = (props) => {
  const [volume, setVolume] = useState(50);

  return (
    <div class="right">
      {props.listVideos && props.listVideos.map((video) => {
        return  <VideoItem key={video.id} video={video} volume={volume} updateVolume={setVolume}/>
      })}
      {!props.listVideos && <p>No video</p>}
    </div>
  );
};

export default ListVideos;
