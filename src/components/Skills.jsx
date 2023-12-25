import React from "react";
import Image from "next/image";
import Html5Icon from "../../public/image/html-5.png";
import CssIcon from "../../public/image/css-3.png";
import FigmaIcon from "../../public/image/figma (1).png";
import JavaScriptIcon from "../../public/image/javascript-logo.png";
import BootstrapIcon from "../../public/image/bootstrap.png";
import ReactIcon from "../../public/image/react.png";
import PhpIcon from "../../public/image/php-logo.png";
import JavaIcon from "../../public/image/java-coffee-cup-logo--v1.png";
import GitIcon from "../../public/image/git.png";
import SpringIcon from "../../public/image/spring.png";
import SQLIcon from "../../public/image/sql.png";
import MongoIcon from "../../public/image/MongoDB.png";
import PythonIcon from "../../public/image/python--v2.png";
import VSCodeIcon from "../../public/image/vs code.png";
import EclipseIcon from "../../public/image/Eclipse.png";
import JetBrainsIcon from "../../public/image/Jet Brains.jpeg";
import GitlabIcon from "../../public/image/gitlab.png";
import GithubIcon from "../../public/image/github.png";
import NotionIcon from "../../public/image/Notion.png";
import JiraIcon from "../../public/image/jira.png";
import Adobe_XD from "../../public/image/Adobe_XD-Logo.wine.png";
import insomnia from "../../public/image/insomnia-logo.png";
import useTranslation from "@/hooks/useTranslation";

const Skills = () => {
  const { t } = useTranslation();
  const designTools = [
    { icon: FigmaIcon, name: "Figma" },
    { icon: Adobe_XD, name: "Adobe XD" },
  ];

  const technologies = [
    { icon: Html5Icon, name: "HTML5" },
    { icon: CssIcon, name: "CSS3" },
    { icon: JavaScriptIcon, name: "JavaScript" },
    { icon: BootstrapIcon, name: "Bootstrap" },
    { icon: ReactIcon, name: "React" },
    { icon: PhpIcon, name: "PHP" },
    { icon: JavaIcon, name: "Java" },
    { icon: GitIcon, name: "Git" },
    { icon: SpringIcon, name: "Spring" },
    { icon: SQLIcon, name: "SQL" },
    { icon: MongoIcon, name: "MongoDB" },
    { icon: PythonIcon, name: "Python" },
  ];
  const management = [
    { icon: VSCodeIcon, name: "VS Code" },
    { icon: EclipseIcon, name: "Eclipse" },
    { icon: JetBrainsIcon, name: "JetBrains" },
    { icon: GitlabIcon, name: "GitLab" },
    { icon: GithubIcon, name: "GitHub" },
    { icon: NotionIcon, name: "Notion" },
    { icon: JiraIcon, name: "Jira" },
    { icon: insomnia, name: "Insomnia" },
  ];

  return (
    <div className="mx-auto max-w-[1200px] px-6 pt-40 pb-20">
      <h1 className="text-[#f5433d] font-bold text-5xl pb-2 text-center">
        {t("Skills")}
      </h1>
      <div className="flex justify-center mb-20">
        <span className="w-20 h-1 bg-[#f5433d] rounded"></span>
      </div>
      <p className="text-4xl text-gray-300 my-6 text-center italic">
        {t("Design Tools")}
      </p>
      <div className="flex gap-3 justify-center mb-20">
        {designTools.map((tool, index) => (
          <div
            key={index}
            className="text-center flex bg-[#101010] gap-4 group items-center py-2 px-6  transition-all transform hover:scale-105 rounded-full duration-500"
          >
            <Image
              src={tool.icon}
              alt={tool.name}
              className="transition-all duration-700 group-hover:rotate-[360deg] rotate-0 w-6"
            />
            <p className="text-gray-300 text-base  font-semibold">
              {tool.name}
            </p>
          </div>
        ))}
      </div>
      <div className="mb-20">
        <h2 className="text-gray-300 text-4xl my-10 text-center italic">
          {t("Technologies & Language")}
        </h2>
        <div className="flex flex-wrap justify-center max-w-3xl mx-auto gap-3">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center bg-[#101010] gap-4 group  py-2 px-6  transition-all transform hover:scale-105 rounded-full duration-500"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                className="transition-all duration-700 group-hover:rotate-[360deg] rotate-0 w-6"
              />
              <p className="text-gray-300 text-base font-semibold">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-gray-300 text-4xl my-10 text-center italic">
          {t("Management & IDE")}
        </h2>
        <div className="flex flex-wrap justify-center max-w-3xl mx-auto gap-4">
          {management.map((tech, index) => (
            <div
              key={index}
              className="flex items-center bg-[#101010] gap-4 group  py-2 px-6  transition-all transform hover:scale-105 rounded-full duration-500"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                className="transition-all duration-700 group-hover:rotate-[360deg] rotate-0 w-6"
              />
              <p className="text-gray-300 text-base font-semibold">
                {tech.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
