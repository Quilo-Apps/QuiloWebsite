import React, { useState, useEffect, memo } from "react";
import {Mail, ExternalLink} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Color Variables
const BACKGROUND_COLOR = "#030014"; // Primary background color for the page
const GRADIENT_FROM_TITLE = "#fdb827"; 
const GRADIENT_TO_TITLE = "#565669"; 

const typingTexts = [
  "Innovate",
  "Build",
  "Transform",
  "Lead",
];

const TypingEffect = memo(() => {
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        setCurrentText((prev) => typingTexts[index].slice(0, prev.length + 1));
        if (currentText === typingTexts[index]) {
          setIsTyping(false);
        }
      } else {
        setCurrentText((prev) => prev.slice(0, prev.length - 1));
        if (currentText === "") {
          setIsTyping(true);
          setIndex((prevIndex) => (prevIndex + 1) % typingTexts.length);
        }
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, [currentText, isTyping, index]);

  return (
    <div className="text-3xl sm:text-4xl font-medium mt-4 text-white">
      <span>{currentText}</span>
      <span className="animate-blink">|</span>
    </div>
  );
});



const Title = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span
          className="absolute -inset-2 bg-gradient-to-r from-[#fdb827] to-[#565669] blur-2xl opacity-50"
          ></span>
        <span
          className="relative bg-gradient-to-r from-white to-white bg-clip-text text-transparent"
        >
          Digital
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span
          className="absolute -inset-2 bg-gradient-to-r from-[#fdb827] to-[#565669] blur-2xl opacity-50"
        ></span>
        <span
          className="relative bg-gradient-to-r from-[#fdb827] to-[#565669] bg-clip-text text-transparent"
        >
          Transformation
        </span>
      </span>
    </h1>
    <TypingEffect />
  </div>
));

const Button = memo(({ href, text, icon: Icon }) => (
  <a href={href} className="group relative inline-block">
    <div
      className={`absolute -inset-0.5 bg-gradient-to-r from-[#fdb827] to-[#565669] rounded-lg blur opacity-30 group-hover:opacity-70 transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-2`}
    ></div>
    <div className="relative px-5 py-3 rounded-lg bg-black/40 backdrop-blur-lg border border-gray-600 text-white font-medium flex items-center gap-2 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:bg-gradient-to-r from-[#232526] to-[#414345]">
      <Icon className="w-5 h-5 text-gray-300 transition-all duration-500 ease-in-out group-hover:text-[#fdb827]" />
      {text}
    </div>
    <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#fdb827]/30 to-[#565669]/30 blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-700 ease-in-out"></div>
  </a>
));


const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, offset: 10 });
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: BACKGROUND_COLOR }} id="Home">
      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="container mx-auto px-6 lg:px-0 min-h-screen">
          <div className="flex flex-col lg:flex-row items-center justify-center h-screen gap-8">
            <div className="w-full lg:w-1/2 space-y-6" data-aos="fade-right">
              <Title/>
              <p className={`text-white leading-relaxed`}>
                Building Seamless Digital Experiences with Creativity and Precision.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Button href="#Portfolio" text="Projects" icon={ExternalLink} />
                <Button href="#Contact" text="Contact" icon={Mail} />
              </div>
            </div>
            <div className="w-full lg:w-1/2" data-aos="fade-left">
            <img src={bird.jpg} className="w-16 h-16 mx-auto" /> {/* img tag for logo */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
