import React, { useState } from "react";
import {
  ContainerPlay,
  DivAddVideo,
  DivBox,
  DivDetails,
  DivExtra,
  DivInfo,
  DivPlay,
} from "./styles";
import { BsCaretRight, BsFileEarmarkPlay } from "react-icons/bs";
// import { Container } from './styles';
const details = [
  {
    time: "07:12",
    text: "useState",
  },
  {
    time: "12:13",
    text: "useEffect",
  },
];

const ShowPlay = () => {
  const [showTime, setShowTime] = useState(details);

  const handleAddVidep = () => {
    return alert("Vai Brazel!!");
  };
  const onUp = () => {
    return alert("Vai Brazel!!!");
  };

  return (
    <ContainerPlay>
      <DivPlay>
        <BsCaretRight onClick={onUp} />
      </DivPlay>
      <DivBox>
        <DivExtra>
          <p>Extra</p>
        </DivExtra>
        <DivInfo>
          <DivDetails>
            {showTime.map((time) => (
              <div>
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
