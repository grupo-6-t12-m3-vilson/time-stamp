import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
