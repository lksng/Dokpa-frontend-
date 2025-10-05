export interface Tour {
  id: number;
  name: string;
  location: string;
  description: string;
  duration: string;
  distance: string;
  price: number;
  transportation: string[];
  bestTime: string;
  attractions: string[];
  difficulty: 'Easy' | 'Moderate' | 'Challenging';
  image: string;
  featured: boolean;
  fullDescription: string;
}

export interface TransportOption {
  id: string;
  name: string;
  price: number;
  capacity: number;
  description: string;
}

export const transportOptions: TransportOption[] = [
  {
    id: 'sumo',
    name: 'Tata Sumo',
    price: 4000,
    capacity: 8,
    description: 'Comfortable SUV ideal for mountain roads'
  },
  {
    id: 'bolero',
    name: 'Mahindra Bolero',
    price: 3500,
    capacity: 7,
    description: 'Rugged vehicle perfect for rough terrain'
  },
  {
    id: 'innova',
    name: 'Toyota Innova',
    price: 5000,
    capacity: 7,
    description: 'Premium comfort for long journeys'
  },
  {
    id: 'tempo',
    name: 'Tempo Traveller',
    price: 6500,
    capacity: 12,
    description: 'Spacious vehicle for group travel'
  },
  {
    id: 'sedan',
    name: 'Sedan Car',
    price: 3000,
    capacity: 4,
    description: 'Economical option for small groups'
  }
];

export const tours: Tour[] = [
  {
    id: 1,
    name: 'Tawang Monastery & City Tour',
    location: 'Tawang',
    description: 'Visit the magnificent Tawang Monastery, one of the largest monasteries in India',
    fullDescription: 'Experience the spiritual heart of Arunachal Pradesh with a comprehensive tour of Tawang Monastery and surrounding attractions. This ancient monastery, founded in 1680-81, sits majestically at 10,000 feet and houses over 300 monks. Explore the prayer halls, giant Buddha statue, and ancient manuscripts while learning about Tibetan Buddhism and local culture.',
    duration: '6 hours',
    distance: '25 km',
    price: 2500,
    transportation: ['Car', 'SUV'],
    bestTime: 'April to October',
    attractions: ['Tawang Monastery', 'War Memorial', 'Craft Center', 'Local Market'],
    difficulty: 'Easy',
    image: 'https://images.pexels.com/photos/6031832/pexels-photo-6031832.jpeg',
    featured: true
  },
  {
    id: 2,
    name: 'Sela Pass Adventure',
    location: 'Tawang',
    description: 'Journey through the breathtaking Sela Pass at 13,700 feet',
    fullDescription: 'Embark on an unforgettable journey through one of India\'s highest motorable passes. The Sela Pass offers stunning panoramic views of snow-capped peaks and the pristine Sela Lake. This adventure takes you through diverse landscapes, from alpine meadows to frozen lakes, with opportunities to spot rare Himalayan wildlife.',
    duration: '8 hours',
    distance: '78 km',
    price: 3500,
    transportation: ['SUV', '4x4'],
    bestTime: 'May to September',
    attractions: ['Sela Pass', 'Sela Lake', 'Paradise Lake', 'Jaswant Garh'],
    difficulty: 'Challenging',
    image: 'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg',
    featured: true
  },
  {
    id: 3,
    name: 'Nuranang Waterfall Expedition',
    location: 'Tawang',
    description: 'Explore the stunning 100-meter Nuranang Waterfall',
    fullDescription: 'Discover the magnificent Nuranang Waterfall, also known as Bong Bong Falls, cascading 100 meters down rocky cliffs. The journey takes you through scenic mountain roads with breathtaking valley views. Visit the nearby hydroelectric power station and enjoy local cuisine at traditional restaurants.',
    duration: '5 hours',
    distance: '35 km',
    price: 2000,
    transportation: ['Car', 'SUV', 'Taxi'],
    bestTime: 'March to November',
    attractions: ['Nuranang Falls', 'Hydroelectric Station', 'Photo Points', 'Local Villages'],
    difficulty: 'Moderate',
    image: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg',
    featured: false
  },
  {
    id: 4,
    name: 'Bumla Pass Border Tour',
    location: 'Tawang',
    description: 'Visit the Indo-China border at Bumla Pass',
    fullDescription: 'Experience the thrill of visiting the Indo-China border at Bumla Pass, situated at 15,200 feet. This restricted area requires special permits and offers a unique glimpse into border operations. The journey showcases dramatic mountain scenery and pristine high-altitude landscapes.',
    duration: '10 hours',
    distance: '85 km',
    price: 4500,
    transportation: ['SUV', '4x4'],
    bestTime: 'May to October',
    attractions: ['Bumla Pass', 'Indo-China Border', 'Ptso Lake', 'Military Posts'],
    difficulty: 'Challenging',
    image: 'https://images.pexels.com/photos/1285625/pexels-photo-1285625.jpeg',
    featured: true
  },
  {
    id: 5,
    name: 'Bomdila Monastery Circuit',
    location: 'Bomdila',
    description: 'Explore multiple monasteries in the charming town of Bomdila',
    fullDescription: 'Tour the peaceful town of Bomdila, visiting its three prominent monasteries - Upper Gompa, Middle Gompa, and Lower Gompa. Each monastery offers unique architectural features and spiritual experiences. The tour includes panoramic views of snow-capped mountains and insights into Buddhist practices.',
    duration: '4 hours',
    distance: '15 km',
    price: 1800,
    transportation: ['Car', 'Taxi'],
    bestTime: 'Year-round',
    attractions: ['Upper Gompa', 'Lower Gompa', 'View Point', 'Craft Center'],
    difficulty: 'Easy',
    image: 'https://images.pexels.com/photos/6031816/pexels-photo-6031816.jpeg',
    featured: false
  },
  {
    id: 6,
    name: 'Bomdila Apple Orchards Tour',
    location: 'Bomdila',
    description: 'Visit the famous apple orchards and enjoy fresh mountain air',
    fullDescription: 'Explore Bomdila\'s lush apple orchards spread across scenic hillsides. Learn about organic apple cultivation, sample fresh apples and local apple products, and enjoy stunning valley views. The tour includes visits to local farms and interactions with farmers.',
    duration: '3 hours',
    distance: '10 km',
    price: 1500,
    transportation: ['Car', 'Taxi'],
    bestTime: 'September to November',
    attractions: ['Apple Orchards', 'Local Farms', 'Valley Views', 'Fruit Markets'],
    difficulty: 'Easy',
    image: 'https://images.pexels.com/photos/209482/pexels-photo-209482.jpeg',
    featured: false
  },
  {
    id: 7,
    name: 'Bomdila Viewpoint Sunrise Tour',
    location: 'Bomdila',
    description: 'Witness spectacular sunrise views over the Eastern Himalayas',
    fullDescription: 'Start your day with a breathtaking sunrise tour to Bomdila\'s famous viewpoint. Watch the first rays of sun illuminate snow-capped peaks while enjoying hot tea and local snacks. The crystal-clear morning air offers unobstructed views of the Himalayan range.',
    duration: '2 hours',
    distance: '5 km',
    price: 1200,
    transportation: ['Car', 'Taxi'],
    bestTime: 'October to March',
    attractions: ['Sunrise Point', 'Himalayan Views', 'Tea Garden', 'Photo Spots'],
    difficulty: 'Easy',
    image: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg',
    featured: false
  },
  {
    id: 8,
    name: 'Dirang Valley Nature Walk',
    location: 'Dirang',
    description: 'Peaceful nature walk through picturesque Dirang Valley',
    fullDescription: 'Immerse yourself in the natural beauty of Dirang Valley with a guided nature walk. Trek through pine forests, visit traditional villages, and discover hot water springs. The moderate walk offers excellent bird watching opportunities and stunning mountain vistas.',
    duration: '4 hours',
    distance: '8 km',
    price: 1600,
    transportation: ['On Foot'],
    bestTime: 'March to November',
    attractions: ['Dirang Valley', 'Hot Springs', 'Traditional Villages', 'Pine Forests'],
    difficulty: 'Moderate',
    image: 'https://images.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg',
    featured: true
  },
  {
    id: 9,
    name: 'Dirang Dzong & Village Tour',
    location: 'Dirang',
    description: 'Explore ancient Dirang Dzong fortress and traditional villages',
    fullDescription: 'Step back in time with a visit to the 500-year-old Dirang Dzong fortress. Explore narrow stone-paved streets, traditional houses, and learn about the Monpa tribal culture. The tour includes interactions with local artisans and demonstrations of traditional crafts.',
    duration: '3 hours',
    distance: '12 km',
    price: 1400,
    transportation: ['Car', 'Taxi'],
    bestTime: 'Year-round',
    attractions: ['Dirang Dzong', 'Old Village', 'Traditional Houses', 'Craft Workshops'],
    difficulty: 'Easy',
    image: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg',
    featured: false
  },
  {
    id: 10,
    name: 'Sangti Valley Excursion',
    location: 'Dirang',
    description: 'Visit the serene Sangti Valley, winter home to black-necked cranes',
    fullDescription: 'Discover the tranquil Sangti Valley, a biodiversity hotspot known for migratory black-necked cranes. The valley\'s pristine landscapes include flowing rivers, meadows, and traditional villages. Perfect for bird watchers and nature photographers.',
    duration: '5 hours',
    distance: '20 km',
    price: 2200,
    transportation: ['Car', 'SUV'],
    bestTime: 'November to March',
    attractions: ['Sangti Valley', 'Bird Watching', 'River Views', 'Local Villages'],
    difficulty: 'Moderate',
    image: 'https://images.pexels.com/photos/1666021/pexels-photo-1666021.jpeg',
    featured: true
  },
  {
    id: 11,
    name: 'Shergaon Village Experience',
    location: 'Shergaon',
    description: 'Immerse in traditional village life in scenic Shergaon',
    fullDescription: 'Experience authentic village life in Shergaon, known for its pristine beauty and warm hospitality. Stay in traditional homestays, participate in daily village activities, and learn about local customs. The village offers stunning views of surrounding mountains.',
    duration: '6 hours',
    distance: '15 km',
    price: 1800,
    transportation: ['Car', 'Taxi'],
    bestTime: 'Year-round',
    attractions: ['Traditional Village', 'Homestays', 'Local Culture', 'Mountain Views'],
    difficulty: 'Easy',
    image: 'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg',
    featured: false
  },
  {
    id: 12,
    name: 'Shergaon Trekking Adventure',
    location: 'Shergaon',
    description: 'Trek through forests and meadows around Shergaon',
    fullDescription: 'Embark on an exhilarating trek through diverse landscapes surrounding Shergaon. The trail winds through dense forests, open meadows, and offers spectacular mountain panoramas. Suitable for adventure enthusiasts seeking off-the-beaten-path experiences.',
    duration: '7 hours',
    distance: '12 km',
    price: 2400,
    transportation: ['On Foot'],
    bestTime: 'April to October',
    attractions: ['Forest Trails', 'Mountain Views', 'Meadows', 'Wildlife Spotting'],
    difficulty: 'Challenging',
    image: 'https://images.pexels.com/photos/868097/pexels-photo-868097.jpeg',
    featured: true
  },
  {
    id: 13,
    name: 'Rupa & Shergaon Twin Village Tour',
    location: 'Shergaon',
    description: 'Explore two charming twin villages and apple orchards',
    fullDescription: 'Tour the picturesque twin villages of Rupa and Shergaon, connected by scenic mountain roads. Visit sprawling apple orchards, interact with friendly locals, and enjoy traditional Monpa cuisine. The tour offers insights into sustainable agriculture and village life.',
    duration: '5 hours',
    distance: '18 km',
    price: 2000,
    transportation: ['Car', 'SUV'],
    bestTime: 'March to November',
    attractions: ['Rupa Village', 'Shergaon Village', 'Apple Orchards', 'Local Markets'],
    difficulty: 'Easy',
    image: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg',
    featured: false
  },
  {
    id: 14,
    name: 'Multi-Day Tawang Complete Tour',
    location: 'Tawang',
    description: 'Comprehensive 3-day tour covering all major Tawang attractions',
    fullDescription: 'Experience the complete Tawang circuit over three immersive days. This comprehensive tour includes Tawang Monastery, Sela Pass, Bumla Pass, Nuranang Falls, war memorials, and local villages. Includes accommodation, meals, and expert guides for the ultimate Tawang experience.',
    duration: '3 days',
    distance: '250 km',
    price: 12000,
    transportation: ['SUV', '4x4'],
    bestTime: 'May to October',
    attractions: ['All Major Attractions', 'Accommodations', 'Guided Tours', 'Cultural Shows'],
    difficulty: 'Moderate',
    image: 'https://images.pexels.com/photos/1659438/pexels-photo-1659438.jpeg',
    featured: true
  },
  {
    id: 15,
    name: 'Wildlife & Nature Photo Tour',
    location: 'Bomdila',
    description: 'Specialized photography tour focusing on wildlife and landscapes',
    fullDescription: 'Join expert photographers on a specialized tour designed for capturing Arunachal\'s natural beauty. Visit prime locations for wildlife photography including bird sanctuaries, forest areas, and scenic viewpoints. Includes photography tips, equipment guidance, and golden hour sessions.',
    duration: '8 hours',
    distance: '45 km',
    price: 3200,
    transportation: ['SUV'],
    bestTime: 'October to April',
    attractions: ['Bird Sanctuary', 'Wildlife Areas', 'Scenic Viewpoints', 'Photography Spots'],
    difficulty: 'Moderate',
    image: 'https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg',
    featured: false
  }
];
