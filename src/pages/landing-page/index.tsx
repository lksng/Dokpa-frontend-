import ContactUs from "./pages/landing-page/components/ContactUs.tsx";
import ExploreMore from "./components/ExploreMore";
import ExplorePlaces from "./components/ExplorePlaces";
import Header from "./components/Header";
import MemoryWall from "./components/MemoryWall";
import UserReviews from "./components/UserReviews";

const LandingPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <ExploreMore />
      <ExplorePlaces />
      <MemoryWall />
      <UserReviews />
      <ContactUs />
    </div>
  );
};

export default LandingPage;