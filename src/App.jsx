import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SuiteRoom from "./pages/Accommodatin/SuiteRoom";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/rooms/suite" element={<SuiteRoom />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
