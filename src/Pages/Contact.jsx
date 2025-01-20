import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: 'Sending Message...',
      html: 'Please wait while we send your message',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const form = e.target;
      await form.submit(); // Ensure backend connection for form submission

      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully!',
        icon: 'success',
        confirmButtonColor: '#6366f1',
        timer: 2000,
        timerProgressBar: true
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#6366f1'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Contact Form Section */}
      <div
        className="min-h-screen flex flex-col justify-center items-center bg-[#030014]" // Ensures the title and form are within the same section
        id="Contact"
      >
        {/* Contact Us Title */}
        <div className="text-center mb-10">
          <h2
            data-aos="fade-down"
            data-aos-duration="1000"
            className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#fdb827] to-[#565669]"
          >
            Contact Us
          </h2>
        </div>

        {/* Contact Form */}
        <div
          data-aos="fade-up"
          data-aos-duration="1200"
          className="bg-gradient-to-r from-[#fdb827]/20 via-[#565669]/20 to-[#fdb827]/20 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transition-all duration-300 hover:shadow-lg hover:shadow-[#fdb827]/20 w-full max-w-3xl"
        >
          <div className="flex justify-between items-start mb-8">
            <h2 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#fdb827] to-[#565669]">
              Get in Touch
            </h2>
            <Share2 className="w-10 h-10 text-[#fdb827] opacity-50" />
          </div>

          <form onSubmit={handleSubmit}>
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />

            {/* Name Field */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="relative group mb-6"
            >
              <User className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#fdb827] transition-colors" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full p-4 pl-12 bg-gradient-to-r from-[#fdb827]/20 to-[#565669]/20 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#fdb827]/30 transition-all duration-300 hover:border-[#fdb827]/30 disabled:opacity-50"
                required
              />
            </div>

            {/* Email Field */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="relative group mb-6"
            >
              <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#fdb827] transition-colors" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full p-4 pl-12 bg-gradient-to-r from-[#fdb827]/20 to-[#565669]/20 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#fdb827]/30 transition-all duration-300 hover:border-[#fdb827]/30 disabled:opacity-50"
                required
              />
            </div>

            {/* Message Field */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="relative group mb-6"
            >
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400 group-focus-within:text-[#fdb827] transition-colors" />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                disabled={isSubmitting}
                className="w-full resize-none p-4 pl-12 bg-gradient-to-r from-[#fdb827]/20 to-[#565669]/20 rounded-xl border border-white/20 placeholder-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-[#fdb827]/30 transition-all duration-300 hover:border-[#fdb827]/30 h-[9.9rem] disabled:opacity-50"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              data-aos="fade-up"
              data-aos-delay="400"
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-[#fdb827] to-[#565669] text-white py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#fdb827]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
