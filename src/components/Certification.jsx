import React from "react";
import Image from "next/image";
import UdemyLogo from "../../public/image/udemy-1.png";
import { FaEye } from "react-icons/fa";
import useTranslation from "@/hooks/useTranslation";

const Certification = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: t("CSS Training"),
      link: "https://www.udemy.com/certificate/UC-4dcfa636-8523-489a-a7c7-d5760dde1511/",
    },
    {
      title: t("Python Game Creation"),
      link: "https://www.udemy.com/certificate/UC-4dcfa636-8523-489a-a7c7-d5760dde1511/",
    },
  ];
  return (
    <div className="max-w-[1200px] px-6 mx-auto pt-10 pb-20">
      <h1 className="text-[#f5433d] font-bold text-5xl pb-3  text-center">
        {t("Certifications")}
      </h1>
      <div className="flex justify-center mb-12">
        <span className="w-28 h-1 bg-[#f5433d] rounded"></span>
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className=" bg-[#0C0C0C]  p-5 w-full rounded-2xl shadow-md flex flex-col"
            >
              <div className="flex gap-2 bg-black rounded-full px-0.5 py-0.5 max-w-[150px] mb-5">
                <Image
                  src={UdemyLogo}
                  alt="Udemy Logo"
                  className="w-12 bg-white rounded-full h-12 p-2"
                />
                <span className="flex self-center text-[#f5433d] text-xl font-bold ">
                  Udemy
                </span>
              </div>
              <h2 className="text-xl font-semibold my-2 text-gray-300 pb-4">
                {item?.title}
              </h2>
              <a
                href={item?.link}
                target="_blank"
                className="flex items-center gap-2 bg-[#252424] text-gray-300 border border-black py-1.5 px-3 max-w-[100px] transition-all hover:shadow-xl rounded-full"
              >
                <FaEye className="text-lg" />
                <span className=" font-medium text-base"> {t("View")} </span>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certification;
