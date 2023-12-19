import React from "react";
import Searchpage from "./pages/searchpage/Searchpage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css"
import Homepage from "./pages/homepage/Homepage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Seriespage from "./pages/seriespage/Seriespage";

function App() {
  return (
    <div className="App">
        <Seriespage />
        {/*<Router>*/}
        {/*    <Header />*/}
        {/*    <Routes>*/}
        {/*        <Route path="/" element={<Homepage />}></Route>*/}
        {/*        <Route path="/series" element={<Searchpage />}></Route>*/}
        {/*        <Route path="/" element={<Seriespage />}></Route>*/}
        {/*    </Routes>*/}
        {/*    <Footer />*/}
        {/*</Router>*/}
    </div>
  );
}

export default App;