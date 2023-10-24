"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navLinks } from "@/lib/constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navList = toggle
    ? "top-[120%] right-0 rounded-md shadow-md border"
    : "top-[120%] right-[-120%] border";

  return (
    <header className="sticky top-0 flex items-center justify-between z-20 border-b-2 border-gray-100 max-w-7xl mx-auto sm:px-8 px-3 sm:h-24 h-20 text-sm bg-white">
      {/* LOGO */}
      <Link href={"/"}>
        <Image
          src={"/assets/icons/logo_full.svg"}
          alt="McAbee_logo"
          width={130}
          height={46}
          className="w-24 h-14 md:w-32 md:h-20"
        />
      </Link>
      <div
        className={`${
          toggle ? "" : "overflow-hidden"
        } flex items-center gap-6 relative`}
      >
        <nav
          className={`${navList} lg:static absolute z-0 duration-500 bg-white h-fit lg:w-fit w-40 flex gap-4 items-center uppercase px-3 py-4 lg:px-0 lg:shadow-none lg:border-none`}
        >
          {/* Navbar Links */}
          <ul className="text-gray-500 flex flex-col lg:flex-row flex-grow gap-6">
            {navLinks.map((link) => (
              <li key={link.id} className="cursor-pointer hover:text-app-blue">
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href={"contact"}
          className="px-6 py-2 rounded-md text-white font-semibold uppercase bg-blue-500 transition-all hover:scale-95"
        >
          Contact
        </Link>
        {/* Mobile Nav Menu */}
        <button className="lg:hidden" onClick={() => setToggle(!toggle)}>
          {toggle ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
