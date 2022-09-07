import { useState, useEffect, ReactNode, useContext } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { ContainerLi, DivSelect, LiSelect } from "./styles";

import { UserContext } from "../../../../contexts/UserContext";
 
interface Children {
  children: ReactNode;
  url : string;
  day: string;
}

interface props {
  props: string;
  theme: {
    containerSprints: {
      font_color_primary: string;
    };
  };
}



const LiContainer = ({ children , url , day }: Children) => {
  const [showSelect, setShowSelect] = useState(false);

  const {setUrl} = useContext(UserContext)

  
  useEffect(() => {
    if (showSelect) {
      const select = document.querySelector(".selectVideo");
      select?.classList.add("video-Open");
    }
  }, [showSelect]);

  const handleShowSelect = () => {
    if (showSelect) {
      const select = document.querySelector(".selectVideo");
      select?.classList.add("select-Open");
      select?.classList.add("select-Close");

      setTimeout(() => setShowSelect(!showSelect), 600);
    } else {
      setShowSelect(!showSelect);
    }
  };
  const handleDayVerification = (day: ReactNode) => {
    return {
      color:
        day === "Extra"
          ? "#407bff"
          : `${(props: props) =>
              props.theme.containerSprints.font_color_primary}`,
    };
  };

  const handleSelectVideo = (url : string) => {
    setUrl(url)
  };
  return (
    <>
      <ContainerLi className="selectVideo">
        {showSelect ? (
          <>
            <FaChevronDown onClick={handleShowSelect} />
            <p
              style={handleDayVerification(children)}
              onClick={handleShowSelect}
            >
              {children}
            </p>
          </>
        ) : (
          <>
            <FaChevronRight onClick={handleShowSelect} />
            <p
              style={handleDayVerification(children)}
              onClick={handleShowSelect}
            >
              {children}
            </p>
          </>
        )}
      </ContainerLi>
      {showSelect && (
        <DivSelect>
          <LiSelect onClick={()=>handleSelectVideo(url)}>Demo {day}</LiSelect>
        </DivSelect>
      )}
    </>
  );
};

export default LiContainer;
