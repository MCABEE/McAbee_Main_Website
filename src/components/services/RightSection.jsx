import Image from "next/image";
import React from "react";

const RightSection = () => {
  return (
    <>
      <div className="md:col-span-2 md:row-span-2 col-span-3 row-span-1">
        <Image
          src={"/assets/images/business-meeting.png"}
          alt="Meeting_image"
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="md:col-span-2 md:row-span-2 col-span-3 row-span-1 p-5 sm:p-8 bg-[#F8F9FA] border border-gray-300 rounded-lg">
        <h2 className="font-semibold text-app-blue text-lg sm:text-xl">
          Advising clients how to use information technology in order to meet
          their business objectives or overcome problems.
        </h2>
        <div className="flex flex-col sm:flex-row items-start gap-4 mt-2 sm:items-center">
          <p className="text-sm sm:text-base">
            Provide strategic guidance to clients about technology and IT
            infrastructures and will enable major business processes through
            enhancements to IT.
          </p>
          <button className="bg-app-blue text-white rounded-md px-4 py-2 w-28 sm:w-40 font-semibold text-sm uppercase transition-all hover:scale-95">
            More
          </button>
        </div>
      </div>
    </>
  );
};

export default RightSection;
