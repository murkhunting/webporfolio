import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.scss";

import Home from "./pages/home/Home";
import Navbar from "./pages/navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
