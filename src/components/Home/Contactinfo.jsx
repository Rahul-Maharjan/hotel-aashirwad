import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { useContactDetails } from "../../hooks/useContactDetails";

function ContactInfo() {
  const { data, loading } = useContactDetails();
  const API_URL = import.meta.env.VITE_API_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject_id: "1",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (loading) return null;

  const contactDetails = [
    {
      icon: <MapPin className="w-5 h-5 text-[#9b7b45]" />,
      title: "Our Address",
      description: data?.address || "Lakeside, Pokhara 33700, Nepal",
    },
    {
      icon: <Phone className="w-5 h-5 text-[#9b7b45]" />,
      title: "Phone Number",
      description: (
        <div className="flex flex-col">
          {data?.phones?.map((phone, index) => (
            <a key={index} href={`tel:${phone.replace(/\s+/g, '')}`} className="hover:text-[#9b7b45] transition-colors">{phone}</a>
          )) || <a href="tel:+9779856036622" className="hover:text-[#9b7b45] transition-colors">+977 9856036622</a>}
        </div>
      ),
    },
    {
      icon: <Mail className="w-5 h-5 text-[#9b7b45]" />,
      title: "Email Us",
      description: (
        <div className="flex flex-col">
            {data?.emails?.map((email, index) => (
                <a key={index} href={`mailto:${email}`} className="hover:text-[#9b7b45] transition-colors">{email}</a>
            )) || <a href="mailto:info@hotelaashirwad.com" className="hover:text-[#9b7b45] transition-colors">info@hotelaashirwad.com</a>}
        </div>
      ),
    },
    {
      icon: <Clock className="w-5 h-5 text-[#9b7b45]" />,
      title: "Opening Hours",
      description: data?.business_hours || "Open 24/7 (Including Holidays)",
    },
  ];

  const validateField = (name, value) => {
    const trimmedValue = value ? String(value).trim() : "";

    switch (name) {
      case "name":
        if (!trimmedValue) return "Required";
        return "";
      case "email":
        if (!trimmedValue) return "Required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) return "Invalid email";
        return "";
      case "message":
        if (!trimmedValue) return "Required";
        return "";
      default:
        return "";
    }
  };

  const validateForm = () => {
    const nextErrors = {};
    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      if (error) nextErrors[field] = error;
    });
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validateForm();
    setTouched({ name: true, email: true, phone: true, subject_id: true, message: true });
    setErrors(nextErrors);
    
    if (Object.keys(nextErrors).length > 0) {
      toast.error("Please fill all required fields correctly.");
      return;
    }

    setIsSubmitting(true);
    const loadingToast = toast.loading("Sending your message...");

    try {
      const payload = {
        ...formData,
        subject_id: parseInt(formData.subject_id),
      };

      await axios.post(`${API_URL}/api/v1/customer-messages`, payload);
      
      toast.success("Message sent successfully! We will get back to you soon.", { id: loadingToast });
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject_id: "1",
        message: "",
      });
      setTouched({});
    } catch (error) {
      console.error("Error sending message:", error);
      const errorMessage = error.response?.data?.message || "Failed to send message. Please try again later.";
      toast.error(errorMessage, { id: loadingToast });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white">
      {/* Top Split Content */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12 py-16 lg:py-24 grid lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* LEFT COMPONENT: Information & Details */}
        <div className="flex flex-col justify-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-[#9b7b45] mb-4">
            {data?.section_title || "Get In Touch"}
          </h2>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#0f1f47] leading-tight mb-6">
            {data?.heading || "We’d Love to Hear From You"}
          </h1>
          <p className="text-[#4f4f4f] text-sm sm:text-base leading-relaxed mb-12">
            {data?.description || "Whether you have questions about our rooms, need assistance planning your vacation in Pokhara, or want to make a special request—our team is available 24/7 to assist you."}
          </p>

          <div className="space-y-8">
            {contactDetails.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#0f1f47] mb-1">
                    {item.title}
                  </h3>
                  <div className="text-sm text-[#4f4f4f]">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COMPONENT: Minimal Form */}
        <div className="bg-[#f7f5f1] p-8 sm:p-12 border border-[#e5e5e5]">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-[#0f1f47] mb-2">Name *</label>
                <input
                  type="text" name="name"
                  value={formData.name} onChange={handleChange} onBlur={handleBlur}
                  className="w-full bg-transparent border-b border-[#d8d1c2] py-2 text-sm text-[#2d2d2d] focus:outline-none focus:border-[#0f1f47] transition-colors"
                />
                {errors.name && touched.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-[#0f1f47] mb-2">Email *</label>
                <input
                  type="email" name="email"
                  value={formData.email} onChange={handleChange} onBlur={handleBlur}
                  className="w-full bg-transparent border-b border-[#d8d1c2] py-2 text-sm text-[#2d2d2d] focus:outline-none focus:border-[#0f1f47] transition-colors"
                />
                {errors.email && touched.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Phone */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-[#0f1f47] mb-2">Phone</label>
                <input
                  type="text" name="phone"
                  value={formData.phone} onChange={handleChange} onBlur={handleBlur}
                  className="w-full bg-transparent border-b border-[#d8d1c2] py-2 text-sm text-[#2d2d2d] focus:outline-none focus:border-[#0f1f47] transition-colors"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-xs uppercase tracking-widest font-semibold text-[#0f1f47] mb-2">Subject</label>
                <select
                  name="subject_id"
                  value={formData.subject_id} onChange={handleChange} onBlur={handleBlur}
                  className="w-full bg-transparent border-b border-[#d8d1c2] py-2 text-sm text-[#2d2d2d] focus:outline-none focus:border-[#0f1f47] transition-colors appearance-none"
                >
                  <option value="1">General Inquiry</option>
                  <option value="2">Booking Request</option>
                  <option value="3">Guest Support</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div className="pt-2">
              <label className="block text-xs uppercase tracking-widest font-semibold text-[#0f1f47] mb-2">Message *</label>
              <textarea
                name="message" rows="4"
                value={formData.message} onChange={handleChange} onBlur={handleBlur}
                className="w-full bg-transparent border-b border-[#d8d1c2] py-2 text-sm text-[#2d2d2d] focus:outline-none focus:border-[#0f1f47] transition-colors resize-none"
              />
              {errors.message && touched.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full py-4 text-xs font-bold uppercase tracking-[0.2em] text-white bg-[#0f1f47] hover:bg-[#9b7b45] transition-colors focus:outline-none ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* FULL WIDTH MAP */}
      <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px]">
        <iframe
          src={data?.map_url || "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8716.308555362537!2d83.958955!3d28.212722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595e339626bc3%3A0xe82e156a04956623!2sHotel%20Aashirwad!5e1!3m2!1sen!2snp!4v1752581318273!5m2!1sen!2snp"}
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
          loading="lazy"
          title="Hotel Location"
        />
      </div>
    </section>
  );
}

export default ContactInfo;
