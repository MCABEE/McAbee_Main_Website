"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navList = toggle ? "top-[100%]" : "top-[-400%]";

  return (
    <nav className="flex z-20 border-b-2 border-gray-100 sticky top-0 max-w-7xl mx-auto sm:px-8 px-3 pt-4 sm:h-24 text-sm bg-white items-center justify-between sm:pt-8 pb-2">
      {/* LOGO */}
      <Link href={"/"}>
        <Image
          src={"/assets/icons/logo_full.svg"}
          alt="McAbee_logo"
          width={138}
          height={46}
          className="w-24 h-14 md:w-32 md:h-20"
        />
      </Link>
      <div className="flex items-center gap-4">
        <div
          className={`${navList} lg:static absolute duration-500 bg-slate-50 lg:bg-white left-0 w-full lg:min-h-fit min-h-[50vh] flex gap-4 items-center uppercase px-3 lg:px-0`}
        >
          {/* Desktop Navbar Links */}
          <ul className="text-gray-500 flex flex-col lg:flex-row lg:gap-4 gap-6">
            <li className="flex items-center gap-1 cursor-pointer">
              Solutions
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              Products
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              Company
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              Careers
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              Blogs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
            <li className="flex items-center gap-1 cursor-pointer">
              Employee Login
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </li>
          </ul>
        </div>
        <Link
          href={"#"}
          className="px-6 py-2 rounded-md text-white font-semibold uppercase bg-blue-500"
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
    </nav>
  );
};

export default Navbar;
