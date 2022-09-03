import React, { useState, useContext } from "react";
import { ThemeProvider } from "styled-components";
import AppRoutes from "./routes";
import Global from "./styles/global";

import { dark, light } from "./theme/theme";
import { UserContext } from "./contexts/UserContext";

const App = () => {
  const { theme } = useContext(UserContext);
  return (
    <ThemeProvider theme={theme ? dark : light}>
      <Global />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
