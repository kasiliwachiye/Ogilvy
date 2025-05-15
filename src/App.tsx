import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import Home from "./pages/Home";
import SustainableLiving from "./pages/SustainableLiving";
import Contact from "./pages/Contact";
import OurStory from "./pages/OurStory";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sustainable-living" element={<SustainableLiving />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

