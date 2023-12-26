import useTranslation from "@/hooks/useTranslation";
import React from "react";
import { FaRegBuilding } from "react-icons/fa";
import { RiCalendarTodoLine } from "react-icons/ri";

const Education = () => {
  const { t } = useTranslation();
  const data = [
    {
      title: t("Graduated"),
      degree: t("General Baccalaureate"),
      address: t("Jean Baptiste Corot High School, Douai"),
      date: "2017 - 2021",
      list: [t("Mathematics"), t("Physical Sciences")],
    },
    {
      title: t("Not yet graduated"),
      degree: t("BUT Informatique"),
      address: t("University of Artois: IUT of Lens"),
      date: "2021 – 2024",
    },
  ];
  return (
    <div className="max-w-[1200px] px-6 mx-auto pb-20 pt-10">
      <h1 className="text-[#f5433d] font-bold text-5xl pb-3  text-center">
        Education
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
              <div className="flex justify-between items-center mb-6">
                <div className="bg-[#252424] py-3 text-gray-300 gap-2 flex items-center px-4 rounded-full">
                  <RiCalendarTodoLine />
                  <span className="text-sm">{item?.date}</span>
                </div>
                <div className="flex items-center  bg-[#211f1f] rounded-full px-4 py-1.5 max-w-[250px]">
                  <span className="text-gray-200 text-base font-medium">
                    {item?.title}
                  </span>
                </div>
              </div>
              <h2 className="text-gray-200 text-2xl font-medium mb-5">
                {item?.degree}
              </h2>
              <div
                className={`flex flex-wrap gap-2 ${
                  item?.list?.length > 0 ? "mb-6" : ""
                }`}
              >
                {item?.list?.map((listItem, idx) => {
                  return (
                    <div
                      key={idx}
                      className="py-2 bg-[#252424]  text-gray-300 gap-2 flex items-center px-4 rounded-full"
                    >
                      <span className="text-sm">{listItem}</span>
                    </div>
                  );
                })}
              </div>
              <div className=" py-3 text-gray-300 gap-2 flex items-center px-4 rounded-full">
                <FaRegBuilding className="" />
                <span className="text-sm">{item.address}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
