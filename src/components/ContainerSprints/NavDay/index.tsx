import LiContainer from './LiContainer';
import Ul from './styles';

const NavDay = ({ props }: any) => (
  <Ul>
    {props.map((element: any) => (
      <LiContainer data={element} key={element.id}>
        {element.day}
      </LiContainer>
    ))}
  </Ul>
);

export default NavDay;
