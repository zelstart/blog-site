import React from 'react';
import { useState } from 'react'
import './App.css'

import Header from './components/Header/Header.jsx'
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx'

function App() {
  
  return (
      <>
        <Header/>
        <Outlet />
        <Footer />
      </>

  );
}


export default App
