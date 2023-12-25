import React from "react";
import Image from "next/image";
import charlie_solutions_logo from "../../public/image/charlie_solutions_logo.jpeg";
import axter_ltd_logo from "../../public/image/axter_ltd_logo.jpeg";
import { PiPaperPlaneRightDuotone } from "react-icons/pi";
import { RiCalendarTodoLine } from "react-icons/ri";
import useTranslation from "@/hooks/useTranslation";

const Experience = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: "Charlie Solutions",
      address: "225 Rue des Templiers, France",
      date: t("April 2023 – June 2023"),
      compayLogo: charlie_solutions_logo,
      list: [
        t("Computer Science Internship"),
        t("Computer Development (PHP)(Laravel)"),
        t("Sensor Configuration, Agile Method: Scrum"),
      ],
    },
    {
      title: "Axter Ltd",
      address: "Harbour Landing, UK",
      date: t("Summer 2021 and Summer 2022"),
      compayLogo: axter_ltd_logo,
      list: [
        t("Courchelettes"),
        t("Temporary Worker"),
        t("Reinforce teamwork"),
        t("Independence"),
        t("Dynamism"),
      ],
    },
  ];

  return (
    <div className="max-w-[1200px] px-6 mx-auto pt-10 pb-20">
      <h1 className="text-[#f5433d] font-bold text-5xl pb-3  text-center">
        {t("Experience")}
      </h1>
      <div className="flex justify-center mb-12">
        <span className="w-28 h-1 bg-[#f5433d] rounded"></span>
      </div>
      <div className="max-w-3xl mx-auto grid grid-cols-1 gap-4">
        {data?.map((item, index) => {
          return (
            <div
              key={index}
              className=" bg-[#0C0C0C]  p-5 w-full rounded-2xl shadow-md flex flex-col"
            >
              <div className="flex flex-col sm:flex-row sm:justify-between justify-start sm:items-center">
                <div className="flex items-center gap-3 bg-black rounded-full pl-1 pr-4 py-0.5 max-w-[250px] mb-5">
                  <Image
                    src={item?.compayLogo}
                    alt="Udemy Logo"
                    className="w-16 bg-white rounded-full h-16 p-2"
                  />
                  <div className="py-2">
                    <span className="flex self-center text-[#f5433d] text-base font-bold mb-1">
                      {item?.title}
                    </span>
                    <span className="text-xs font-bold text-gray-300 block">
                      {item?.address}
                    </span>
                  </div>
                </div>
                <div className="bg-[#252424] py-3 text-gray-300 max-w-[220px] justify-center gap-2 flex items-center px-4 rounded-full mb-10 sm:mb-0">
                  <RiCalendarTodoLine />
                  <span className="text-sm">{item?.date}</span>
                </div>
              </div>
              <div>
                {item?.list?.map((listItem, idx) => {
                  return (
                    <div
                      key={idx}
                      className=" py-3 text-gray-300 gap-2 flex items-center px-4 rounded-full"
                    >
                      <PiPaperPlaneRightDuotone />
                      <span className="text-sm">{listItem}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
