import React from 'react';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Landing from './pages/Landing';
import Layout from './components/Layout';


function App() {
  return (
    <>
  
      <Routes>
        <Route element={<Layout />} />
        <Route path='/' element= {<Landing />} />
      </Routes>

      </>
  );
}

export default App;
