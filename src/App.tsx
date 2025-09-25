import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/navbar.tsx";
import Footer from "./components/Footer";

// Landing Page Components
import Header from "./pages/landing-page/components/Header.tsx";
import Homestay from "./pages/landing-page/components/Homestay.tsx";
import ActivityCarousel from "./pages/landing-page/components/ActivityCarousel";
import TopDestinationCarousel from "./pages/landing-page/components/TopdestinationCarousel";
import DestinationCarousel from "./pages/landing-page/components/DestinationCarousel.tsx";
import MemoryWall from "./pages/landing-page/components/MemoryWall.tsx";
// import UserReviews from "./pages/landing-page/components/UserReviews.tsx";
import HomestayProfile from "./pages/landing-page/components/HomestayProfile.tsx";

// Other Pages
import ContactUs from "./pages/ContactUs/ContactUs.tsx";
import AboutPage from "./pages/About.tsx";
import Vehicles from "./pages/Vehicles/Vehicles.tsx";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar />
      <Header />
      {/* <TopDestinationCarousel /> */}
      <DestinationCarousel />
      <ActivityCarousel />
      <Homestay />
      {/* <UserReviews /> */}
      <MemoryWall />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
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
