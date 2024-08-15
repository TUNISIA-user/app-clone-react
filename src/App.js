import React from 'react';
import { Routes, Route } from "react-router-dom";
import KeyPad from './Component/KeyPad';
import LoginPage from './Component/LoginPage';
import Phone from './Component/Phone';
import Update from './Component/Update';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<KeyPad />} />
      <Route path="/loginPage" element={<LoginPage />} />
      <Route path="/phone" element={<Phone />} />
      <Route path="/Update" element={<Update />} />
      </Routes>
  );
};

export default App;
