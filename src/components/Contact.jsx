import React from "react";
import Image from "next/image";
import GithubIcon from "../../public/image/github.png";
import GmailIcon from "../../public/image/gmail.png";
import InstagramIcon from "../../public/image/instagram (2).png";
import LinkedInIcon from "../../public/image/linkedin (2).png";
import useTranslation from "@/hooks/useTranslation";

const Contact = () => {
  const {t} = useTranslation()
  return (
    <div className="max-w-[1200px] px-6 py-6 mx-auto">
      <h1 className="text-[#f5433d] font-bold  text-5xl pb-2 text-center">
        {t("Contact")}
      </h1>
      <div className="flex justify-center mb-10">
        <span className="w-20 h-1 bg-[#f5433d] rounded"></span>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-5">
        <IconLink
          href="https://github.com/theojs62"
          icon={GithubIcon}
          alt="GitHub"
          text="GitHub"
        />
        <IconLink
          href="https://www.instagram.com/les_patisseries_de_theo_?igshid=NGVhN2U2NjQ0Yg%3D"
          icon={InstagramIcon}
          alt="Instagram"
          text="Instagram"
        />
        <IconLink
          href="https://www.linkedin.com/in/theo-journee/"
          icon={LinkedInIcon}
          alt="LinkedIn"
          text="LinkedIn"
        />
        <IconLink
          href="mailto:theojs62@gmail.com"
          icon={GmailIcon}
          alt="Gmail"
          text="Gmail"
        />
      </div>
      <p className="text-center text-gray-500 text-base mt-4">
        {" "}
        © 2023 theoj62@gmail.com
      </p>
    </div>
  );
};

const IconLink = ({ href, icon, alt, text }) => (
  <a href={href} className="flex items-center gap-3 rounded-full bg-[#0C0C0C] px-6 py-2.5">
    <Image src={icon} alt={alt} className="w-6 h-6" />
    <div>
      <p className="text-gray-300 font-semibold text-sm">{text}</p>
    </div>
  </a>
);

export default Contact;
