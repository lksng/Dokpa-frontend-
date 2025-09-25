import type { Homestay, Review } from "../types/homestay";

export const homestays: Homestay[] = [
  {
    id: 1,
    name: "Mountain View Homestay",
    location: "tawang",
    image:
      "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1029613/pexels-photo-1029613.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1029618/pexels-photo-1029618.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    rating: 4.8,
    reviews: 124,
    price: "₹2,500",
    description:
      "Experience authentic Monpa culture with stunning monastery views",
    detailedDescription:
      "Nestled in the heart of Tawang, Mountain View Homestay offers an authentic glimpse into Monpa culture while providing modern comforts. Our traditional stone and wood construction harmoniously blends with the surrounding landscape, offering breathtaking views of the famous Tawang Monastery and the snow-capped Himalayas. Wake up to the sound of prayer bells and immerse yourself in the spiritual atmosphere of this sacred valley. Our family has been welcoming guests for over two decades, sharing stories, traditions, and the warmth of Arunachal hospitality.",
    amenities: [
      "Free WiFi",
      "Parking",
      "Traditional Meals",
      "Mountain View",
      "Hot Water",
      "Heater",
      "Library",
      "Prayer Room",
    ],
    host: {
      name: "Tenzin Norbu",
      avatar:
        "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=200",
      bio: "A proud Monpa from Tawang, I've been sharing our beautiful culture with visitors for 20 years. I love telling stories about our monastery, organizing cultural tours, and cooking traditional Monpa dishes.",
      responseTime: "Within 1 hour",
      languages: ["English", "Hindi", "Monpa", "Tibetan"],
    },
    contact: {
      phone: "+91 98765 43210",
      email: "tenzin@mountainview.com",
    },
    featured: true,
    checkIn: "2:00 PM",
    checkOut: "11:00 AM",
    maxGuests: 6,
    bedrooms: 3,
    bathrooms: 2,
    area: "120 sqm",
    nearbyAttractions: [
      "Tawang Monastery (5 min walk)",
      "Tawang War Memorial (10 min drive)",
      "Sela Pass (1 hour drive)",
      "Madhuri Lake (45 min drive)",
    ],
    houseRules: [
      "No smoking inside",
      "Pets allowed with prior notice",
      "Quiet hours: 10 PM - 6 AM",
      "Respect local customs",
    ],
    cancellationPolicy: "Free cancellation up to 48 hours before check-in",
    coordinates: {
      lat: 27.5864,
      lng: 91.8699,
    },
  },
  {
    id: 2,
    name: "Peaceful Valley Stay",
    location: "dirang",
    image:
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1029618/pexels-photo-1029618.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1029624/pexels-photo-1029624.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    rating: 4.7,
    reviews: 89,
    price: "₹2,000",
    description: "Cozy homestay surrounded by apple orchards and hot springs",
    detailedDescription:
      "Located in the picturesque Dirang Valley, our homestay is a perfect retreat for nature lovers and those seeking tranquility. Surrounded by lush apple orchards and with easy access to natural hot springs, this is your gateway to experiencing the pristine beauty of Arunachal Pradesh. Our organic garden supplies fresh vegetables for your meals, and you can participate in seasonal activities like apple picking and traditional handicraft making.",
    amenities: [
      "Free WiFi",
      "Hot Springs Access",
      "Organic Garden",
      "Apple Orchard",
      "Bonfire Area",
      "Parking",
      "Hot Water",
      "Traditional Kitchen",
    ],
    host: {
      name: "Karma Lhamo",
      avatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200",
      bio: "I'm a local Monpa woman passionate about organic farming and traditional cooking. I love sharing our valley's natural beauty and teaching guests about our sustainable lifestyle.",
      responseTime: "Within 2 hours",
      languages: ["English", "Hindi", "Monpa"],
    },
    contact: {
      phone: "+91 98765 43211",
      email: "karma@peacefulvalley.com",
    },
    featured: false,
    checkIn: "1:00 PM",
    checkOut: "12:00 PM",
    maxGuests: 4,
    bedrooms: 2,
    bathrooms: 1,
    area: "80 sqm",
    nearbyAttractions: [
      "Dirang Hot Springs (5 min walk)",
      "Dirang Monastery (15 min walk)",
      "Apple Orchards (surrounding)",
      "Sangti Valley (30 min drive)",
    ],
    houseRules: [
      "No smoking",
      "Children welcome",
      "Participate in eco-friendly practices",
      "Respect garden areas",
    ],
    cancellationPolicy: "Free cancellation up to 24 hours before check-in",
    coordinates: {
      lat: 27.3489,
      lng: 92.2219,
    },
  },
  {
    id: 3,
    name: "Himalayan Heritage Home",
    location: "bomdila",
    image:
      "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=800",
    images: [
      "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1029624/pexels-photo-1029624.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/1029613/pexels-photo-1029613.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
    rating: 4.9,
    reviews: 156,
    price: "₹2,800",
    description:
      "Traditional architecture with modern comforts and craft workshops",
    detailedDescription:
      "Our heritage home in Bomdila represents the finest of traditional Monpa architecture, carefully preserved and enhanced with modern amenities. Built using traditional techniques with local materials, this century-old home tells stories of generations past while offering contemporary comfort. We specialize in cultural immersion experiences, including handicraft workshops, traditional cooking classes, and guided tours of local monasteries and craft centers.",
    amenities: [
      "Free WiFi",
      "Cultural Tours",
      "Handicraft Workshop",
      "Library",
      "Traditional Architecture",
      "Parking",
      "Hot Water",
      "Cultural Programs",
    ],
    host: {
      name: "Lobsang Tashi",
      avatar:
        "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=200",
      bio: "A cultural preservationist and historian, I'm dedicated to sharing our rich Monpa heritage with visitors. I conduct workshops on traditional crafts and love discussing our history and customs.",
      responseTime: "Within 30 minutes",
      languages: ["English", "Hindi", "Monpa", "Tibetan", "Bengali"],
    },
    contact: {
      phone: "+91 98765 43212",
      email: "lobsang@heritage.com",
    },
    featured: true,
    checkIn: "3:00 PM",
    checkOut: "11:00 AM",
    maxGuests: 8,
    bedrooms: 4,
    bathrooms: 3,
    area: "200 sqm",
    nearbyAttractions: [
      "Bomdila Monastery (10 min walk)",
      "Craft Center (5 min walk)",
      "View Point (15 min walk)",
      "Eagle Nest Wildlife Sanctuary (1 hour drive)",
    ],
    houseRules: [
      "Remove shoes inside",
      "Photography permitted with permission",
      "Participate respectfully in cultural activities",
      "No loud music",
    ],
    cancellationPolicy: "Free cancellation up to 72 hours before check-in",
    coordinates: {
      lat: 27.2364,
      lng: 92.4069,
    },
  },
];

export const reviews: { [homestayId: number]: Review[] } = {
  1: [
    {
      id: 1,
      guestName: "Priya Sharma",
      guestAvatar:
        "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
      comment:
        "Absolutely magical experience! Tenzin and his family made us feel like we were part of their family. The monastery views from our room were breathtaking, and the traditional breakfast was incredible.",
      date: "2024-01-15",
      helpful: 12,
    },
    {
      id: 2,
      guestName: "Michael Chen",
      guestAvatar:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
      comment:
        "Perfect location for exploring Tawang. The host's knowledge of local culture and history is incredible. Highly recommend the cultural tour arranged by Tenzin!",
      date: "2024-01-08",
      helpful: 8,
    },
    {
      id: 3,
      guestName: "Anjali Patel",
      guestAvatar:
        "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 4,
      comment:
        "Beautiful homestay with authentic Monpa architecture. The prayer room was a peaceful place to meditate. Only minor issue was WiFi speed, but understandable given the location.",
      date: "2023-12-22",
      helpful: 5,
    },
  ],
  2: [
    {
      id: 4,
      guestName: "David Kumar",
      guestAvatar:
        "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
      comment:
        "The hot springs access was amazing! Karma's organic cooking is outstanding - every meal was a delight. The apple orchard walks in the morning were so peaceful.",
      date: "2024-01-10",
      helpful: 9,
    },
    {
      id: 5,
      guestName: "Sarah Johnson",
      guestAvatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 4,
      comment:
        "Wonderful eco-friendly experience. Learned so much about sustainable living from Karma. The valley views are stunning, especially at sunset.",
      date: "2023-12-28",
      helpful: 6,
    },
  ],
  3: [
    {
      id: 6,
      guestName: "Rajesh Gupta",
      guestAvatar:
        "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
      comment:
        "The handicraft workshop was incredible! Lobsang is a master craftsman and excellent teacher. The heritage home is beautifully preserved with all modern comforts.",
      date: "2024-01-12",
      helpful: 15,
    },
    {
      id: 7,
      guestName: "Emma Wilson",
      guestAvatar:
        "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100",
      rating: 5,
      comment:
        "A perfect blend of culture and comfort. The architecture tour was fascinating, and the traditional cooking class was so much fun. Lobsang's knowledge is encyclopedic!",
      date: "2023-12-30",
      helpful: 11,
    },
  ],
};
