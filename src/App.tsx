import React from "react";
import { ThemeProvider } from "styled-components";

import { theme, dark, light } from "./theme/theme";

import AppRoutes from "./AppRoutes";

function App() {
  return (
    <ThemeProvider theme={dark}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
