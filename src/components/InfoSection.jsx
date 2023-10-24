import Image from "next/image";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
const InfoSection = () => {
  return (
    <section className="pt-5 sm:py-3 sm:px-8">
      <hr />
      <div className="relative py-4 md:py-2">
        <div className="flex items-center justify-between gap-12 md:gap-6 overflow-auto scrollbar-hide">
          {/* Google rating */}
          <div className="flex gap-2 items-center shrink-0">
            <Image
              src={"/assets/icons/google-logo.svg"}
              alt="google_logo"
              width={40}
              height={40}
              className="h-auto w-auto"
            />
            <div>
              <div className="flex items-center gap-1">
                <span className="font-semibold">4.6</span>
                <Image
                  src={"/assets/icons/rating-stars.svg"}
                  alt="rating"
                  width={60}
                  height={20}
                  className="h-auto w-auto"
                />
              </div>
              <p className="uppercase text-xs sm:text-sm">User reviews</p>
            </div>
          </div>

          <div className="shrink-0">
            <p className="uppercase text-xs sm:text-sm leading-5">
              <span className="font-semibold ">11 Years</span>
              <br /> of experience
            </p>
          </div>
          <div className="shrink-0">
            <p className="uppercase text-xs sm:text-sm leading-5 ">
              <span className="font-semibold ">03 products</span>
              <br /> on board
            </p>
          </div>
          {/* Phone */}
          <div className="h-14 hidden w-14 md:flex items-center text-white text-3xl justify-center rounded-full bg-app-blue cursor-pointer">
            <BiSolidPhoneCall />
          </div>
          {/* WhatsApp */}
          <div className="h-14 w-14 hidden md:flex items-center justify-center rounded-full  text-white text-3xl bg-app-blue cursor-pointer">
            <HiMail />
          </div>
          {/* Message */}
          <div className="h-20 w-20 hidden md:flex items-center justify-center rounded-full bg-app-blue cursor-pointer">
            <Image
              src={"/assets/icons/icon-messages.svg"}
              alt="message_icon"
              width={35}
              height={35}
            />
          </div>
          <div className="hidden md:block py-2 px-6 absolute h-16 w-52 bg-app-blue rounded-lg right-3 -top-[75%] text-white">
            <p className="leading-snug text-sm">
              We are online <br />
              How can we assist you ?
            </p>
            <div className="bg-app-blue z-0 h-5 w-5 rotate-45 absolute right-4 -bottom-2"></div>
          </div>
        </div>
      </div>
      <hr />
      {/* Small screen contanct options */}
      <div className="flex md:hidden mt-4 justify-between">
        {/* Phone */}
        <div className="h-14 w-14 flex items-center text-white text-3xl justify-center rounded-full bg-app-blue cursor-pointer">
          <BiSolidPhoneCall />
        </div>
        {/* WhatsApp */}
        <div className="h-14 w-14 flex items-center justify-center rounded-full  text-white text-3xl bg-app-blue cursor-pointer">
          <HiMail />
        </div>
        {/* Message */}
        <div className="h-14 w-14 hover:scale-125 transition-all flex items-center justify-center rounded-full bg-app-blue cursor-pointer">
          <Image
            src={"/assets/icons/icon-messages.svg"}
            alt="message_icon"
            width={25}
            height={25}
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
