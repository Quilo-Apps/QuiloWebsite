import React, { useEffect, memo } from "react";
import { Award, Globe, Sparkles } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div
      className="h-auto pb-20 text-white overflow-hidden px-6 lg:px-16 min-h-screen bg-[#030014] overflow-hidden"
      id="About"
    >
      <div className="text-center mb-12">
        <div className="relative group">
          <h2
            className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#fdb827] to-[#565669]"
            style={{
              color: "#fdb827",
              backgroundImage: "linear-gradient(45deg, #fdb827 10%, #565669 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Quilo
          </h2>
          <p
            className="mt-4 text-gray-300 text-lg sm:text-xl"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Sparkles className="inline-block w-6 h-6 text-yellow-400" />
            Empowering the future of app development
            <Sparkles className="inline-block w-6 h-6 text-yellow-400" />
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <p
            className="text-lg lg:text-xl text-[#d3d3d3] leading-relaxed"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            Quilo is at the forefront of app innovation, turning visionary ideas into
            transformative mobile solutions. Our team thrives on creating
            seamless, user-centered designs that elevate the digital experience.
          </p>
          <p
            className="text-lg lg:text-xl text-[#d3d3d3] leading-relaxed"
            data-aos="fade-right"
            data-aos-duration="1400"
          >
            From leveraging the latest technologies like React Native and Flutter
            to crafting bespoke iOS and Android apps, Quilo offers comprehensive
            end-to-end solutions tailored to your unique needs.
          </p>
        </div>

        <div className="flex justify-center">
          <div
            className="relative group"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full bg-gradient-to-tr from-[#fdb827] to-[#565669] p-1">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                <img
                  src="/QuiloLogo.png"
                  alt="Quilo Logo"
                  className="w-5/6 h-5/6 object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
  {/* Years of Experience */}
  <button
    onClick={() => window.location.href = "#Portfolio"}
    className="relative bg-[#232526] rounded-2xl p-8 shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
    data-aos="fade-right"
    data-aos-duration="1200"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-[#fdb827] via-[#565669] to-[#fdb827] opacity-20 rounded-2xl" />
    <div className="relative z-10 flex items-center mb-4">
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#fdb827] to-[#565669] rounded-full">
        <Award className="w-8 h-8 text-white" />
      </div>
      <span className="ml-4 text-3xl font-bold text-white">10+</span>
    </div>
    <div className="relative z-10">
      <p className="text-gray-300 text-lg font-medium">Years of Experience</p>
      <p className="text-gray-400 text-sm">Delivering excellence in app development</p>
    </div>
  </button>

  {/* Global Outreach */}
  <button
    onClick={() => window.location.href = "#Portfolio"}
    className="relative bg-[#232526] rounded-2xl p-8 shadow-lg transition-transform transform hover:scale-105 focus:outline-none"
    data-aos="fade-left"
    data-aos-duration="1200"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-[#fdb827] via-[#565669] to-[#fdb827] opacity-20 rounded-2xl" />
    <div className="relative z-10 flex items-center mb-4">
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#fdb827] to-[#565669] rounded-full">
        <Globe className="w-8 h-8 text-white" />
      </div>
      <span className="ml-4 text-3xl font-bold text-white">Global</span>
    </div>
    <div className="relative z-10">
      <p className="text-gray-300 text-lg font-medium">Worldwide Reach</p>
      <p className="text-gray-400 text-sm">Partnering with clients around the globe</p>
    </div>
  </button>
</div>

    </div>
  );
};

export default memo(AboutPage);
