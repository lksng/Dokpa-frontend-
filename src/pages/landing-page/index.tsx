import ContactUs from "../ContactUs/ContactUs";
import Header from "./components/Header";
import MemoryWall from "./components/MemoryWall";
import UserReviews from "./components/UserReviews";

const LandingPage = () => {
  return (
    <div className="bg-white">
      <Header />
      <MemoryWall />
      <UserReviews />
      <ContactUs />
    </div>
  );
};

export default LandingPage;