import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SingleRoom from "./pages/Accommodatin/SingleRoom";
import BlogListing from "./pages/BlogListing";
import BlogDetail from "./pages/BlogDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/rooms/:slug" element={<SingleRoom />} />
          <Route path="/blog" element={<BlogListing />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
