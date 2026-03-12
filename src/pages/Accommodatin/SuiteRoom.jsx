// src/pages/SuiteRoom.jsx
import React from "react";
import RoomDetail from "../../components/Accommodation/RoomDetail";
import suiteImage from "../../assets/suite_room.png";

const SuiteRoom = () => {
  const features = [
    "King-size Bed",
    "Private Balcony",
    "High-speed WiFi",
    "Stocked Mini Bar",
    "Work Desk",
    "Air Conditioning",
    "Luxury Bathroom",
    "Room Service"
  ];

  return (
    <RoomDetail
      title="Suite Room"
      description="Indulge in our premium Suite Room, designed for both relaxation and productivity. Featuring a private balcony, fully stocked minibar, king-size bed, and a dedicated workspace, it’s perfect for business travelers and luxury seekers alike."
      image={suiteImage}
      features={features}
    />
  );
};

export default SuiteRoom;
