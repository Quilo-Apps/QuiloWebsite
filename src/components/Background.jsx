import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const blobRefs = useRef([]);
  const initialPositions = [
    { x: -4, y: 0 },
    { x: -4, y: 0 },
    { x: 20, y: -8 },
    { x: 20, y: -8 },
  ];

  const scrollData = useRef({ currentScroll: 0, requestId: null });

  useEffect(() => {
    const handleScroll = () => {
      const { currentScroll } = scrollData.current;
      const newScroll = window.pageYOffset;

      scrollData.current.currentScroll = newScroll;

      blobRefs.current.forEach((blob, index) => {
        const initialPos = initialPositions[index];

        // Dynamic offsets with more pronounced movement and rotation for extra flair
        const xOffset = Math.sin(newScroll / 100 + index * 0.5) * 400;
        const yOffset = Math.cos(newScroll / 100 + index * 0.5) * 60;
        const rotation = Math.sin(newScroll / 300 + index * 0.5) * 15;

        const x = initialPos.x + xOffset;
        const y = initialPos.y + yOffset;

        // Applying transformation with rotation and smooth transition
        blob.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
        blob.style.transition = "transform 1.4s ease-out";
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          ref={(ref) => (blobRefs.current[0] = ref)}
          className="absolute top-0 -left-4 w-96 h-96 bg-gradient-to-r from-[#fdb827] to-[#565669] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"
        ></div>
        <div
          ref={(ref) => (blobRefs.current[1] = ref)}
          className="absolute top-0 -right-4 w-96 h-96 bg-gradient-to-r from-[#fdb827] to-[#565669] rounded-full mix-blend-multiply filter blur-3xl opacity-50 hidden sm:block animate-pulse"
        ></div>
        <div
          ref={(ref) => (blobRefs.current[2] = ref)}
          className="absolute -bottom-8 left-[-40%] md:left-20 w-96 h-96 bg-gradient-to-l from-[#fdb827] to-[#565669] rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse"
        ></div>
        <div
          ref={(ref) => (blobRefs.current[3] = ref)}
          className="absolute -bottom-10 right-20 w-96 h-96 bg-gradient-to-l from-[#fdb827] to-[#565669] rounded-full mix-blend-multiply filter blur-3xl opacity-40 hidden sm:block animate-pulse"
        ></div>
      </div>

      {/* Adding a subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#fdb827] to-[#565669] opacity-10"></div>
    </div>
  );
};

export default AnimatedBackground;
