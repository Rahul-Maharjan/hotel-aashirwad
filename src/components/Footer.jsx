import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Phone, Mail } from "lucide-react";
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

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "#" },
  { name: "Blogs", path: "#" },
  { name: "Gallery", path: "#" },
  { name: "Reviews", path: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 font-sans">
      {/* NEWSLETTER */}
      <div className="border-b bg-[#003580] text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* LEFT */}
          <div className="max-w-xl text-center lg:text-left">
            <h3 className="font-display text-2xl mb-2">
              Subscribe To Receive Exclusive Offers And News
            </h3>

            <p className="text-primary-foreground/70 mb-6">
              Join our mailing list to stay updated with our latest offerings
            </p>

            <form className="flex gap-3 flex-wrap">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:border-primary transition-colors"
              />

              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* OTA LOGOS */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4">
            <Link
              to="https://www.expedia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border rounded-lg p-3 h-14 w-28 flex items-center justify-center"
            >
              <img
                src={expediaLogo}
                alt="Expedia"
                className="h-full w-full object-contain"
              />
            </Link>

            <Link
              to="https://www.esewa.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border rounded-lg p-3 h-14 w-28 flex items-center justify-center"
            >
              <img
                src={esewaLogo}
                alt="eSewa"
                className="h-full w-full object-contain"
              />
            </Link>

            <Link
              to="https://www.booking.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border rounded-lg p-3 h-14 w-28 flex items-center justify-center"
            >
              <img
                src={bookingLogo}
                alt="Booking.com"
                className="h-full w-full object-contain"
              />
            </Link>

            <Link
              to="https://www.agoda.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border rounded-lg p-3 h-14 w-28 flex items-center justify-center"
            >
              <img
                src={agodaLogo}
                alt="Agoda"
                className="h-full w-full object-contain"
              />
            </Link>

            <Link
              to="https://www.makemytrip.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border rounded-lg p-3 h-14 w-28 flex items-center justify-center"
            >
              <img
                src={makemytripLogo}
                alt="MakeMyTrip"
                className="h-full w-full object-contain"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          {/* LEFT (middle on mobile/tablet) */}
          <div className="lg:max-w-[33%] w-full px-12 lg:px-0 order-2 lg:order-none text-center lg:text-left">
            <p className="text-gray-600 leading-relaxed mb-6">
              Experience luxury, comfort, and serenity in the heart of Pokhara.
              Your memorable stay starts here.
            </p>

            <h4 className="text-lg font-semibold mb-4">We Accept</h4>

            <div className="flex gap-4 justify-center lg:justify-start">
              <Link
                to="https://www.visa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border rounded-lg p-2 h-12 w-12 flex items-center justify-center"
              >
                <img src={visaLogo} alt="Visa" />
              </Link>

              <Link
                to="https://www.esewa.com.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border rounded-lg p-2 h-12 w-12 flex items-center justify-center"
              >
                <img src={esewaLogo} alt="eSewa" />
              </Link>

              <Link
                to="https://www.khalti.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border rounded-lg p-2 h-12 w-12 flex items-center justify-center"
              >
                <img src={khaltiLogo} alt="Khalti" />
              </Link>

              <Link
                to="https://www.paypal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border rounded-lg p-2 h-12 w-12 flex items-center justify-center"
              >
                <img src={paypalLogo} alt="PayPal" />
              </Link>
            </div>
          </div>

          {/* CENTER (top on mobile/tablet) */}
          <div className="text-center w-full lg:max-w-[33%] mx-auto order-1 lg:order-none px-6 lg:px-0">
            <div className="flex flex-col md:flex-row justify-center items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Hotel Aashirwad"
                className="h-12 w-auto shrink-0"
              />

              <h1 className="text-2xl md:text-3xl lg:text-4xl tracking-wide font-heading italic text-black">
                <span className="font-light">Hotel</span>
                <span className="font-normal ml-2">Aashirwad</span>
              </h1>
            </div>

            <p className="text-gray-600 mb-6">Lakeside-6, Pokhara, Nepal</p>

            <div className="flex justify-center gap-4">
              <Link
                to="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
              >
                <Facebook size={18} />
              </Link>

              <Link
                to="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
              >
                <Instagram size={18} />
              </Link>

              <Link
                to="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
              >
                <Twitter size={18} />
              </Link>

              <Link
                to="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
              >
                <FaTiktok size={18} />
              </Link>
            </div>
          </div>

          {/* RIGHT (bottom on mobile/tablet) */}
          <div className="flex md:justify-between gap-6 justify-center max-w-full lg:max-w-[33%] order-3 lg:order-none px-12 lg:px-0">
            {/* QUICK LINKS */}
            <div>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-black transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* CONTACT */}
            <div>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+9779800000000"
                    className="flex items-center text-gray-600 hover:text-black"
                  >
                    <Phone className="mr-2" size={16} />
                    +977 9800000000
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:info@hotelaashirwad.com"
                    className="flex items-center text-gray-600 hover:text-black"
                  >
                    <Mail className="mr-2" size={16} />
                    info@hotelaashirwad.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} Hotel Aashirwad. All rights reserved.
          </p>

          <p className="text-xs">
            Website by{" "}
            <Link
              to="https://www.digisoftdevelopers.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F59E0B] hover:underline"
            >
              Digisoft Developers Pvt. Ltd.
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
