import Link from "next/link";
import React from "react";
import { BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";

const UpperSection = () => {
  return (
    <div className="grid grid-cols-4 gap-10 lg:gap-4 py-10 mt-5">
      <div className="col-span-4 lg:col-span-2 flex flex-col justify-between gap-5">
        <h2 className="text-md font-medium">Don&apos;t miss updates</h2>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          className="max-w-md py-2 px-4 border border-gray-300 rounded-md"
        />
        <p className="text-sm max-w-md">
          By click &apos;SEND&apos; I give my permission to process my personal
          data for the purposes specified in the{" "}
          <span className="text-app-blue font-semibold">Privacy Policy.</span>
        </p>
        <button className="bg-app-blue text-white px-5 py-2.5 rounded-md w-[120px] text-sm font-semibold uppercase">
          Send
        </button>
      </div>
      <div className="col-span-4 lg:col-span-1 flex flex-col gap-5">
        <h2 className="text-md font-medium">Why Mcabee</h2>
        <div className="flex flex-col gap-4 text-sm">
          <Link href={"#"}>Team</Link>
          <Link href={"#"}>Trust and security</Link>
          <Link href={"#"}>Customers and case studies</Link>
          <Link href={"#"}>Company</Link>
          <Link href={"#"}>Blog</Link>
        </div>
      </div>
      <div className="col-span-4 lg:col-span-1 flex flex-col gap-5 justify-between">
        <h2 className="text-md font-medium">Contact</h2>
        <div className="text-sm">
          <p>715 A, Spencer Plaza</p>
          <p>Mount Road, Anna Salai, Chennai - 600 002</p>
          <p>India</p>
        </div>
        <hr />
        <div className="flex items-center gap-4 justify-between">
          <Link
            href="#"
            className="flex flex-col justify-center items-center text-2xl"
          >
            <BsLinkedin />
            <span className="text-xs">LinkedIn</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col justify-center items-center text-2xl"
          >
            <BsFacebook />
            <span className="text-xs">Facebook</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col justify-center items-center text-2xl"
          >
            <BsTwitter />
            <span className="text-xs">Twitter</span>
          </Link>
          <Link
            href="#"
            className="flex flex-col justify-center items-center text-2xl"
          >
            <BiLogoInstagramAlt />
            <span className="text-xs">Instagram</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UpperSection;
