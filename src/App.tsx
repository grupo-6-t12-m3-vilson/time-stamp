import React, { useCallback, useState } from "react";
import { ThemeProvider } from "styled-components";
import AppRoutes from "./routes";
import Global from "./styles/global";

import { theme, dark, light } from "./theme/theme";

const App = () => {
  return (
    <ThemeProvider theme={dark}>
      <Global />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
