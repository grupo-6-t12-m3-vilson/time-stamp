import { ThemeProvider } from "styled-components";
import AppRoutes from "./routes";
import Global from "./styles/global";

import { theme, dark, light } from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={light}>
      <Global />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
