import { Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./a";
import About from "./b";
import Contact from "./c";
import Services from "./d";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
        </Routes>
    );
}

export default AppRoutes;
