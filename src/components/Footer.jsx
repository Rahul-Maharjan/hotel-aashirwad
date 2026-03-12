import { FaFacebookF, FaInstagram, FaWhatsapp, FaChevronUp, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Footer Section */}
      <footer className="bg-[#1e2a54] text-white py-16 px-4 md:px-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white tracking-wide">Hotel Aashirwad</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Experience luxury, comfort, and serenity in the heart of Pokhara. Your memorable stay starts here.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="#" className="hover:text-[#F59E0B] transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-[#F59E0B] transition">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/reviews">Reviews</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>24/7 Room Service</li>
              <li>Restaurant & Bar</li>
              <li>Laundry</li>
              <li>Free Wi-Fi</li>
              <li>Parking</li>
              <li>Concierge</li>
            </ul>
          </div>

          {/* Column 4 */}
            <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>

            <div className="flex items-start gap-3 text-sm text-gray-300 mb-3">
                <FaMapMarkerAlt className="text-lg text-yellow-400 mt-1" />
                <p>
                Lakeside-6, Pokhara, Nepal
                <a
                    href="https://maps.app.goo.gl/i5jTx8u39LbES73a8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 underline block mt-1"
                >
                    View on Map
                </a>
                </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-300 mb-2">
                <FaPhone className="text-lg text-yellow-400" />
                <a href="tel:+9779800000000" className="hover:text-[#F59E0B] transition">
                +977 9800000000
                </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-300">
                <FaEnvelope className="text-lg text-yellow-400" />
                <a href="mailto:info@tophotelpokhara.com" className="hover:text-[#F59E0B] transition">
                info@tophotelpokhara.com
                </a>
            </div>

            {/* Optional CTA Button in Footer */}
            <a
                href="/#/contact"
                className="inline-block mt-5 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-full text-sm shadow-md transition-all"
            >
                Contact Us
            </a>
            </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} Hotel Aashirwad. All rights reserved.
          </p>
          <p className="mt-2 text-xs">
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
      </footer>

      {/* Scroll to Top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 right-5 z-50 bg-[#F59E0B] hover:bg-[#d18a00] text-white p-3 rounded-full shadow-lg transition"
        >
          <FaChevronUp />
        </button>
      )}

      {/* WhatsApp Chat Floating Icon */}
      <a
        href="https://wa.me/9779800000000?text=Hello%20Top%20Hotel%20Aashirwad!%20I%20have%20a%20question."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all animate-bounce"
      >
        <FaWhatsapp className="text-xl" />
      </a>
    </>
  );
};

export default Footer;
