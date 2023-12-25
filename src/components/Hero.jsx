import React from "react";
import Image from "next/image";
import Image1 from "../../public/image/joystick-xbox-360-gamepad-wallpaper-preview.jpg";
import Image2 from "../../public/image/Avatar.png";
import Image3 from "../../public/image/Cv_journee_theo.svg";

const Hero = () => {
  return (
    <div className="relative py-40 pb-6 mx-auto ">
      <div className="flex justify-center items-center">
        <div className="relative flex mb-20">
          <div className="relative">
            <Image src={Image1} alt="" />
          </div>
          <Image src={Image1} alt="" />
          <div className="absolute inset-0 block lg:flex justify-center text-center mt-0 md:mt-20 gap-8">
            <div>
              <div className="flex justify-center">
                <Image src={Image2} alt="" className="rounded-full w-60 h-60" />
              </div>
              <h1 className="text-white font-bold text-5xl md:text-7xl mb-10">
                JOURNEE THEO
              </h1>
              <a href={"/CV.pdf"} download target="_blank" className="bg-[#f5433d] flex items-center justify-center gap-2 max-w-[130px] rounded-full mx-auto py-2 px-6">
                <span className="text-white font-bold text-2xl">
                  CV
                </span>
                <Image src={Image3} alt="" className="w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
