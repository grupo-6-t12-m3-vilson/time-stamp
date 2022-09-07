

import LiContainer from "./LiContainer";
import Ul from "./styles";

const NavDay = (props : any) => {



  return (
    <Ul>
      {props.props.map((element : any) => (
        <LiContainer url={element.url} day={element.day} key={element.id}>{element.day}</LiContainer>
      ))}
    </Ul>
  );
};

export default NavDay;
