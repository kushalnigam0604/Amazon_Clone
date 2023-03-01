import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="app">
    <Router>
        <Routes>
        <Route path="/login" element={<Login/> }/>
          <Route path="/" element={<><Header/><Home /></>} />
          <Route path="/checkout" element={<><Header/><Checkout/></>} />
        </Routes>
    </Router>
      </div>
  );
}

export default App
