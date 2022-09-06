import "styled-components";

import theme from "../theme/theme";

import { ITheme } from "../theme/interface";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
