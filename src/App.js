import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Login from './pages/Login';
import Register from './pages/Register';
import RequireAuth from './components/Requireauth/RequireAuth';
import Unauthorized from './pages/Unauthorized';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import TableContent from './components/Table/TableContent';
import UserContent from './components/Users/UserContent';
import UserForm from './components/UserForm/UserForm';
import SingleUser from './components/User/SingleUser';

//import DashboardUser from '../src/components/DashboardUser/DashboadUser'
//import DashboardContent from './pages/DashboardContent';

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
        <Route path="unauthorized" element={<Unauthorized />} />

        {/*Private  Routes*/}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />}>
            <Route path="program" element={<TableContent />} />
            <Route path="users" element={<UserContent />} />
            <Route path="users/:id" element={<SingleUser />} />
            <Route path="newuser" element={<UserForm />} />
            
          </Route>
        </Route>
        {/*404*/}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
