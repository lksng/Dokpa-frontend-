import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/landing-page/Homepage";
import ContactUs from "./pages/ContactUs/ContactUs";
import AboutPage from "./pages/About";
import Vehicles from "./pages/Vehicles/Vehicles";
import HomestayProfile from "./pages/landing-page/components/HomestayProfile";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/homestay/:id" element={<HomestayProfile />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
