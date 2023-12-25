import React from "react";
import Image from "next/image";
import ScrumProject from "../../public/image/ScrumProject.png";
import Portfolio from "../../public/image/portfolio.png";
import Html5Icon from "../../public/image/html-5.png";
import CssIcon from "../../public/image/css-3.png";
import JavaScriptIcon from "../../public/image/javascript-logo.png";
import GitIcon from "../../public/image/git.png";
import { FaLink } from "react-icons/fa";
import useTranslation from "@/hooks/useTranslation";

const Project = () => {
  const { t } = useTranslation();

  const data = [
    {
      title: t("Portfolio Website"),
      websiteLink: "https://theojs62.github.io/Portfolio/index.html",
      projectImage: Portfolio,
      techStack: [
        {
          title: "HTML",
          logo: Html5Icon,
        },
        {
          title: "CSS",
          logo: CssIcon,
        },
        {
          title: "JavaScript",
          logo: JavaScriptIcon,
        },
        {
          title: "Git",
          logo: GitIcon,
        },
      ],
    },
    {
      title: t("Database Project Scrum Method"),
      websiteLink: "https://theojs62.github.io/Portfolio/pdf/bd.pdf",
      projectImage: ScrumProject,
      techStack: [
        {
          title: "BDNF",
          logo: "",
        },
        {
          title: "GIT",
          logo: GitIcon,
        },
        {
          title: "Portfolio",
          logo: "",
        },
      ],
    },
  ];

  return (
    <div className="max-w-[1200px] px-6 mx-auto pt-10 pb-20">
      <h1 className="text-[#f5433d] font-bold text-5xl pb-4 text-center">
        {t("Projects")}
      </h1>
      <div className="flex justify-center mb-12">
        <span className="w-28 h-1 bg-[#f5433d] rounded"></span>
      </div>
      <div className="max-w-3xl mx-auto">
        {data?.map((item, index) => {
          return (
            <div
              className="grid grid-cols-1 md:grid-cols-5 bg-[#0c0c0c] text-gray-300 gap-10 mb-5 rounded-2xl"
              key={index}
            >
              <div className=" col-span-1 md:col-span-2">
                <Image
                  src={item?.projectImage}
                  alt=""
                  className="w-full md:max-h-[280px] h-full  object-cover rounded-t-2xl md:rounded-l-2xl"
                />
              </div>
              <div className="col-span-1 md:col-span-3 items-center flex w-full py-8 px-4">
                <div>
                  <h2 className="text-2xl font-bold mb-4">{item?.title}</h2>
                  <h2 className="text-lg font-medium mb-4">
                    {"Technology & Language:"}
                  </h2>
                  <div className="flex gap-2 flex-wrap mb-10">
                    {item?.techStack?.map((stack, idx) => {
                      return (
                        <div
                          className="flex items-center gap-1 bg-[#252424] rounded-full px-4 py-[5px]"
                          key={idx}
                        >
                          {stack?.logo && (
                            <Image
                              src={stack?.logo}
                              alt={stack?.title}
                              className="w-5"
                            />
                          )}
                          <p className="text-gray-100 text-xs font-semibold">
                            {stack?.title}
                          </p>
                        </div>
                      );
                    })}
                  </div>

                  <a
                    href={item?.websiteLink}
                    target="_blank"
                    className="flex items-center border max-w-[110px] justify-center border-gray-200 rounded-full px-2 py-1.5 gap-3 transition-all hover:shadow-md "
                  >
                    <div>
                      <FaLink className="text-base" />
                    </div>
                    <span className="text-gray-200 font-medium text-base">
                      Visit
                    </span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
