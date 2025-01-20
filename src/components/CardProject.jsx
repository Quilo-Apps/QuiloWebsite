import React from "react";

const CardProject = ({ Img, Title, Description }) => {
  return (
    <div className="group relative w-full">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#030014] to-[#565669] backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-[#fdb827]/20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#fdb827]/10 via-[#565669]/10 to-[#030014]/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

        <div className="relative p-5 z-10">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={Img}
              alt={Title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="mt-4 space-y-3">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-[#fdb827] via-[#565669] to-[#fdb827] bg-clip-text text-transparent">
              {Title}
            </h3>

            <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2">
              {Description}
            </p>
          </div>

          <div className="absolute inset-0 border border-white/0 group-hover:border-[#fdb827]/50 rounded-xl transition-colors duration-300 -z-50"></div>
        </div>
      </div>
    </div>
  );
};

export default CardProject;
