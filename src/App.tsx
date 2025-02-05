import "./App.css";
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import Home from "./a";
import About from "./b";
import Contact from "./c";
import Services from "./d";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation(); // Get the current route

    // Only show the navbar on the home page ("/a")
    if (location.pathname !== "/") {
        return null;
    }

    return (
        <div className="bg-container ">
            <h1 className="heading mb-4">Brinda Choose your options 😭</h1>
            <div className="bg-con d-flex justify-content-center gap-3">
            <div className="icon-button" onClick={() => navigate("/a")}>
    <img src="ic1.webp" alt="Home" />
  </div>
  <div className="icon-button" onClick={() => navigate("/b")}>
    <img src="ic2.png" alt="About" />
  </div>
  <div className="icon-button" onClick={() => navigate("/c")}>
    <img src="ic3.png" alt="Services" />
  </div>
  <div className="icon-button" onClick={() => navigate("/d")}>
    <img src="ic4.webp" alt="Contact" />
  </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/a" element={<Home />} />
                <Route path="/b" element={<About />} />
                <Route path="/c" element={<Services />} />
                <Route path="/d" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default App;
