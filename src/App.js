import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Footer from "./components/pages/Footer";

function App() {
  return (
    <div className="web-container">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
