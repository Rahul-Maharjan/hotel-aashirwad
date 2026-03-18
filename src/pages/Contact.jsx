import React from "react";
import ContactInfo from "../components/Home/Contactinfo";
import CommonHeader from "../components/CommonHeader";

const Contact = () => {
  return (
    <>
      <CommonHeader
        title="Contact Us"
        description="Get in touch with us for any inquiries, reservations, or assistance. We are here to help make your stay exceptional."
        imageAlt="Contact page header"
      />
      <ContactInfo />
    </>
  );
};

export default Contact;
