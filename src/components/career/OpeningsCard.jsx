import Image from "next/image";
import Link from "next/link";

const OpeningsCard = ({ image, position, description, number }) => {
  return (
    <Link
      href={"#"}
      className="hover:translate-x-1 transition-all rounded-md max-w-lg sm:w-[500px] bg-[#F4F4F4] p-3 sm:px-6 sm:py-4 flex gap-4 items-center"
    >
      <Image
        src={image}
        alt="Smile-image"
        height={60}
        width={100}
        className="rounded-md object-cover"
      />
      <div className="">
        <h3 className="font-bold sm:text-lg text-md text-app-blue">
          {position}
        </h3>
        <p className="sm:text-sm text-xs whitespace-pre-wrap">
          {description}
        </p>
        <p className="sm:font-bold font-semibold text-xs mt-1">
          {number} Openings
        </p>
      </div>
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-app-blue"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
          />
        </svg>
      </button>
    </Link>
  );
};

export default OpeningsCard;
