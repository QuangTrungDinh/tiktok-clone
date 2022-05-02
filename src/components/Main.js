import LeftMenu from "./LeftMenu";
import ListVideos from "./ListVideos";
import { suggestedVideos, followingVideos } from "../data/ListVideos"

import { useState, useEffect } from "react";

const Main = () => {
  const [videoType, setVideoType] = useState(0);
  const [listVideos, setListVideos] = useState(suggestedVideos);

  const changeState = (val) => {
    setVideoType(val);
  }

  useEffect(() => {
    if(videoType === 0) {
      setListVideos(suggestedVideos);
    } else if(videoType === 1) {
      setListVideos(followingVideos);
    } else {
      setListVideos(null);
    }
  }, [videoType])

  return (
    <div class="main">
      <LeftMenu videoType={videoType} changeState={changeState} />
      <ListVideos listVideos={listVideos}/>
    </div>
  );
};

export default Main;
