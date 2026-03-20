import shiva from "../assets/activities/shiva.jpg";
import shiva1 from "../assets/activities/shiva1.jpg";
import shiva2 from "../assets/activities/shiva2.jpg";
import stupa from "../assets/activities/santi-stupa.jpg";
import stupa1 from "../assets/activities/stupa2.jpg";
import stupa2 from "../assets/activities/stupa3.jpg";
import sarangkot from "../assets/activities/sarangkot.jpg";
import sarangkot1 from "../assets/activities/sarangkot1.jpg";
import sarangkot2 from "../assets/activities/sarangkot2.jpg";
import sarangkot3 from "../assets/activities/sarangkot3.jpg";
import sarangkot4 from "../assets/activities/sarangkot4.jpg";
import sarangkot5 from "../assets/activities/sarangkot5.jpg";
import sarangkot6 from "../assets/activities/sarangkot6.jpg";
import phewa from "../assets/activities/phewa.jpg";
import phewa2 from "../assets/activities/phewa2.jpeg";
import phewa3 from "../assets/activities/phewa3.jpg";
import phewa1 from "../assets/activities/phewa1.jpg";
import begnas from "../assets/activities/begnas.jpg";
import begnas1 from "../assets/activities/begnas1.webp";
import ultralight from "../assets/activities/ultralight.webp";
import ultralight1 from "../assets/activities/ultralight1.webp";
import ultralight2 from "../assets/activities/ultralight2.jpg";
import museum from "../assets/activities/Museum.jpg";
import museum1 from "../assets/activities/Museum1.webp";
import museum2 from "../assets/activities/Museum2.jpg";

export const activitiesData = [
  {
    id: "pumdikot-shiva-statue",
    name: "Pumdikot Shiva Statue Visit",
    shortDescription:
      "Visit the majestic Shiva statue overlooking Pokhara valley.",
    description:
      "Perched on Pumdikot hill, the towering statue of Lord Shiva is one of the newest and most iconic landmarks in Pokhara. The site offers breathtaking panoramic views of the Annapurna range, Phewa Lake, and the entire Pokhara valley. The peaceful environment combined with spiritual ambiance makes it a perfect place for both sightseeing and reflection.",
    image: shiva,
    images: [shiva1, shiva2],
    imageAlt: "Pumdikot Shiva Statue",
    details: {
      duration: "2 - 3 Hours",
      availability: "Daily",
      groupSize: "1 - 10 Guests",
      price: "Rs. 1,500 per person",
      requirements: "Light walking required",
    },
    features: [
      "Massive Shiva statue viewpoint",
      "Panoramic Himalayan and valley views",
      "Peaceful spiritual atmosphere",
      "Great photography location",
    ],
    included: [
      "Private vehicle transportation",
      "Entrance fees",
      "Local guide",
      "Bottled water",
    ],
  },
  {
    id: "world-peace-pagoda-visit",
    name: "World Peace Pagoda Visit",
    shortDescription:
      "Experience tranquility at Pokhara's iconic hilltop stupa.",
    description:
      "The World Peace Pagoda (Shanti Stupa) is a symbol of peace and harmony located on a hilltop above Phewa Lake. The gleaming white structure offers stunning panoramic views of the lake, Pokhara city, and surrounding mountains. It is an ideal place to relax, meditate, and enjoy the beauty of nature.",
    image: stupa,
    images: [stupa1, stupa2],
    imageAlt: "World Peace Pagoda",
    details: {
      duration: "2 - 4 Hours",
      availability: "Daily",
      groupSize: "1 - 8 Guests",
      price: "Rs. 2,000 per person",
      requirements: "Moderate walking",
    },
    features: [
      "Iconic white stupa",
      "Panoramic views of Pokhara",
      "Peaceful environment",
      "Perfect sunset spot",
    ],
    included: ["Transport", "Guide", "Entrance fees", "Water bottle"],
  },
  {
    id: "sarangkot-viewpoint",
    name: "Sarangkot Viewpoint Tour",
    shortDescription:
      "Enjoy breathtaking sunrise and mountain views from Sarangkot.",
    description:
      "Sarangkot is the most popular viewpoint in Pokhara, known for its incredible sunrise views over the Annapurna and Dhaulagiri ranges. It also offers a bird’s-eye view of Phewa Lake and Pokhara city, making it a must-visit destination.",
    image: sarangkot,
    images: [sarangkot1, sarangkot3, sarangkot5, sarangkot6],
    imageAlt: "Sarangkot Viewpoint",
    details: {
      duration: "3 Hours",
      availability: "Daily",
      groupSize: "1 - 10 Guests",
      price: "Rs. 1,800 per person",
      requirements: "Warm clothing",
    },
    features: [
      "Best sunrise viewpoint",
      "Mountain panorama",
      "View of Pokhara valley",
      "Photography hotspot",
    ],
    included: ["Transportation", "Guide", "Entrance fee", "Hot tea"],
  },
  {
    id: "boating-phewa-lake",
    name: "Boating on Phewa Lake",
    shortDescription: "Relax with a scenic boat ride on Pokhara’s famous lake.",
    description:
      "Enjoy a peaceful boating experience on the serene waters of Phewa Lake. Surrounded by lush hills and reflecting the Annapurna range, the lake offers a tranquil escape. You can also visit Tal Barahi Temple located on an island in the lake.",
    image: phewa,
    images: [phewa1, phewa2, phewa3],
    imageAlt: "Boating on Phewa Lake",
    details: {
      duration: "1 - 2 Hours",
      availability: "Daily",
      groupSize: "1 - 5 Guests per boat",
      price: "Rs. 800 per hour",
      requirements: "Life jacket provided",
    },
    features: [
      "Calm scenic lake experience",
      "Visit Tal Barahi Temple",
      "Mountain reflections",
      "Perfect for relaxation",
    ],
    included: [
      "Boat rental",
      "Life jacket",
      "Boat operator (optional)",
      "Safety briefing",
    ],
  },
  {
    id: "begnas-lake-tour",
    name: "Begnas Lake Visit",
    shortDescription: "Escape the crowds at the peaceful Begnas Lake.",
    description:
      "Begnas Lake offers a quieter and more serene alternative to Phewa Lake. Surrounded by green hills and less commercialized, it is perfect for relaxation, boating, and enjoying nature away from the busy city.",
    image: begnas,
    images: [begnas1, begnas],
    imageAlt: "Begnas Lake",
    details: {
      duration: "4 - 5 Hours",
      availability: "Daily",
      groupSize: "1 - 10 Guests",
      price: "Rs. 2,500 per person",
      requirements: "None",
    },
    features: [
      "Peaceful natural setting",
      "Less crowded than Phewa",
      "Boating and lakeside dining",
      "Relaxing atmosphere",
    ],
    included: ["Transport", "Guide", "Boat ride", "Lunch"],
  },
  {
    id: "ultralight-flight",
    name: "Ultralight Flight Experience",
    shortDescription: "Fly like a bird over Pokhara in an ultralight aircraft.",
    description:
      "Experience the thrill of flying in an ultralight aircraft above Pokhara valley. Enjoy unmatched aerial views of lakes, mountains, and villages while flying with a professional pilot in a safe and lightweight aircraft.",
    image: ultralight,
    images: [ultralight1, ultralight2],
    imageAlt: "Ultralight Flight",
    details: {
      duration: "15 - 60 Minutes",
      availability: "Morning flights only",
      groupSize: "1 Person",
      price: "From Rs. 10,000",
      requirements: "Weather dependent",
    },
    features: [
      "Aerial views of Pokhara",
      "Safe and certified pilots",
      "Flexible flight duration",
      "Unique flying experience",
    ],
    included: [
      "Flight session",
      "Pilot",
      "Safety briefing",
      "Photos (optional)",
    ],
  },
  {
    id: "international-mountain-museum",
    name: "International Mountain Museum",
    shortDescription:
      "Explore the history of mountaineering and Himalayan culture.",
    description:
      "The International Mountain Museum showcases the history, culture, and biodiversity of the Himalayas. It features exhibits on famous climbers, mountain expeditions, and the lifestyle of Himalayan communities.",
    image: museum,
    images: [museum, museum1, museum2],
    imageAlt: "International Mountain Museum",
    details: {
      duration: "2 - 3 Hours",
      availability: "Daily",
      groupSize: "1 - 15 Guests",
      price: "Rs. 1,000 per person",
      requirements: "None",
    },
    features: [
      "Mountaineering history exhibits",
      "Cultural insights",
      "Educational displays",
      "Family-friendly activity",
    ],
    included: [
      "Entrance ticket",
      "Guide (optional)",
      "Information booklet",
      "Parking",
    ],
  },
];
