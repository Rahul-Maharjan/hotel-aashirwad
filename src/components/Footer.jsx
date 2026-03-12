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
  { name: "About Us", path: "/about" },
  { name: "Blogs", path: "/blogs" },
  { name: "Gallery", path: "/gallery" },
  { name: "Reviews", path: "/reviews" },
];

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 font-sans">
      {/* NEWSLETTER */}
      <div className="border-b bg-[#1B5E3B] text-white">
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
            <a
              href="https://www.expedia.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border rounded-lg p-3 h-14 w-28 flex items-center justify-center"
              aria-label="Expedia"
            >
              <img
                src={expediaLogo}
                alt="Expedia"
                className="h-full w-full object-contain"
              />
            </a>

            <a
              href="https://www.esewa.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border rounded-lg p-3 h-14 w-28 flex items-center justify-center"
              aria-label="eSewa"
            >
              <img
                src={esewaLogo}
                alt="eSewa"
                className="h-full w-full object-contain"
              />
            </a>

            <a
              href="https://www.booking.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border rounded-lg p-3 h-14 w-28 flex items-center justify-center"
              aria-label="Booking.com"
            >
              <img
                src={bookingLogo}
                alt="Booking.com"
                className="h-full w-full object-contain"
              />
            </a>

            <a
              href="https://www.agoda.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border rounded-lg p-3 h-14 w-28 flex items-center justify-center"
              aria-label="Agoda"
            >
              <img
                src={agodaLogo}
                alt="Agoda"
                className="h-full w-full object-contain"
              />
            </a>

            <a
              href="https://www.makemytrip.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border rounded-lg p-3 h-14 w-28 flex items-center justify-center"
              aria-label="MakeMyTrip"
            >
              <img
                src={makemytripLogo}
                alt="MakeMyTrip"
                className="h-full w-full object-contain"
              />
            </a>
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* LEFT */}
          <div className="max-w-[340px]">
            <p className="text-gray-600 leading-relaxed mb-6">
              Experience luxury, comfort, and serenity in the heart of Pokhara.
              Your memorable stay starts here.
            </p>

            <h4 className="text-lg font-semibold mb-4">We Accept</h4>

            <div className="flex gap-4">
              <a
                href="https://www.visa.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border rounded-lg p-2 h-12 w-12 flex items-center justify-center"
                aria-label="Visa"
              >
                <img src={visaLogo} alt="Visa" />
              </a>

              <a
                href="https://www.esewa.com.np/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border rounded-lg p-2 h-12 w-12 flex items-center justify-center"
                aria-label="eSewa"
              >
                <img src={esewaLogo} alt="eSewa" />
              </a>

              <a
                href="https://www.khalti.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border rounded-lg p-2 h-12 w-12 flex items-center justify-center"
                aria-label="Khalti"
              >
                <img src={khaltiLogo} alt="Khalti" />
              </a>

              <a
                href="https://www.paypal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border rounded-lg p-2 h-12 w-12 flex items-center justify-center"
                aria-label="PayPal"
              >
                <img src={paypalLogo} alt="PayPal" />
              </a>
            </div>
          </div>

          {/* CENTER */}
          <div className="text-center max-w-[320px] mx-auto">
            <div className="flex justify-center items-center gap-3 mb-4">
              <img src={logo} alt="Hotel Aashirwad" className="h-12" />
              <span className="text-xl font-semibold">Hotel Aashirwad</span>
            </div>

            <p className="text-gray-600 mb-6">Lakeside-6, Pokhara, Nepal</p>

            <div className="flex justify-center gap-4">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>

              <a
                href="https://www.tiktok.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition"
                aria-label="TikTok"
              >
                <FaTiktok size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex gap-16 max-w-[420px]">
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

            <div>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:+9779800000000"
                    className="flex items-center gap-3 text-gray-600 hover:text-black"
                  >
                    <Phone size={16} className="text-accent" />
                    +977 9800000000
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:info@hotelaashirwad.com"
                    className="flex items-center gap-3 text-gray-600 hover:text-black"
                  >
                    <Mail size={16} className="text-accent" />
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
            � {new Date().getFullYear()} Hotel Aashirwad. All rights reserved.
          </p>

          <p className="text-xs">
            Website by{" "}
            <a
              href="https://www.digisoftdevelopers.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F59E0B] hover:underline"
            >
              Digisoft Developers Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
