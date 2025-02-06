import React, { useState, useEffect } from "react";
import { Send, User, Mail, MessageSquare } from "lucide-react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: "Sending Message...",
      html: "Please wait while we send your message",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const serviceID = "service_t4mdvi5";
    const templateID = "template_0kghfh8";
    const userID = "JcAJpd7sH5di9mvtX";

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(() => {
        Swal.fire({
          title: "Success!",
          text: "Your message has been sent successfully!",
          icon: "success",
          confirmButtonColor: "#6366f1",
          timer: 2000,
          timerProgressBar: true,
        });
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong. Please try again later.",
          icon: "error",
          confirmButtonColor: "#6366f1",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#030014] py-10" id="Contact">
      <div className="text-center mb-10">
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fdb827] to-[#565669]"
        >
          Contact Us
        </h2>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        className="bg-gradient-to-r from-[#fdb827]/20 via-[#565669]/20 to-[#fdb827]/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 sm:p-10 transition-all duration-300 hover:shadow-lg hover:shadow-[#fdb827]/20 w-full max-w-3xl"
      >
        <form onSubmit={handleSubmit}>
          <div data-aos="fade-up" data-aos-delay="100" className="relative group mb-6">
            <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#fdb827] transition-colors" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full p-4 pl-12 bg-gradient-to-r from-[#fdb827]/20 to-[#565669]/20 rounded-xl border border-white/20 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-[#fdb827]/30 transition-all duration-300 hover:border-[#fdb827]/30 disabled:opacity-50"
              required
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="relative group mb-6">
            <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#fdb827] transition-colors" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full p-4 pl-12 bg-gradient-to-r from-[#fdb827]/20 to-[#565669]/20 rounded-xl border border-white/20 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-[#fdb827]/30 transition-all duration-300 hover:border-[#fdb827]/30 disabled:opacity-50"
              required
            />
          </div>

          <div data-aos="fade-up" data-aos-delay="300" className="relative group mb-6">
            <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#fdb827] transition-colors" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full resize-none p-4 pl-12 bg-gradient-to-r from-[#fdb827]/20 to-[#565669]/20 rounded-xl border border-white/20 placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-[#fdb827]/30 transition-all duration-300 hover:border-[#fdb827]/30 h-[9.9rem] disabled:opacity-50"
              required
            />
          </div>

          <button
            data-aos="fade-up"
            data-aos-delay="400"
            type="submit"
            className="w-full bg-gradient-to-r from-[#fdb827] to-[#565669] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#fdb827]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="w-5 h-5" />
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
