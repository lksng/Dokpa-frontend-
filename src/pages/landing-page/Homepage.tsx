// import DestinationCarousel from "../components/DestinationCarousel";
// import ActivityCarousel from "../components/ActivityCarousel";
// import Homestay from "../components/Homestay";
// import MemoryWall from "../components/MemoryWall";

import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import DestinationsCarousel from "./components/DestinationCarousel";
import ActivityCarousel from "./components/ActivityCarousel";
import Homestay from "./components/Homestay";
import MemoryWall from "./components/MemoryWall";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Header />
      {/* <HeroCarousel /> */}
      <DestinationsCarousel />
      <ActivityCarousel />
      <Homestay />
      <MemoryWall />
    </div>
  );
};

export default HomePage;
