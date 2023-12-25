import { Route, Routes } from 'react-router-dom';

import './assets/scss/main.scss';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
