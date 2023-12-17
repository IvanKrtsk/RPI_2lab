import React from "react";
import "./pages/homepage/homepage.css"
import Header from "./components/header/Header.js"
import Footer from "./components/footer/Footer";
import Homepage from "./pages/homepage/Homepage";

function App() {
  return (
      <div className="App">
          <Header />
          <Homepage />
          <Footer />
      </div>
  );
}

export default App;