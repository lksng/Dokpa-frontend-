export interface Activity {
  id: number;
  title: string;
  images: string[];
  shortInfo: string;
  details: string;
  fullDescription: string;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  groupSize: string;
  price: number;
  included: string[];
  notIncluded: string[];
  schedule: {
    time: string;
    activity: string;
  }[];
  location: string;
  bestTime: string;
  requirements: string[];
}

export interface BookingData {
  activityId: number;
  name: string;
  email: string;
  phone: string;
  date: string;
  participants: number;
  specialRequirements?: string;
}
