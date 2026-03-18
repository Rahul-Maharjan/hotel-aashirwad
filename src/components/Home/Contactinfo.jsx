import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const contactDetails = [
  {
    icon: <FaMapMarkerAlt className="text-xl text-[#F59E0B]" />,
    title: "Our Address",
    description: "Lakeside, Pokhara 33700, Nepal",
  },
  {
    icon: <FaPhoneAlt className="text-xl text-[#F59E0B]" />,
    title: "Phone Number",
    description: (
      <div className="flex flex-col">
        <a href="tel:+9779800000000">+977 9800000000</a>
        <a href="tel:+977061000000">+977 061-000000</a>
      </div>
    ),
  },
  {
    icon: <FaEnvelope className="text-xl text-[#F59E0B]" />,
    title: "Email Us",
    description: (
      <a href="mailto:info@hotelaashirwad.com">info@hotelaashirwad.com</a>
    ),
  },
  {
    icon: <FaClock className="text-xl text-[#F59E0B]" />,
    title: "Opening Hours",
    description: "Open 24/7 (Including Holidays)",
  },
];

function ContactInfo() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    const trimmedValue = value.trim();

    switch (name) {
      case "name":
        if (!trimmedValue) return "Full name is required.";
        if (trimmedValue.length < 2) return "Full name must be at least 2 characters.";
        return "";
      case "email":
        if (!trimmedValue) return "Email is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
          return "Enter a valid email address.";
        }
        return "";
      case "phone":
        if (!trimmedValue) return "";
        if (!/^\+?[0-9\s-]{7,15}$/.test(trimmedValue)) {
          return "Enter a valid phone number.";
        }
        return "";
      case "message":
        if (!trimmedValue) return "Message is required.";
        if (trimmedValue.length < 10) return "Message must be at least 10 characters.";
        return "";
      default:
        return "";
    }
  };

  const validateForm = () => {
    const nextErrors = {};

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) {
        nextErrors[field] = error;
      }
    });

    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validateForm();

    setTouched({
      name: true,
      email: true,
      phone: true,
      subject: true,
      message: true,
    });
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    console.log(formData);
  };

  return (
    <section className="bg-[#f5f3ef] py-16 lg:py-20">
      <div className="mx-auto max-w-6xl space-y-10 px-4 sm:px-6 lg:space-y-12 lg:px-8">
        <div className="mx-auto max-w-xl px-3 text-center sm:max-w-2xl sm:px-4 lg:max-w-3xl">
          <h2 className="text-2xl font-light uppercase tracking-[0.12em] text-slate-900 sm:text-3xl sm:tracking-[0.16em] lg:text-4xl lg:tracking-[0.22em]">
            Connect With Us
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-600 sm:mt-5 sm:max-w-xl sm:text-base sm:leading-7 lg:max-w-2xl lg:text-lg lg:leading-8">
            Should you have any questions or general enquiries you can contact
            us using the form below.
          </p>
        </div>
        {/* ================= FORM (TOP) ================= */}
        <div className="mx-auto max-w-4xl border border-black/5 bg-[#e6e1d9] p-6 sm:p-8 lg:p-10 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
            <form onSubmit={handleSubmit} className="space-y-10">
          {/* ROW 1 */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <label className="text-sm text-gray-600">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.name)}
                className="w-full border-b border-black/40 bg-transparent py-2 outline-none focus:border-black"
              />
              {errors.name && touched.name ? (
                <p className="mt-2 text-sm text-red-600">{errors.name}</p>
              ) : null}
            </div>

            <div>
              <label className="text-sm text-gray-600">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.email)}
                className="w-full border-b border-black/40 bg-transparent py-2 outline-none focus:border-black"
              />
              {errors.email && touched.email ? (
                <p className="mt-2 text-sm text-red-600">{errors.email}</p>
              ) : null}
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <label className="text-sm text-gray-600">Phone</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                aria-invalid={Boolean(errors.phone)}
                className="w-full border-b border-black/40 bg-transparent py-2 outline-none focus:border-black"
              />
              {errors.phone && touched.phone ? (
                <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
              ) : null}
            </div>

            <div>
              <label className="text-sm text-gray-600">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className="w-full border-b border-black/40 bg-transparent py-2 outline-none focus:border-black"
              >
                <option value="">Select</option>
                <option>Booking</option>
                <option>Support</option>
                <option>General</option>
              </select>
            </div>
          </div>

          {/* MESSAGE */}
          <div>
            <label className="text-sm text-gray-600">
              The team at Hotel Aashirwad are waiting to hear from you
            </label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              aria-invalid={Boolean(errors.message)}
              className="w-full border border-black/40 mt-3 p-3 outline-none focus:border-black resize-none"
            />
            {errors.message && touched.message ? (
              <p className="mt-2 text-sm text-red-600">{errors.message}</p>
            ) : null}
            <p className="text-xs text-gray-500 mt-2">
              We will only use this information to process your request.
            </p>
          </div>

          {/* CHECKBOX */}
          <div className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-sm text-gray-600">
              Please tick to receive newsletters with exclusive offers and
              updates
            </p>
          </div>

          {/* BUTTON */}
          <button className="border border-black px-8 py-3 text-sm tracking-widest hover:bg-black hover:text-white transition">
            SUBMIT
          </button>
        </form>
        </div>
        {/* ================= BOTTOM SECTION ================= */}
        <div className="mx-auto grid max-w-[1180px] gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:items-start xl:gap-12">
          {/* LEFT: CONTACT INFO */}
          <div className="px-1 py-2 sm:px-2">
            <h2 className="mb-6 text-2xl font-light tracking-[0.12em] sm:mb-7 sm:text-3xl sm:tracking-[0.15em] lg:mb-8 lg:tracking-[0.18em]">
              Contact Info
            </h2>

            {contactDetails.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 border-b border-[#efe7da] py-5 first:pt-0 last:border-b-0 last:pb-0"
              >
                <div className="mt-1 flex h-11 w-11 items-center justify-center rounded-full bg-[#fff5e3]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <div className="mt-1 text-base leading-7 text-gray-600">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: MAP */}
          <div className="mx-auto lg:mx-0 lg:justify-self-end lg:ml-6 overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.06)] w-full max-w-[500px] lg:max-w-none lg:w-[calc(100%+1.75rem)]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8716.308555362537!2d83.958955!3d28.212722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595e339626bc3%3A0xe82e156a04956623!2sHotel%20Aashirwad!5e1!3m2!1sen!2snp!4v1752581318273!5m2!1sen!2snp"
              className="h-[360px] w-full border-0 md:h-[420px] lg:h-full lg:min-h-[520px]"
              loading="lazy"
              title="Hotel Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactInfo;
