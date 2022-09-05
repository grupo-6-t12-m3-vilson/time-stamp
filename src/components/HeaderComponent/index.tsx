import { IHeaderComponentProps } from "./interface";
import { HeaderContainer } from "./styles";

function HeaderComponent({ children }: IHeaderComponentProps) {
  return <HeaderContainer>{children}</HeaderContainer>;
}

export default HeaderComponent;
