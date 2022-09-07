import { Routes, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import DashboardSprint from '../pages/DashboardSprint';
import Login from '../pages/Login';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/dashboard/sprint' element={<DashboardSprint />} />
    </Routes>
  );
};

export default AppRoutes;
