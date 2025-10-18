import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Navbar from "./components/navbar.tsx";
import Footer from "./components/Footer";

// Landing Page Components
import Header from "./pages/landing-page/components/Header.tsx";
import Homestay from "./pages/landing-page/components/Homestay.tsx";
import ActivityCarousel from "./pages/landing-page/components/ActivityCarousel";
import DestinationCarousel from "./pages/landing-page/components/DestinationCarousel.tsx";
import MemoryWall from "./pages/landing-page/components/MemoryWall.tsx";
// import UserReviews from "./pages/landing-page/components/UserReviews.tsx";
import HomestayProfile from "./pages/landing-page/components/HomestayProfile.tsx";
import ActivityDetails from "./pages/landing-page/components/ActivityDetails.tsx";

// Other Pages
import ContactUs from "./pages/ContactUs/ContactUs.tsx";
import AboutPage from "./pages/About.tsx";
import Vehicles from "./pages/Vehicles/Vehicles.tsx";
import Tours from './pages/tours/Tours.tsx';
import HomestayPage from "./pages/HomestayPage/HomestayPage.tsx";
// import TourDetails from './pages/tours/TourDetails.tsx';


// Policy Pages
import PrivacyPolicy from "./pages/Policies/PrivacyPolicies.tsx";
import TermsAndConditions from "./pages/Policies/TermsAndConditions.tsx";
import RefundCancellation from "./pages/Policies/RefundCancellation.tsx";
import BookingDelivery from "./pages/Policies/BookingDelivery";



const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Navbar />
      <Header />
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
        {/* Main Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tours/:id" element={<Tours />} />
        <Route path="/vehicles" element={<Vehicles />} />
        <Route path="/homestay/:id" element={<HomestayProfile />} />
        <Route path="/activity/:id" element={<ActivityDetails />} />
        <Route path="/homestays" element={<HomestayPage />} /> 
       

        {/* Policy Pages */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-cancellation" element={<RefundCancellation />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/booking-delivery" element={<BookingDelivery />} />

      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
