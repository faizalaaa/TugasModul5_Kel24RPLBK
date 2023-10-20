import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { PokemonProvider } from "./component/pokemon";
import Page1 from "./component/page1";
import Page2 from "./component/page2";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <h1 className="text-white">TUGAS MODUL 5 | KEL.24</h1>
      <div className="d-flex justify-content-center mt-2">
        <PokemonProvider>
          <Routes>
            <Route path="/" exact element={<Page1 />}></Route>
            <Route path="/page-2" exact element={<Page2 />}></Route>
          </Routes>
        </PokemonProvider>
      </div>
      <nav className="nav justify-content-center">
        <Link className="text-center nav-link h6" to="/">
          Halaman 1
        </Link>
        <Link className="text-center nav-link h6" to="/page-2">
          Halaman 2
        </Link>
      </nav>
    </Router>
  );
};

export default App;
