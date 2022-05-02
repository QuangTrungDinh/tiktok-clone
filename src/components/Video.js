import PlayIcon from "./svgIcons/PlayIcon";
import PauseIcon from "./svgIcons/PauseIcon";
import VolumeIcon from "./svgIcons/VolumeIcon";
import MuteIcon from "./svgIcons/MuteIcon";
import { useState, useRef, useEffect } from "react";

const Video = (props) => {
  const [playPause, setPlayPause] = useState(true);
  const [muted, setMuted] = useState(false);
  const [videoHover, setVideoHover] = useState(false);
  const [preVolume, setPreVolume] = useState(0);
  const videoRef = useRef(null);
  const volumeRef = useRef(null);

  const clickHander = () => {
    // mute = false;
    // console.log(mute);
    setPlayPause((preState) => !preState);
    // if (videoRef.current.paused) {
    //   videoRef.current.play();
    //   videoRef.current.volume = 0.5;
    // }
    // else videoRef.current.pause();
  };

  // useEffect(() => {
  //   if (videoRef.current.paused) {
  //     setTimeout(() => videoRef.current.play(), 1000);
  //   }
  // }, []);

  useEffect(() => {
    let observer = new IntersectionObserver(onIntersection, {
      root: null, // default is the viewport
      threshold: 0.5, // percentage of taregt's visible area. Triggers "onIntersection"
    });
    
    let timeout = null;
    function onIntersection(entries, opts) {
      // console.log(entries);
      const entry = entries[0];
      if(entry.isIntersecting) {
        timeout = setTimeout(
          () =>
            {
              if(entry.target.paused) {
                entry.target.play();
                setPlayPause(true);
              }
            },
          500
        );
      } else {
        clearTimeout(timeout);
        if(!entry.target.paused) {
          entry.target.pause();
          setPlayPause(false);
        }
      }
    }
    
    observer.observe(videoRef.current);
  }, []);

  useEffect(() => {
    if (playPause) {
      videoRef.current.play();
    }
    else videoRef.current.pause();
  }, [playPause])

  useEffect(() => {
    videoRef.current.volume = props.volume/100;
    if(volumeRef.current) {
      volumeRef.current.style.backgroundSize = (props.volume) + "% 100% ";
    }
    
  }, [props.volume]);

  // const testClickHandler = () => {
  //   playRef.current.click();
  // }

  const mouseOverHandler = () => {
    setVideoHover(true);
  }

  const onMouseLeaveHandler = () => {
    setVideoHover(false);
  }

  const mutedClickHandler = () => {
    setMuted(preState => !preState);
    if(props.volume > 0) {
      props.updateVolume(0);
      setPreVolume(props.volume);
    } else {
      props.updateVolume(preVolume);
    }
  }

  const volumeChangeHandler = (event) => {
    props.updateVolume(event.target.value);
  }

  return (
    <div onMouseOver={mouseOverHandler} onMouseLeave={onMouseLeaveHandler}>
      {videoHover && <div className="cover">
        <span onClick={clickHander}>
          {playPause && <PlayIcon />}
          {!playPause && <PauseIcon />}
        </span>
        <span>
          <span onClick={mutedClickHandler}>
          {!muted && <VolumeIcon />}
          {muted && <MuteIcon />}</span>
          <div class="volume">
            <input type="range" min="0" max="100" step="1" value={props.volume} ref={volumeRef} onChange={volumeChangeHandler}/>
          </div>
        </span>
      </div>}
      <video ref={videoRef} width="300" height="200" loop>
        <source src={props.video} type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
