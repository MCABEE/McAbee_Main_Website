import Image from "next/image";
import React from "react";

const RightSection = () => {
  return (
    <>
      <div className="lg:col-span-2 md:row-span-2 col-span-3 row-span-1">
        <Image
          src={"/assets/images/08_What_we_do_banner.jpg"}
          alt="Meeting_image"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="lg:col-span-2 md:row-span-2 col-span-3 row-span-1 p-5 sm:p-8 bg-[#F8F9FA] border border-gray-300 rounded-lg">
        <h2 className="font-semibold text-app-blue text-lg sm:text-xl">
          As a technology consultant firm, we help businesses leverage
          technology, to achieve your goals and improve the operations.
        </h2>
        <div className="flex flex-col sm:flex-row items-start gap-4 mt-2 sm:items-center">
          <p className="text-sm sm:text-base">
            It includes, Assessment and Analysis, Technology Strategy,
            Innovation and Research, Implementation and Integration,
            Troubleshooting and Support etc...
          </p>
          <button className="bg-app-blue text-white rounded-md px-4 py-2.5 w-28 sm:w-40 font-semibold text-sm uppercase transition-all hover:scale-95">
            More
          </button>
        </div>
      </div>
    </>
  );
};

export default RightSection;
