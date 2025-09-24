export interface Homestay {
  id: number;
  name: string;
  location: string;
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  price: string;
  description: string;
  detailedDescription: string;
  amenities: string[];
  host: {
    name: string;
    avatar: string;
    bio: string;
    responseTime: string;
    languages: string[];
  };
  contact: {
    phone: string;
    email: string;
  };
  featured: boolean;
  checkIn: string;
  checkOut: string;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  area: string;
  nearbyAttractions: string[];
  houseRules: string[];
  cancellationPolicy: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface Review {
  id: number;
  guestName: string;
  guestAvatar: string;
  rating: number;
  comment: string;
  date: string;
  helpful: number;
}