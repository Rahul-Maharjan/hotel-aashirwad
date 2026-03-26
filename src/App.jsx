import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SingleRoom from "./pages/Accommodatin/SingleRoom";
import Experiences from "./pages/Experiences";
import ExperienceDetail from "./pages/ExperienceDetail";
import Activities from "./pages/Activities";
import ActivityDetail from "./pages/ActivityDetail";
import BlogListing from "./pages/BlogListing";
import BlogDetail from "./pages/BlogDetail";
import ScrollToTop from "./components/ScrollToTop";
import { Toaster } from "react-hot-toast";
import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Toaster position="top-right" reverseOrder={false} />
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/rooms/:slug" element={<SingleRoom />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/experiences/:slug" element={<ExperienceDetail />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/activities/:slug" element={<ActivityDetail />} />
            <Route path="/blog" element={<BlogListing />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
