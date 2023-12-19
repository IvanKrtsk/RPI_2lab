import Searchpage from "./pages/searchpage/Searchpage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css"
import Homepage from "./pages/homepage/Homepage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { useTranslation } from 'react-i18next';
import React, { useState, createContext, useContext } from 'react';

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route path="/series" element={<Searchpage />}></Route>
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;