import React, { useState, useEffect, useRef, memo } from "react";
import { Mail, ExternalLink } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import AstronautScene from "../components/Astronaut";

const BACKGROUND_COLOR = "#030014";
const typingTexts = ["Develop", "Connect", "Grow"];

const TypingEffect = memo(() => {
  const [index, setIndex] = useState(0);
  const currentTextRef = useRef("");
  const [isTyping, setIsTyping] = useState(true);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTyping) {
        currentTextRef.current = typingTexts[index].slice(0, currentTextRef.current.length + 1);
        setDisplayText(currentTextRef.current);
        if (currentTextRef.current === typingTexts[index]) setIsTyping(false);
      } else {
        currentTextRef.current = currentTextRef.current.slice(0, -1);
        setDisplayText(currentTextRef.current);
        if (currentTextRef.current === "") {
          setIsTyping(true);
          setIndex((prevIndex) => (prevIndex + 1) % typingTexts.length);
        }
      }
    }, 150);
    return () => clearInterval(typingInterval);
  }, [index, isTyping]);

  return (
    <div className="text-3xl sm:text-4xl font-medium mt-4 text-white">
      <span>{displayText}</span>
      <span className="animate-blink">|</span>
    </div>
  );
});

const Title = memo(() => (
  <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
      <span className="relative inline-block">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#fdb827] to-[#565669] blur-2xl opacity-50"></span>
        <span className="relative bg-gradient-to-r from-white to-white bg-clip-text text-transparent">
          Making your
        </span>
      </span>
      <br />
      <span className="relative inline-block mt-2">
        <span className="absolute -inset-2 bg-gradient-to-r from-[#fdb827] to-[#565669] blur-2xl opacity-50"></span>
        <span className="relative bg-gradient-to-r from-[#fdb827] to-[#565669] bg-clip-text text-transparent">
          ideas a reality
        </span>
      </span>
    </h1>
    <TypingEffect />
  </div>
));

const Button = memo(({ href, text, icon: Icon }) => (
  <a href={href} className="group relative inline-block">
    <div className="absolute -inset-0.5 bg-gradient-to-r from-[#fdb827] to-[#565669] rounded-lg blur opacity-30 group-hover:opacity-70 transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:rotate-2"></div>
    <div className="relative px-6 py-4 sm:px-5 sm:py-3 rounded-lg bg-black/40 backdrop-blur-lg border border-gray-600 text-white font-medium flex items-center gap-3 transition-all duration-500 ease-in-out group-hover:scale-105 group-hover:shadow-xl group-hover:bg-gradient-to-r from-[#232526] to-[#414345]">
      <Icon className="w-5 h-5 text-gray-300 transition-all duration-500 ease-in-out group-hover:text-[#fdb827]" />
      {text}
    </div>
    <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-[#fdb827]/30 to-[#565669]/30 blur-2xl opacity-0 group-hover:opacity-50 transition-all duration-700 ease-in-out"></div>
  </a>
));

const Home = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    AOS.init({ once: true, offset: 0 });
  }, []);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen pb-20 pt-24 sm:pt-0" style={{ backgroundColor: BACKGROUND_COLOR }} id="Home">
      <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
        <div className="container mx-auto px-6 lg:px-0 min-h-screen">
        <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen gap-8">
            <div className="w-full lg:w-1/2 space-y-6" data-aos="fade-right">
              <Title />
              <p className="text-white leading-relaxed">
                Bridging the gap between business and consumers with digital applications.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Button href="#Portfolio" text="Projects" icon={ExternalLink} />
                <Button href="#Contact" text="Contact" icon={Mail} />
              </div>
            </div>
            <div className="w-full max-w-sm sm:max-w-md lg:w-1/2 relative group mt-[-10px] sm:mt-0 h-[200px] sm:h-auto" data-aos="fade-left">
              <AstronautScene />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
