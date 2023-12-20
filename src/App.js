import React from "react";
import Searchpage from "./pages/searchpage/Searchpage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css"
import Homepage from "./pages/homepage/Homepage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

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