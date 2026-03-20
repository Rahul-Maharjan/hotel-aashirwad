import suite1 from '../assets/hotel/GOVL2074.jpg';
import suite2 from '../assets/hotel/GOVL2088.jpg';
import suite3 from '../assets/hotel/GOVL2091.jpg';
import suite4 from '../assets/hotel/GOVL2101.jpg';

import deluxe1 from '../assets/hotel/deluxe_1.jpg';
import deluxe2 from '../assets/hotel/deluxe_2.jpg';
import deluxe3 from '../assets/hotel/deluxe_3.jpg';
import deluxe4 from '../assets/hotel/deluxe_4.jpg';

import superior1 from '../assets/hotel/deluxe_5.jpg';
import superior2 from '../assets/hotel/GOVL2129.jpg';
import superior3 from '../assets/hotel/GOVL2141.jpg';
import superior4 from '../assets/hotel/GOVL2148.jpg';

import family1 from '../assets/hotel/bedroom_twin_01.jpg';
import family2 from '../assets/hotel/bedroom_twin_02.jpg';
import family3 from '../assets/hotel/bedroom_twin_03.jpg';
import family4 from '../assets/hotel/bedroom_twin_04.jpg';
import family5 from '../assets/hotel/bedroom_twin_05.jpg';
import family6 from '../assets/hotel/bedroom_twin_06.jpg';

import garden1 from '../assets/hotel/garden_hallway.jpg';
import garden2 from '../assets/hotel/garden_hallway2.jpg';
import food1 from '../assets/hotel/table_with_food.jpg';
import exterior1 from '../assets/hotel/hotel_exterior_01.jpg';
import amenity1 from '../assets/hotel/room_amenities_01.jpg';
import detail1 from '../assets/hotel/room_detail_01.jpg';

export const roomData = [
    {
        id: "suite",
        name: "Suite Room",
        description: "Our Suite Room provides extra space and comfort, making it ideal for guests who prefer a more relaxing and private environment. With a spacious layout and modern facilities, this room is perfect for a comfortable stay in Pokhara. Featuring elegant interiors, a well-appointed living area, and a large private balcony offering breathtaking mountain views, the Suite Room is meticulously designed to offer the ultimate luxury experience.",
        shortDescription: "Spacious Comfort for a Relaxing Stay",
        image: suite1,
        images: [
            suite1,
            suite2,
            suite3,
            suite4,
            detail1,
            garden1
        ],
        imageAlt: "Suite Room",
        details: {
            sqrFt: "430 sq.ft",
            maxGuests: "3 Guests",
            roomType: "Suite Room",
            price: "Rs. 4200",
            bedType: "1 King Bed"
        },
        features: [
            "Separate Living Area",
            "Panoramic Mountain View",
            "Premium Coffee Machine",
            "Plush Bathrobes & Slippers"
        ],
        amenities: [
            "High-speed WiFi",
            "Stocked Mini Bar",
            "Work Desk",
            "Air Conditioning",
            "Luxury Bathroom",
            "Smart TV",
            "Do Not Disturb System",
            "Safe Shield Bathroom Fixture"
        ],
        services: [
            "24/7 Room Service",
            "Laundry Service",
            "Complimentary Breakfast",
            "Airport Transfer"
        ],
        policies: {
            checkIn: "2:00 PM - 12:00 AM",
            checkOut: "12:00 PM",
            cancellation: "Free cancellation up to 48 hours before check-in. After that, the first night will be charged.",
            rules: ["No smoking", "No pets allowed", "Quiet hours: 10 PM - 7 AM"]
        }
    },
    {
        id: "deluxe",
        name: "Deluxe Room",
        description: "The Deluxe Room offers a cozy and comfortable space for travelers visiting Pokhara. Designed with modern essentials and a relaxing environment, it is a great choice for couples or solo guests. Enjoy the warmth of natural light through large soundproof windows and unwind with our carefully selected in-room amenities, providing the perfect sanctuary after a long day of exploring.",
        shortDescription: "Simple Comfort with Modern Facilities",
        image: deluxe1,
        images: [
            deluxe1,
            deluxe2,
            deluxe3,
            deluxe4,
            amenity1,
            garden2
        ],
        imageAlt: "Deluxe Room",
        details: {
            sqrFt: "215 sq.ft",
            maxGuests: "2 Guests",
            roomType: "Deluxe Room",
            price: "Rs. 2500",
            bedType: "1 Queen Bed"
        },
        features: [
            "City View",
            "Soundproof Windows",
            "Working Space",
            "Extra Pillows"
        ],
        amenities: [
            "High-speed WiFi",
            "Air Conditioning",
            "En-suite Bathroom",
            "Flat-screen TV",
            "Tea/Coffee Maker",
            "Iron & Iron Board",
            "Hair Dryer"
        ],
        services: [
            "Daily Housekeeping",
            "Wake-up Service",
            "Concierge Support"
        ],
        policies: {
            checkIn: "2:00 PM - 12:00 AM",
            checkOut: "12:00 PM",
            cancellation: "Flexible cancellation up to 24 hours before check-in.",
            rules: ["No smoking", "No pets allowed", "Quiet hours: 10 PM - 7 AM"]
        }
    },
    {
        id: "superior-deluxe",
        name: "Superior Deluxe Room",
        description: "The Superior Deluxe Room is designed for guests who want a little extra comfort. Featuring a private balcony and relaxing surroundings, it provides a pleasant stay while enjoying the peaceful atmosphere of Pokhara. Start your mornings witnessing the breathtaking sunrise over the Himalayas right from your private seating space.",
        shortDescription: "Extra Comfort with Balcony Views",
        image: superior1,
        images: [
            superior1,
            superior2,
            superior3,
            superior4,
            food1,
            exterior1
        ],
        imageAlt: "Superior Deluxe Room",
        details: {
            sqrFt: "215 sq.ft",
            maxGuests: "2 Guests",
            roomType: "Superior Deluxe",
            price: "Rs. 2800",
            bedType: "1 King Bed"
        },
        features: [
            "Private Balcony",
            "Outdoor Seating",
            "Himalayan View",
            "Luxury Linens"
        ],
        amenities: [
            "High-speed WiFi",
            "Air Conditioning",
            "En-suite Bathroom",
            "Flat-screen TV",
            "Mini Fridge",
            "Tea/Coffee Maker",
            "Do Not Disturb System"
        ],
        services: [
            "Daily Housekeeping",
            "Room Service",
            "Complimentary Water"
        ],
        policies: {
            checkIn: "2:00 PM - 12:00 AM",
            checkOut: "12:00 PM",
            cancellation: "Free cancellation up to 48 hours before check-in. After that, the first night will be charged.",
            rules: ["No smoking", "No pets allowed", "Quiet hours: 10 PM - 7 AM"]
        }
    },
    {
        id: "family",
        name: "Family Room",
        description: "Our Family Room at Hotel Ashirwad Pokhara is specially designed for families or small groups traveling together. The room offers a spacious and comfortable environment with cozy bedding and essential amenities to ensure a pleasant stay for everyone. Perfect for parents and children, the Family Room provides enough space to relax after a day of exploring Pokhara's lakes, mountains, and attractions. Guests can enjoy a peaceful atmosphere and friendly service while spending quality time with their loved ones.",
        shortDescription: "Comfortable Stay for Families",
        image: family1,
        images: [
            family1,
            family2,
            family3,
            family4,
            family5,
            family6
        ],
        imageAlt: "Family Room",
        details: {
            sqrFt: "320 sq.ft",
            maxGuests: "4 Guests",
            roomType: "Family Room",
            price: "Rs. 3500",
            bedType: "1 King & 2 Twin Beds"
        },
        features: [
            "Spacious Layout",
            "Kid-friendly Safe Utilities",
            "Large Sitting Area",
            "Connecting Room Option"
        ],
        amenities: [
            "High-speed WiFi",
            "Air Conditioning",
            "Large En-suite Bathroom",
            "Flat-screen TV",
            "Seating Area",
            "Tea/Coffee Maker",
            "Mini Fridge"
        ],
        services: [
            "Daily Housekeeping",
            "Kid-friendly Amenities",
            "Room Service",
            "Tour Assistance"
        ],
        policies: {
            checkIn: "2:00 PM - 12:00 AM",
            checkOut: "12:00 PM",
            cancellation: "Free cancellation up to 48 hours before check-in. After that, the first night will be charged.",
            rules: ["No smoking", "No pets allowed", "Quiet hours: 10 PM - 7 AM"]
        }
    }
];


