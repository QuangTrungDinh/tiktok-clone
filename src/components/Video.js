import PlayIcon from "./svgIcons/PlayIcon";
import PauseIcon from "./svgIcons/PauseIcon";
import VolumeIcon from "./svgIcons/VolumeIcon";
import MuteIcon from "./svgIcons/MuteIcon";
import { useState, useRef, useEffect } from "react";

const Video = (props) => {
  const [playPause, setPlayPause] = useState(true);
  // const [muted, setMuted] = useState(false);
  const [videoHover, setVideoHover] = useState(false);
  const [preVolume, setPreVolume] = useState(0);
  const videoRef = useRef(null);
  // const volumeRef = useRef(null);

  let volume = props.volume;

  const backgroundSize = (volume) + "% 100% "; //dòng này liên quan đến giao diện nên luôn được thực hiện, khai báo kiểu này cũng giống như
  // chúng ta đang gán trực tiếp giá trị (volume) + "% 100%") vào thẻ input, đều được tính lại cho mỗi lần re-render.

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

    return () => {
      
    }
  }, []);

  useEffect(() => {
    if (playPause) {
      videoRef.current.play();
    }
    else videoRef.current.pause();
  }, [playPause])

  useEffect(() => {
    videoRef.current.volume = volume/100;
  }, [volume]); //props.volume chỉ là giá trị riêng của component instance này, không phải của các instance khác

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
    // setMuted(preState => !preState); //update state bằng not preState khi click rất nguy hiểm ,dễ gây sai
    if(volume > 0) {
      props.updateVolume(0);
      setPreVolume(volume);
    } else {
      props.updateVolume(preVolume);
    }
  }

  // let timeout = null;
  const volumeChangeHandler = (event) => {
    // let value = +event.target.value; //=> Cần phải có dòng này để lưu value lại vì input đang là controlled component, khi chạy hết 
    //callback này giá trị value của event sẽ trở về giá trị trong prop value. Nếu chúng ta không update giá trị prop value thì giá trị
    //ô input sẽ không thay đổi và chúng ta không thể thấy sự thay đổi của ô input.
    // clearTimeout(timeout);
    // timeout = setTimeout(() => { //Dùng để việc update state không xảy ra liên tục
    //   props.updateVolume(value); // Giá trị volume là giá trị của ô input và có kiểu string
    //   // if(event.target.value === "0") setPreVolume(50);
    //   // setMuted(event.target.value === 0 ? true : false);
    // }, 500); // => Đây là cách giúp không setState liên tục nhưng sẽ làm thanh volume bị khựng.
    props.updateVolume(+event.target.value); // Giá trị volume là giá trị của ô input và có kiểu string
    if(event.target.value === "0") setPreVolume(50);
    // console.log(typeof volume);
    // setMuted(event.target.value === 0 ? true : false);
  }

  return (
    <div onMouseOver={mouseOverHandler} onMouseLeave={onMouseLeaveHandler}>
    {/* <input type="text" value="text" onChange={(event) => {console.log(event.target.value)}}/> */}
      {videoHover && <div className="cover">
        <span onClick={clickHander}>
          {playPause && <PlayIcon />}
          {!playPause && <PauseIcon />}
        </span>
        <span>
          <span onClick={mutedClickHandler}>
            {volume.toString() !== "0" && <VolumeIcon />}
            {volume.toString() === "0" && <MuteIcon />}
          </span>
          <div class="volume">
            <input type="range" min="0" max="100" step="1" value={volume} style={{backgroundSize: backgroundSize}} onChange={volumeChangeHandler}/>
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
