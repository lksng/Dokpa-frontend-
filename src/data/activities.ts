import type{ Activity } from '../types/Activity';

export const activities: Activity[] = [
  {
    id: 1,
    title: "Monastery Walk",
    images: [
      "https://images.pexels.com/photos/3571551/pexels-photo-3571551.jpeg",
      "https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg",
      "https://images.pexels.com/photos/6032886/pexels-photo-6032886.jpeg"
    ],
    shortInfo: "Explore sacred monasteries.",
    details: "Experience the peaceful aura of ancient monasteries, interact with monks, and learn about Buddhist philosophy.",
    fullDescription: "Embark on a spiritual journey through centuries-old monasteries nestled in the mountains. This guided tour offers an intimate look into Buddhist traditions, architecture, and the daily life of monks. You'll participate in meditation sessions, witness prayer ceremonies, and learn about ancient manuscripts and artifacts.",
    duration: "6 hours",
    difficulty: "Easy",
    groupSize: "8-15 people",
    price: 85,
    included: ["Professional guide", "Monastery entrance fees", "Traditional lunch", "Transportation"],
    notIncluded: ["Personal expenses", "Tips", "Souvenirs"],
    schedule: [
      { time: "8:00 AM", activity: "Hotel pickup and departure" },
      { time: "9:30 AM", activity: "First monastery visit and guided tour" },
      { time: "11:00 AM", activity: "Meditation session with monks" },
      { time: "12:30 PM", activity: "Traditional lunch" },
      { time: "2:00 PM", activity: "Second monastery exploration" },
      { time: "4:00 PM", activity: "Return journey" }
    ],
    location: "Himalayan Foothills",
    bestTime: "March to November",
    requirements: ["Comfortable walking shoes", "Respectful attire", "Basic fitness level"]
  },
  {
    id: 2,
    title: "Mountain Trek",
    images: [
      "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg",
      "https://images.pexels.com/photos/1624438/pexels-photo-1624438.jpeg",
      "https://images.pexels.com/photos/2886579/pexels-photo-2886579.jpeg"
    ],
    shortInfo: "Explore scenic trails.",
    details: "Journey through breathtaking landscapes, lush forests, and serene mountain paths, perfect for nature lovers.",
    fullDescription: "Challenge yourself with this invigorating mountain trek through pristine wilderness. Navigate through dense forests, cross crystal-clear streams, and reach spectacular viewpoints offering panoramic vistas of snow-capped peaks. This adventure combines physical challenge with natural beauty, suitable for hikers seeking an authentic mountain experience.",
    duration: "8 hours",
    difficulty: "Challenging",
    groupSize: "6-12 people",
    price: 120,
    included: ["Expert trekking guide", "Safety equipment", "Packed lunch", "First aid kit", "Trail permits"],
    notIncluded: ["Trekking gear", "Personal insurance", "Additional meals"],
    schedule: [
      { time: "6:00 AM", activity: "Early morning pickup" },
      { time: "7:30 AM", activity: "Trek briefing and equipment check" },
      { time: "8:00 AM", activity: "Begin ascent through forest trails" },
      { time: "11:00 AM", activity: "Rest at halfway point" },
      { time: "1:00 PM", activity: "Summit lunch with panoramic views" },
      { time: "3:00 PM", activity: "Descent begins" },
      { time: "5:30 PM", activity: "Return to base" }
    ],
    location: "Tiger Hill Range",
    bestTime: "October to May",
    requirements: ["Good physical fitness", "Trekking boots", "Weather-appropriate clothing", "Water bottle"]
  },
  {
    id: 3,
    title: "Traditional Paper Making",
    images: [
      "https://images.pexels.com/photos/5625119/pexels-photo-5625119.jpeg",
      "https://images.pexels.com/photos/6957200/pexels-photo-6957200.jpeg",
      "https://images.pexels.com/photos/7249196/pexels-photo-7249196.jpeg"
    ],
    shortInfo: "Witness local traditions.",
    details: "Watch artisans craft handmade paper using ancient techniques passed down through generations.",
    fullDescription: "Discover the ancient art of traditional paper making in this hands-on workshop. Learn from master craftsmen who have preserved centuries-old techniques, using natural fibers and traditional tools. You'll participate in the entire process from preparing raw materials to creating your own handmade paper sheets to take home as unique souvenirs.",
    duration: "4 hours",
    difficulty: "Easy",
    groupSize: "4-10 people",
    price: 55,
    included: ["Workshop materials", "Expert instructor", "Handmade paper samples", "Light refreshments"],
    notIncluded: ["Additional paper purchases", "Transportation to workshop"],
    schedule: [
      { time: "10:00 AM", activity: "Workshop introduction and history" },
      { time: "10:30 AM", activity: "Raw material preparation" },
      { time: "11:30 AM", activity: "Hands-on paper making" },
      { time: "1:00 PM", activity: "Drying and finishing techniques" },
      { time: "1:30 PM", activity: "Q&A and souvenir collection" }
    ],
    location: "Traditional Craft Village",
    bestTime: "Year-round",
    requirements: ["Comfortable clothing", "Willingness to get hands dirty"]
  },
  {
    id: 4,
    title: "Cultural Program",
    images: [
      "https://images.pexels.com/photos/3014019/pexels-photo-3014019.jpeg",
      "https://images.pexels.com/photos/1709807/pexels-photo-1709807.jpeg",
      "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg"
    ],
    shortInfo: "Celebrate culture and tradition.",
    details: "Enjoy vibrant performances that bring local folklore and traditional costumes to life.",
    fullDescription: "Immerse yourself in the rich cultural heritage through an evening of traditional performances. Experience authentic folk dances, melodious local music, and storytelling sessions that have been passed down through generations. The program showcases the region's diverse cultural tapestry with colorful costumes, traditional instruments, and captivating performances.",
    duration: "3 hours",
    difficulty: "Easy",
    groupSize: "20-50 people",
    price: 40,
    included: ["Cultural show tickets", "Traditional dinner", "Welcome drink", "Cultural guide"],
    notIncluded: ["Additional beverages", "Photography fees"],
    schedule: [
      { time: "6:00 PM", activity: "Welcome reception and traditional drink" },
      { time: "6:30 PM", activity: "Folk dance performances" },
      { time: "7:30 PM", activity: "Traditional music showcase" },
      { time: "8:00 PM", activity: "Interactive cultural session" },
      { time: "8:30 PM", activity: "Traditional dinner service" }
    ],
    location: "Cultural Heritage Center",
    bestTime: "Year-round (evenings)",
    requirements: ["Formal or semi-formal attire", "Camera (with permission)"]
  },
  {
    id: 5,
    title: "The Mago Trek",
    images: [
      "https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg",
      "https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg",
      "https://images.pexels.com/photos/3361739/pexels-photo-3361739.jpeg"
    ],
    shortInfo: "Soar above the landscapes.",
    details: "Take in panoramic views from above during a peaceful sunrise hot air balloon ride.",
    fullDescription: "Experience the ultimate adventure with the famous Mago Trek, featuring a spectacular hot air balloon ride at sunrise. This unique combination of trekking and aerial viewing offers unparalleled perspectives of the landscape. The trek leads to the launch site, followed by a magical balloon flight over valleys, rivers, and mountain ranges.",
    duration: "10 hours",
    difficulty: "Moderate",
    groupSize: "4-8 people",
    price: 250,
    included: ["Hot air balloon ride", "Professional pilot", "Pre-flight refreshments", "Transportation", "Safety briefing", "Certificate"],
    notIncluded: ["Travel insurance", "Personal expenses", "Additional meals"],
    schedule: [
      { time: "4:00 AM", activity: "Early morning pickup" },
      { time: "5:30 AM", activity: "Trek to launch site" },
      { time: "6:30 AM", activity: "Balloon preparation and safety briefing" },
      { time: "7:00 AM", activity: "Sunrise balloon flight (1 hour)" },
      { time: "8:30 AM", activity: "Landing and celebration" },
      { time: "10:00 AM", activity: "Return trek and breakfast" },
      { time: "1:00 PM", activity: "Return to base" }
    ],
    location: "Mago Valley",
    bestTime: "October to April",
    requirements: ["Good physical condition", "Weather-dependent", "Early morning start"]
  },
  {
    id: 6,
    title: "Photowalk Through Village",
    images: [
      "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg",
      "https://images.pexels.com/photos/1660995/pexels-photo-1660995.jpeg",
      "https://images.pexels.com/photos/3065234/pexels-photo-3065234.jpeg"
    ],
    shortInfo: "Peaceful and Heart Soothing Villages.",
    details: "Navigate exciting Villages and Explore the Things You have never seen.",
    fullDescription: "Join a guided photography tour through picturesque villages where time seems to stand still. Capture authentic moments of daily life, traditional architecture, and stunning landscapes. This experience is perfect for photography enthusiasts and anyone seeking to document the region's rural charm and cultural authenticity.",
    duration: "5 hours",
    difficulty: "Easy",
    groupSize: "6-12 people",
    price: 75,
    included: ["Photography guide", "Village entry permissions", "Local guide", "Traditional lunch", "Photo spots map"],
    notIncluded: ["Camera equipment", "Photo printing", "Personal expenses"],
    schedule: [
      { time: "9:00 AM", activity: "Meet and photography briefing" },
      { time: "9:30 AM", activity: "First village exploration" },
      { time: "11:00 AM", activity: "Traditional house visits" },
      { time: "12:30 PM", activity: "Local lunch break" },
      { time: "2:00 PM", activity: "Scenic spots photography" },
      { time: "3:30 PM", activity: "Photo review and feedback session" }
    ],
    location: "Traditional Hill Villages",
    bestTime: "September to May",
    requirements: ["Camera (DSLR/smartphone)", "Comfortable walking shoes", "Respectful behavior"]
  },
  {
    id: 7,
    title: "Local Market Tour",
    images: [
      "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg",
      "https://images.pexels.com/photos/2252618/pexels-photo-2252618.jpeg",
      "https://images.pexels.com/photos/3657154/pexels-photo-3657154.jpeg"
    ],
    shortInfo: "Taste, Dress and shop Local.",
    details: "Explore bustling markets filled with handicrafts, spices, and delicious street local food.",
    fullDescription: "Dive into the vibrant local culture through this comprehensive market tour. Experience the hustle and bustle of traditional bazaars, sample authentic street food, shop for unique handicrafts, and learn about local ingredients and cooking methods. This tour offers an authentic glimpse into daily life and commerce in the region.",
    duration: "4 hours",
    difficulty: "Easy",
    groupSize: "8-15 people",
    price: 45,
    included: ["Market guide", "Food tastings", "Shopping assistance", "Cultural insights", "Map of market areas"],
    notIncluded: ["Personal purchases", "Additional meals", "Souvenirs"],
    schedule: [
      { time: "10:00 AM", activity: "Market orientation and safety briefing" },
      { time: "10:30 AM", activity: "Spice and herb section exploration" },
      { time: "11:30 AM", activity: "Handicrafts and textiles area" },
      { time: "12:30 PM", activity: "Street food tasting tour" },
      { time: "1:30 PM", activity: "Traditional clothing and accessories" },
      { time: "2:00 PM", activity: "Free shopping time and conclusion" }
    ],
    location: "Central Traditional Market",
    bestTime: "Year-round (mornings)",
    requirements: ["Comfortable walking shoes", "Sunhat", "Small backpack for purchases"]
  }
];