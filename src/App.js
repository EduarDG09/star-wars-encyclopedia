import "./App.css";
import React from "react";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Footer from "./components/pages/Footer";
import { Route, Routes } from "react-router-dom";
import List from "./components/pages/List";
import Page404 from "./components/pages/Page404";

function App() {
  return (
    <div className="web-container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="list/:listItem" element={<List />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
