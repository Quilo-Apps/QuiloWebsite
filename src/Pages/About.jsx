import React, { useEffect, memo } from "react";
import { Wand2, Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
<div className="min-h-screen pb-32 sm:pb-20 lg:pb-40 text-white px-6 lg:px-16 bg-[#030014] flex flex-col items-center justify-center" id="About">

      <div className="text-center mb-8">
        <div className="relative group">
          <h2
            className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#fdb827] to-[#565669]"
            style={{
              backgroundImage: "linear-gradient(45deg, #fdb827 10%, #565669 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About Quilo
          </h2>
          <p
            className="mt-4 text-gray-300 text-lg sm:text-xl font-semibold flex items-center justify-center gap-3"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Wand2 className="w-6 h-6 text-purple-400 animate-spin" />
            Turning complex into user-friendly
            <Star className="w-6 h-6 text-yellow-400 animate-spin" />
          </p>
        </div>
      </div>

      <div className="text-center max-w-2xl space-y-6">
        <p
          className="text-lg lg:text-xl text-[#d3d3d3] leading-relaxed"
          data-aos="fade-right"
          data-aos-duration="1200"
        >
          We are three software engineers from Western University, two of whom hold dual degrees in Artificial Intelligence Engineering. Together, we have a talent for bringing ideas to life.
        </p>
        <p
          className="text-lg lg:text-xl text-[#d3d3d3] leading-relaxed"
          data-aos="fade-right"
          data-aos-duration="1400"
        >
          Whether it’s an app to create recipes or a machine learning solution to organize your products, we have the unique skills to make your vision a reality.
        </p>
      </div>
    </div>
  );
};

export default memo(AboutPage);
