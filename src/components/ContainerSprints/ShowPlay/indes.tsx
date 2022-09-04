import React, { useRef, useState } from "react";
import {
  ContainerPlay,
  DivAddVideo,
  DivBox,
  DivDetails,
  DivExtra,
  DivInfo,
  DivPlay,
} from "./styles";
import { BsFileEarmarkPlay } from "react-icons/bs";
// import { Container } from './styles';
const details = [
  {
    time: 500,
    text: "useState",
  },
  {
    time: 600,
    text: "useEffect",
  },
];



const ShowPlay = () => {
  const [showTime, setShowTime] = useState(details);
  const videoRef = useRef<HTMLVideoElement>(null)
  const jumpShowTime = (time_video: number) => { if(videoRef !== null && videoRef.current) {videoRef.current.currentTime = time_video;}}

  const secondsToHms = (d: number) => {
    d = Number(d);
    let h = Math.floor(d / 3600);
    let m = Math.floor((d % 3600) / 60);
    let s = Math.floor((d % 3600) % 60);

    let hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
    let mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
    let sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";

    const timeVideo = hDisplay + mDisplay + sDisplay;

  } 

  const handleAddVidep = () => {
    return alert("Vai Brazel!!");
  };
  
  const onUp = () => {
    return alert("Vai Brazel!!!");
  };
  
  return (
    <ContainerPlay>
      <DivPlay>
        <video src="https://demos-kenzie-academy-brasil.s3.amazonaws.com/mar22/m3/Sprint_6/parte_final.mp4" controls ref={videoRef}/>   
        
        {/* <BsCaretRight onClick={onUp} /> */}
      </DivPlay>
      <DivBox>
        <DivExtra>
          <p>Extra</p>
        </DivExtra>
        <DivInfo>
          <DivDetails>
            {showTime.map((time) => (
              <div onClick={() => jumpShowTime(time.time)}>                
                <p>{time.time}</p>
                <span>{time.text}</span>
              </div>
            ))}
          </DivDetails>
          <DivAddVideo>
            <button onClick={handleAddVidep}>
              <BsFileEarmarkPlay />
            </button>
          </DivAddVideo>
        </DivInfo>
      </DivBox>
    </ContainerPlay>
  );
};

export default ShowPlay;
