"use client";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import NavBarItem from "@/app/components/NavBarItem";
import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import { useEffect, useState } from "react";
import AccountMenu from "./AccountMenu";

import profile from "@/public/images/default-blue.png";

const TOP_OFFSET = 66;

const NavBar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu((bool) => !bool);
    if (showAccountMenu) setShowAccountMenu((bool) => !bool);
  };
  const toggleAccountMenu = () => {
    if (showMobileMenu) setShowMobileMenu((bool) => !bool);
    setShowAccountMenu((bool) => !bool);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > TOP_OFFSET) setShowBackground(true);
      else setShowBackground(false);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed w-full z-40 ">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : "bg-transparent"
        }`}
      >
        <Image
          src={logo}
          alt="Netflix logo"
          priority
          className="h-5 lg:h-6 w-auto "
        />
        <div className="flex-row ml-8 hidden lg:flex gap-7">
          <NavBarItem label="Home" />
          <NavBarItem label="Series" />
          <NavBarItem label="Films" />
          <NavBarItem label="New & Popular" />
          <NavBarItem label="My List" />
          <NavBarItem label="Browse by languages" />
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative justify-center"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              !showMobileMenu ? "rotate-0" : "rotate-180"
            }`}
            size={15}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsSearch size={15} />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer">
            <BsBell size={15} />
          </div>
          <div
            className="flex flex-row items-center gap-2 cursor-pointer relative"
            onClick={toggleAccountMenu}
          >
            <div className="size-8 lg:size-10 rounded-md overflow-hidden">
              <Image src={profile} alt="profile" className="size-full"></Image>
            </div>
            <BsChevronDown
              className={`text-white transition ${
                !showAccountMenu ? "rotate-0" : "rotate-180"
              }`}
              size={15}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
