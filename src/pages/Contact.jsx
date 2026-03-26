import React from "react";
import ContactInfo from "../components/Home/Contactinfo";
import CommonHeader from "../components/CommonHeader";
import { useContactHero } from "../hooks/useContactHero";
import SEO from "../components/SEO/SEO";

const Contact = () => {
  const { data, loading } = useContactHero();

  if (loading) return null;

  return (
    <>
      <SEO 
        title="Contact Us | Reservations & Inquiries"
        description="Get in touch with Hotel Aashirwad for bookings, inquiries, or special requests. Our team is available 24/7 to ensure your stay in Pokhara is exceptional."
        url="/contact"
      />
      <CommonHeader
        title={data?.headline || "Contact Us"}
        description={data?.description || "Get in touch with us for any inquiries, reservations, or assistance. We are here to help make your stay exceptional."}
        image={data?.featured_image}
        imageAlt="Contact page header"
        showAccent={true}
      />
      <ContactInfo />
    </>
  );
};

export default Contact;
