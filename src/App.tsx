import React, { useCallback, useState } from "react";
import { ThemeProvider } from "styled-components";
import AppRoutes from "./routes";
import Global from "./styles/global";

import { theme, dark, light } from "./theme/theme";

const App = () => {
  /*   const [currentTheme, setCurrentTheme] = useState("light");

  const getOpositeTheme = useCallback(
    () => (currentTheme === "light" ? "dark" : "light"),
    [currentTheme]
  ); */

  return (
    <ThemeProvider theme={dark}>
      <Global />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
