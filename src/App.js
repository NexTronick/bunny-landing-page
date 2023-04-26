import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Component/Navigation";
import Home from "./Component/Home";
import Gallery from "./Component/Gallery";
import About from "./Component/About";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
