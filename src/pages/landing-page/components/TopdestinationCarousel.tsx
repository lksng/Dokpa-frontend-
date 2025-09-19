import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';

interface Destination {
  id: number;
  name: string;
  image: string;
  description: string;
}

const destinations: Destination[] = [
  { id: 1, name: 'Tawang', image: 'src/assets/twgimg3.jpg', description: 'Famous for its stunning monastery, snow-capped peaks, and serene lakes.' },
  { id: 2, name: 'Maduri Lake', image: 'src/assets/madurilk.jpg', description: 'A beautiful sceneric view of Tsangatser Lake within the Mighty Mountains.' },
  { id: 3, name: 'Sangti Valley', image: 'src/assets/sangti-valley.jpg', description: 'A picturesque valley with black-necked cranes and breathtaking views.' },
  { id: 4, name: 'Dirang', image: 'src/assets/mandala.jpg', description: 'A charming town with hot springs, apple orchards, and stunning views.' },
  { id: 5, name: 'Bumla Pass', image: 'src/assets/bomlapass.jpg', description: 'A high-altitude mountain pass at the Indo-China border, covered in snow.' },
  { id: 6, name: 'Mago', image: 'src/assets/mago.jpg', description: 'Mago is a serene high-altitude village near Tawang, surrounded by snow-clad peaks and alpine meadows.' },
  { id: 7, name: 'Jung Waterfall', image: 'src/assets/jungwaterfall1.jpg', description: 'Jung Waterfall, also known as Nuranang Falls.' },
];

const TopDestinationsCarousel: React.FC = () => {
  return (
    <section className="w-full py-8 overflow-hidden">
      <h2 className="text-3xl font-bold text-center text-[#005246] mb-10">
        Top Destinations
      </h2>

      {/* Desktop / Laptop Carousel */}
      <div className="hidden lg:block">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          spaceBetween={-120}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 250,
            modifier: 2,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="w-full max-w-[1400px] px-4 overflow-visible"
        >
          {destinations.map((dest) => (
            <SwiperSlide
              key={dest.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              style={{
                width: '38vw',
                maxWidth: '820px',
              }}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full aspect-[1579/1032] object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-[#005246]">
                  {dest.name}
                </h3>
                <p className="text-sm text-gray-600">{dest.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile / Tablet Carousel */}
      <div className="block lg:hidden">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView="auto"
          spaceBetween={-50}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="w-full px-2 overflow-visible"
        >
          {destinations.map((dest) => (
            <SwiperSlide
              key={dest.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
              style={{
                width: '70%',
                maxWidth: '400px',
              }}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full aspect-[1579/1032] object-cover"
              />
              {/* Fixed-height text block */}
              <div className="p-2 h-28 flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-[#005246]">
                  {dest.name}
                </h3>
                <p className="text-xs text-gray-600 line-clamp-3">
                  {dest.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TopDestinationsCarousel;
