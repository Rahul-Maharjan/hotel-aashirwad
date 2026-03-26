import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, Send } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

import logo from "../assets/logo.png";

import esewaLogo from "../assets/payment/esewa.png";
import khaltiLogo from "../assets/payment/khalti.png";
import paypalLogo from "../assets/payment/paypal.png";
import visaLogo from "../assets/payment/visa.png";

import agodaLogo from "../assets/ota/Agoda_logo_2019.svg.png";
import bookingLogo from "../assets/ota/bookingsystem.png";
import expediaLogo from "../assets/ota/Expedia-Logo-2021.png";
import makemytripLogo from "../assets/ota/makemytrip.png";
import { useContactDetails } from "../hooks/useContactDetails";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Experiences", path: "/experiences" },
  { name: "Blogs", path: "/blog" },
  { name: "Contact Us", path: "/contact"},
];

const socialLinks = [
  { icon: Facebook, path: "https://www.facebook.com/p/Hotel-Aashirwad-Restaurant-100083718402718/", name: "Facebook" },
  { icon: Instagram, path: "https://instagram.com", name: "Instagram" },
  { icon: Twitter, path: "https://twitter.com", name: "Twitter" },
  { icon: FaTiktok, path: "https://tiktok.com", name: "TikTok" },
];

const otaLogos = [
  { src: expediaLogo, alt: "Expedia", link: "https://www.expedia.com/" },
  { src: bookingLogo, alt: "Booking.com", link: "https://www.booking.com/" },
  { src: agodaLogo, alt: "Agoda", link: "https://www.agoda.com/" },
  { src: makemytripLogo, alt: "MakeMyTrip", link: "https://www.makemytrip.com/" },
];

const paymentLogos = [
  { src: visaLogo, alt: "Visa", link: "https://www.visa.com/" },
  { src: esewaLogo, alt: "eSewa", link: "https://www.esewa.com.np/" },
  { src: khaltiLogo, alt: "Khalti", link: "https://www.khalti.com/" },
  { src: paypalLogo, alt: "PayPal", link: "https://www.paypal.com/" },
];

export default function Footer() {
  const { data: contactData } = useContactDetails();

  const address = contactData?.address || "Lakeside-6, Pokhara, Nepal";
  const phone = contactData?.phones?.[0] || "+977 9856036622";
  const email = contactData?.emails?.[0] || "info@hotelaashirwad.com";

  return (
    <footer className="bg-white text-gray-800 font-body">
      {/* NEWSLETTER SECTION */}
      <div className="border-b bg-[#003580] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="font-heading text-2xl mb-2">
              Subscribe To Receive Exclusive Offers And News
            </h3>
            <p className="opacity-70 mb-6 font-light">
              Join our mailing list to stay updated with our latest offerings
            </p>
            <form className="flex gap-3 flex-wrap">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors font-medium border border-white/20"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4">
            {otaLogos.map((ota, idx) => (
              <Link
                key={idx}
                to={ota.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border rounded-lg p-3 h-14 w-28 flex items-center justify-center transition-transform hover:scale-105"
              >
                <img
                  src={ota.src}
                  alt={ota.alt}
                  className="h-full w-full object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center sm:text-left">
          {/* Column 1: Brand & Description */}
          <div className="flex flex-col items-center sm:items-start space-y-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Hotel Aashirwad" className="h-12 w-auto" />
              <div className="flex flex-col">
                <span className="font-heading text-2xl italic leading-none">Hotel</span>
                <span className="font-heading text-2xl font-semibold leading-none">Aashirwad</span>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed max-w-xs">
              Experience the perfect blend of local hospitality and modern luxury in the heart of Lakeside, Pokhara. Your serene escape awaits.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-gray-100 text-gray-600 rounded-full hover:bg-accent hover:text-primary transition-all duration-300"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-heading text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-600 hover:text-accent hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-heading text-xl font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-start gap-3 justify-center sm:justify-start">
                <MapPin size={20} className="text-accent shrink-0" />
                <span>{address}</span>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <Phone size={20} className="text-accent shrink-0" />
                <a href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-accent transition-colors">
                  {phone}
                </a>
              </li>
              <li className="flex items-center gap-3 justify-center sm:justify-start">
                <Mail size={20} className="text-accent shrink-0" />
                <a href={`mailto:${email}`} className="hover:text-accent transition-colors">
                  {email}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Experience & Payments */}
          <div className="flex flex-col items-center sm:items-start">
            <h4 className="font-heading text-xl font-semibold mb-6">Secured Payments</h4>
            <p className="text-gray-600 mb-6 max-w-xs text-center sm:text-left">
              We accept multiple payment methods for your convenience and secure booking.
            </p>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              {paymentLogos.map((payment, idx) => (
                <a
                  key={idx}
                  href={payment.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white border border-gray-100 rounded shadow-sm p-2 h-10 w-14 flex items-center justify-center hover:shadow-md transition-shadow"
                >
                  <img
                    src={payment.src}
                    alt={payment.alt}
                    className="h-full w-full object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} <span className="text-primary font-semibold">Hotel Aashirwad</span>. All rights reserved.
          </p>

          <div className="flex items-center gap-2">
            <span>Powered by</span>
            <Link
              to="https://www.archiesoft.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent font-medium hover:underline flex items-center gap-1"
            >
              ArchieSoft Technology
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
