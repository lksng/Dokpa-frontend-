import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./Navbar";
import ActivityCarousel from "./pages/landing-page/components/ActivityCarousel";
import Header from "./pages/landing-page/components/Header.tsx";
import Homestay from "./pages/landing-page/components/Homestay.tsx";
import TopDestinationCarousel from "./pages/landing-page/components/TopdestinationCarousel";
import ContactUs from "/Users/lobsangkesang/Documents/Mon-Voyage-Frontend/src/pages/ContactUs/ContactUs.tsx"; // <-- import your ContactUs component
// import UserReviews from "./pages/landing-page/components/UserReviews.tsx";
import MemoryWall from "./pages/landing-page/components/MemoryWall.tsx";
import Footer from "./components/Footer";
import AboutPage from "./pages/About.tsx";
import Navbar from "./components/navbar.tsx";
import DestinationCarousel from "./pages/landing-page/components/DestinationCarousel.tsx";
import Vehicles from "./pages/Vehicles/Vehicles.tsx";




const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar />
      <Header />
      <TopDestinationCarousel />
      <DestinationCarousel/>
      <ActivityCarousel />
      <Homestay />
      {/* <UserReviews/> */}
      <MemoryWall/>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
         <Route path="/about" element={<AboutPage/>} />
           <Route path="/vehicles" element={<Vehicles/>} />
      </Routes>
      <div>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
