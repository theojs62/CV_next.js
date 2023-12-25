import React, { useState } from "react";
import Image from "next/image";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useTranslation from "@/hooks/useTranslation";
import french from "../../public/image/french.jpg";
import uk from "../../public/image/uk.webp";
import Link from "next/link";
import { useRouter } from "next/router";
import { RxHamburgerMenu } from "react-icons/rx";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const MobileMenu = ({data}) => {
  const router = useRouter();
  const { t } = useTranslation();

  const navigateToHome = () => {
    router.push("/", "/", { locale: "fr" });
  };
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <div>
      <div className="flex justify-between px-3 py-4 items-center">
        <h1 className="text-white text-3xl font-semibold">
          {t("Port")}
          <span className="text-red-500">{t("Folio")}</span>
        </h1>
        <div>
          <div className="flex gap-6 items-center self-center">
            <div className="flex gap-2">
              <button onClick={navigateToHome}>
                <Image src={french} alt="french" className="w-8" />
              </button>
              <Link href={"/en"}>
                <Image src={uk} alt="uk" className="w-8" />
              </Link>
            </div>
            <button onClick={toggleDrawer}>
              <RxHamburgerMenu className="text-gray-300 text-3xl" />
            </button>
          </div>
        </div>
      </div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        style={{
          background: "#111827",
        }}
      >
         <h1 className="text-white text-3xl font-semibold px-4 pt-4">
          {t("Port")}
          <span className="text-red-500">{t("Folio")}</span>
        </h1>
        <div className="flex flex-col gap-2 py-10 px-4">
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
      </Drawer>
    </div>
  );
};

export default MobileMenu;

