import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import RequireAuth from './components/Requireauth/RequireAuth';

const ROLES = {
  User: 'ROLE_USER',
  Trainer: 'ROLE_TRAINER',
  Admin: 'ROLE_ADMIN',
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/*Public Routes*/}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/*Private  Routes*/}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
