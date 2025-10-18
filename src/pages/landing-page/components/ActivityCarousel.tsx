import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Activity {
  id: number;
  title: string;
  image: string;
  shortInfo: string;
  details: string;
}

const activities: Activity[] = [
  {
    id: 1,
    title: "Monastery Walk",
    image: "src/assets/monsatry walk.jpg",
    shortInfo: "Explore sacred monasteries.",
    details:
      "Experience the peaceful aura of ancient monasteries, interact with monks, and learn about Buddhist philosophy.",
  },
  {
    id: 2,
    title: "Mountain Trek",
    image: "src/assets/twgtreak.jpg",
    shortInfo: "Explore scenic trails.",
    details:
      "Journey through breathtaking landscapes, lush forests, and serene mountain paths, perfect for nature lovers.",
  },
  {
    id: 3,
    title: "Traditional Paper Making",
    image: "src/assets/papermaking.png",
    shortInfo: "Witness local traditions.",
    details:
      "Watch artisans craft handmade paper using ancient techniques passed down through generations.",
  },
  {
    id: 4,
    title: "Cultural Program",
    image: "src/assets/snow lion dance.jpeg",
    shortInfo: "Celebrate culture and tradition.",
    details:
      "Enjoy vibrant performances that bring local folklore and traditional costumes to life.",
  },
  {
    id: 5,
    title: "The Mago Trek",
    image: "src/assets/the mago treak .jpg",
    shortInfo: "Soar above the landscapes.",
    details:
      "Take in panoramic views from above during a peaceful sunrise hot air balloon ride.",
  },
  {
    id: 6,
    title: "Photowalk Through Village",
    image: "src/assets/village walks.webp",
    shortInfo: "Peaceful and Heart Soothing Villages.",
    details:
      "Navigate exciting Villages and Explore the Things You have never seen.",
  },
  {
    id: 7,
    title: "Local Market Tour",
    image: "src/assets/localmart.jpg",
    shortInfo: "Taste /Dress and shop Local.",
    details:
      "Explore bustling markets filled with handicrafts, spices, and delicious street local food.",
  },
];

const ActivityCarousel: React.FC = () => {
  const carouselRefDesktop = useRef<HTMLDivElement>(null);
  const carouselRefMobile = useRef<HTMLDivElement>(null);
  const [activeCardId, setActiveCardId] = useState<number | null>(null);

  const [wishlistModal, setWishlistModal] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(
    null
  );
  const [wishlistName, setWishlistName] = useState("");

  const navigate = useNavigate();

  const scrollLeft = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const cardWidth = ref.current.firstElementChild?.clientWidth || 0;
      ref.current.scrollBy({
        left: -cardWidth - 24,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      const cardWidth = ref.current.firstElementChild?.clientWidth || 0;
      ref.current.scrollBy({
        left: cardWidth + 24,
        behavior: "smooth",
      });
    }
  };

  const openWishlistModal = (activity: Activity) => {
    setSelectedActivity(activity);
    setWishlistModal(true);
  };

  const handleSaveWishlist = () => {
    console.log(
      "Saved wishlist:",
      wishlistName,
      "for activity:",
      selectedActivity
    );
    setWishlistName("");
    setWishlistModal(false);
  };

  const goToDetails = (id: number) => {
    navigate(`/activity/${id}`);
  };

  return (
 <section className="w-full sm:max-w-7xl sm:mx-auto px-0 sm:px-5 lg:px-8 py-3 lg:py-10">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-0 sm:mb-10 text-center text-[#005246] mt-5 sm:mt-12 lg:mt-2">
        Tourist Activities
      </h1>

      {/* Desktop / Tablet Carousel */}
      <div className="hidden sm:flex relative items-center">
        <button
          onClick={() => scrollLeft(carouselRefDesktop)}
          className="z-20 bg-white/90 p-2 rounded-full shadow-md hover:bg-white mr-2"
        >
          <ChevronLeft size={28} className="text-[#005246]" />
        </button>

        <div
          ref={carouselRefDesktop}
          className="flex gap-6 overflow-x-hidden px-2 py-8 flex-1"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {activities.map((activity) => (
            <motion.div
              key={activity.id}
              className="relative flex-shrink-0 aspect-[3/4] rounded-xl overflow-hidden cursor-pointer group bg-gray-200 scroll-snap-align-start"
              style={{ flex: "0 0 calc(25% - 18px)" }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              <motion.div
                className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-bold text-white mb-2">
                  {activity.title}
                </h3>
                <p className="text-sm text-white mb-2">{activity.shortInfo}</p>
                <p className="text-xs text-white">{activity.details}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToDetails(activity.id);
                  }}
                  className="mt-2 bg-white text-[#005246] px-3 py-1 rounded-lg text-sm hover:bg-gray-100 transition-colors"
                >
                  Details
                </button>
              </motion.div>

              <button
                onClick={() => openWishlistModal(activity)}
                className="absolute top-3 right-3 bg-white/80 p-2 rounded-full shadow hover:bg-white"
              >
                <Heart className="text-[#005246]" size={20} />
              </button>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => scrollRight(carouselRefDesktop)}
          className="z-20 bg-white/90 p-2 rounded-full shadow-md hover:bg-white ml-2"
        >
          <ChevronRight size={28} className="text-[#005246]" />
        </button>
      </div>

      {/* Mobile Carousel */}
      <div className="flex sm:hidden relative items-center ">
        <div
          ref={carouselRefMobile}
          className="flex overflow-x-auto px-4 py-8 flex-1 scrollbar-hide touch-pan-x snap-x snap-mandatory"
        >
          {activities.map((activity) => (
            <motion.div
              key={activity.id}
              className="relative flex-shrink-0 w-[85%] mx-2 aspect-[3/4] rounded-xl overflow-hidden cursor-pointer group bg-gray-200 snap-center"
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 200 }}
              onClick={() =>
                setActiveCardId((prev) =>
                  prev === activity.id ? null : activity.id
                )
              }
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Description overlay */}
              <motion.div
                className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCardId === activity.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-base font-bold text-white mb-1">
                  {activity.title}
                </h3>
                <p className="text-sm text-white mb-1">{activity.shortInfo}</p>
                <p className="text-xs text-white">{activity.details}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    goToDetails(activity.id);
                  }}
                  className="mt-2 bg-white text-[#005246] px-3 py-1 rounded-lg text-sm hover:bg-gray-100 transition-colors"
                >
                  Details
                </button>
              </motion.div>

              {/* Wishlist button (always visible) */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent triggering card click
                  openWishlistModal(activity);
                }}
                className="absolute top-2 right-2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
              >
                <Heart className="text-[#005246]" size={18} />
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Wishlist Modal */}
      <AnimatePresence>
        {wishlistModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl p-6 w-96 shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-xl font-bold text-[#005246] mb-4">
                Save to Wishlist
              </h2>
              <p className="text-gray-600 mb-2">
                Activity:{" "}
                <span className="font-semibold">{selectedActivity?.title}</span>
              </p>
              <input
                type="text"
                placeholder="Enter wishlist name"
                value={wishlistName}
                onChange={(e) => setWishlistName(e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setWishlistModal(false)}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveWishlist}
                  className="px-4 py-2 rounded-lg bg-[#005246] text-white hover:bg-[#004536]"
                >
                  Save
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ActivityCarousel;


