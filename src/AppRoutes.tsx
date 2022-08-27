import { Routes, Route, BrowserRouter } from "react-router-dom";

import SignIn from "./pages/SignIn";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
