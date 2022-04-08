import React from 'react';
import logo from './logo.svg';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Home from './routes/Home/Home';
import Test from './routes/Test'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate replace to="/home"/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/test" element={<Test/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
