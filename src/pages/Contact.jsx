import React from "react";
import ContactInfo from "../components/Home/Contactinfo";
import CommonHeader from "../components/CommonHeader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <CommonHeader
        title="Welcome to Our Hotel"
        description=" Experience comfort, elegance, and exceptional hospitality. Whether
          you're here for relaxation or adventure, we ensure your stay is truly
          unforgettable."
        imageAlt="Contact page header"
      />
      <ContactInfo />
      <Footer />
    </>
  );
};

export default Contact;
