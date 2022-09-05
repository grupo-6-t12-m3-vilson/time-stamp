import { useState, useEffect, ReactNode } from "react";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { ContainerLi, DivSelect, LiSelect } from "./styles";

interface Children {
  children: ReactNode;
}
const LiContainer = ({ children }: Children) => {
  const [showSelect, setShowSelect] = useState(false);

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
    return { color: day === "Extra" ? "#407bff" : "#232a43" };
  };

  const handleSelectVideo = () => {
    alert("funcionando");
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
          <LiSelect onClick={handleSelectVideo}>Tipando Funções</LiSelect>
          <LiSelect onClick={handleSelectVideo}>Tipando Funções</LiSelect>
        </DivSelect>
      )}
    </>
  );
};

export default LiContainer;
