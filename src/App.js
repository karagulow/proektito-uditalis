import { Route, Routes } from 'react-router-dom';

import './assets/scss/main.scss';
import { MainLayout } from './layouts/MainLayout';
import { PersonalAccount } from './pages/PersonalAccount';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { PasswordReset } from './pages/PasswordReset';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/password-reset" element={<PasswordReset />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<PersonalAccount />} />
      </Route>
    </Routes>
  );
}

export default App;
