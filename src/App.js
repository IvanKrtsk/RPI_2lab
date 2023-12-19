import React from "react";
import Searchpage from "./pages/searchpage/Searchpage";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./App.css"
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
    <div className="App">
        <Header />
        <Searchpage/>
        {/*<Homepage />*/}
        <Footer />
    </div>
  );
}

export default App;