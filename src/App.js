import React from 'react';
import { Routes, Route } from "react-router-dom";
import KeyPad from './Component/KeyPad';
import LoginPage from './Component/LoginPage';
import Phone from './Component/Phone';
import Update from './Component/Update';
import ShowUpdate from './Component/ShowUpdate';
import Login from './Component/Login';
import Recenet from './Component/Recenet';
const App = () => {
  return (
    <Routes> 
      <Route path='/' element={<Login/>}/>
      <Route path="/login" element={<KeyPad />} />
      <Route path="/loginPage" element={<LoginPage />} />
      <Route path="/phone" element={<Phone />} />
      <Route path="/Update" element={<Update />} />
      <Route path='/ShowUpdate' element = {<ShowUpdate/>}/>
      <Route path='/recent' element = {<Recenet/>}/>
   
      </Routes>
  );
};

export default App;
