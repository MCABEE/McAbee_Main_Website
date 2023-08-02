import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex h-24 text-sm bg-white items-center justify-between pt-8 pb-2 sticky top-0">
      <Link href={"/"}>
        <Image
          src={"/assets/icons/logo_full.svg"}
          alt="McAbee_logo"
          width={138}
          height={46}
          className="w-24 h-14 md:w-32 md:h-20"
        />
      </Link>
      <div className="flex gap-4 items-center uppercase">
        <ul className="gap-4 text-gray-500 hidden md:flex ">
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
        <Link
          href={"#"}
          className="px-6 py-2 rounded-md text-white font-semibold uppercase bg-blue-500"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
