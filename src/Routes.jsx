import React from 'react';
import { Routes as AppRoutes, Route } from 'react-router-dom';
import SignIn from './Pages/Auth/SignIn';
import SignUp from './Pages/Auth/SignUp';
import UserDashboard from './Pages/User/UserDashboard';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import CardDetail from './components/CardDetail';

const Routes = () => {
  return (
    <AppRoutes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/user/dashboard" element={<UserDashboard />} />
      <Route path="/user/dashboard/card/:id" element={<CardDetail />} />
    </AppRoutes>
  );
};

export default Routes;