import React, { useEffect, useState } from "react";

import "./styles.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";

// - Import des components :
import NavBar from "./Components/NavBar/NavBar";
import Preloader from "./Components/Preloader/Preloader";
import Footer from "./Components/Footer/Footer";

// - Import des pages :
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import Projet from "./Pages/Projet/Projet";
import NoMatch from "./Pages/NoMatch/NoMatch";

const axios = require("axios");

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(false);

  const fetchData = async () => {
    setTimeout(() => {
      try {
        axios.get("http://localhost:3001");
        setData(true);
      } catch (e) {
        alert("error");
      }
      setIsLoading(true);
    }, 2000);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {!isLoading ? (
        <Preloader />
      ) : (
        <div className="App">
          <Router>
            <NavBar />

            <Routes>
              <Route path="/" element={<Navigate replace to="/Home" />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Projet" element={<Projet />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>

            <Footer />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
