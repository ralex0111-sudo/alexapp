import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Contact from "./pages/Contact";


import {
  Services,
  WebService,
  UIService,
  MarketingService
} from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/skills" element={<Skills />} />

        <Route path="/projects" element={<Projects />} />

        <Route
          path="/projects/:id"
          element={<ProjectDetails />}
        />

        <Route path="/contact" element={<Contact />} />

        <Route path="/services" element={<Services />} />

        <Route
          path="/services/web"
          element={<WebService />}
        />

        <Route
          path="/services/ui"
          element={<UIService />}
        />

        <Route
          path="/services/marketing"
          element={<MarketingService />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;