import React from "react";
import Searchpage from "./pages/searchpage/Searchpage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css"
import Homepage from "./pages/homepage/Homepage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import seriesDatabase from "./dataArrays/seriesDatabase";
import Project from "./components/project/Project";


const App = () => {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/RPI_2lab" element={<Homepage />}/>
                    <Route path="/series" element={<Searchpage />}/>
                    {seriesDatabase.map((figure) => (
                        <Route path={"/series" + figure.url} element={<Project info={figure} />}/>
                    ))}
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;