import React from 'react';
import { Routes, Route, Link } from "react-router";
import About from "./MyComponents/About";
import Home from "./MyComponents/Home";
import Header from "./MyComponents/Header";
import Page404 from './MyComponents/Page404';
import Setting from './MyComponents/setting';
import UserDetails from "./MyComponents/UserDetails";
import "./App.css";

function App() {
  const isAdmin = false;
  const isAuthenticated = true;

  return (
    <>
      <Header />

      <Routes>
      
          
       <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/*" element={<Page404 />} />
        <Route path="/setting" element={<Setting isAdmin={isAdmin} />} />
        <Route path='/details' element={< UserDetails />} />
      </Routes>


    </>
  );
}
export default App;