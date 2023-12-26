import React from "react";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useTranslation from "@/hooks/useTranslation";
import french from "../../public/image/french.jpg";
import uk from "../../public/image/uk.webp";
import Link from "next/link";
import { useRouter } from "next/router";
import MobileMenu from "./MobileMenu";
const Navbar = () => {
  const router = useRouter();
  const { t } = useTranslation();

  const navigateToHome = () => {
    router.push("/", "/", { locale: "fr" });
  };

  const data = [
    {
      title: t("Home"),
      url: "Hero",
    },
    {
      title: t("Skills"),
      url: "Skills",
    },
    {
      title: t("Education"),
      url: "Education",
    },
    {
      title: t("Experience"),
      url: "Experience",
    },
    {
      title: t("Projects"),
      url: "Project",
    },
    {
      title: t("Certifications"),
      url: "Certification",
    },
    {
      title: t("Contact"),
      url: "Contact",
    },
  ];
  

  return (
    <div>
      <div className="block lg:hidden">
        <MobileMenu data={data}/>
      </div>
      <div className=" hidden lg:block">
        <div className="bg-gray-900 fixed inset-x-0 z-50 py-4">
          <div className="py-4 items-center justify-between lg:justify-evenly flex relative">
            <h1 className="text-white text-3xl font-semibold ml-5 lg:ml-0">
              {t("Port")}
              <span className="text-red-500">{t("folio")}</span>
            </h1>
            <div className="flex items-center gap-10">
              {data?.map((item, index) => {
                return (
                  <AnchorLink href={`#${item?.url}`} key={index} offset="100">
                    <span className="text-lg block text-white transition-all hover:text-red-500">
                      {item?.title}
                    </span>
                  </AnchorLink>
                );
              })}
            </div>
            <div className="flex gap-2 self-center">
              <button onClick={navigateToHome}>
                <Image src={french} alt="french" className="w-8" />
              </button>
              <Link href={"/en"}>
                <Image src={uk} alt="uk" className="w-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

