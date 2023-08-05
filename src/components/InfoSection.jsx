import Image from "next/image";
import { BiSolidPhoneCall, BiLogoWhatsapp } from "react-icons/bi";
const InfoSection = () => {
  return (
    <section className="py-12 sm:px-8">
      <div className="flex items-center justify-between gap-6 flex-wrap">
        {/* Google rating */}
        <div className="flex gap-2 items-center">
          <Image
            src={"/assets/icons/google-logo.svg"}
            alt="google_logo"
            width={40}
            height={40}
          />
          <div>
            <div className="flex items-center gap-1">
              <span className="font-semibold">4.6</span>
              <Image
                src={"/assets/icons/rating-stars.svg"}
                alt="rating"
                width={60}
                height={20}
              />
            </div>
            <p className="uppercase text-xs sm:text-sm">User reviews</p>
          </div>
        </div>

        <div>
          <p className="uppercase text-xs sm:text-sm leading-5 ">
            <span className="font-semibold ">11 Years</span>
            <br /> of experience
          </p>
        </div>
        <div>
          <p className="uppercase text-xs sm:text-sm leading-5 ">
            <span className="font-semibold ">03 products</span>
            <br /> on board
          </p>
        </div>
        {/* Phone */}
        <div className="h-14 hidden w-14 md:flex items-center text-white text-3xl justify-center rounded-full bg-app-blue">
          <BiSolidPhoneCall />
        </div>
        {/* WhatsApp */}
        <div className="h-14 w-14 hidden md:flex items-center justify-center rounded-full  text-white text-3xl bg-app-blue">
          <BiLogoWhatsapp />
        </div>
        {/* Message */}
        <div className="h-14 w-14 hover:scale-125 transition-all hidden  md:flex items-center justify-center rounded-full bg-app-blue">
          <Image
            src={"/assets/icons/icon-messages.svg"}
            alt="message_icon"
            width={25}
            height={25}
          />
        </div>
      </div>
      {/* Small screen contanct options */}
      <div className="flex md:hidden mt-8 justify-between">
        {/* Phone */}
        <div className="h-14 w-14 flex items-center justify-center rounded-full bg-app-blue">
          <Image
            src={"/assets/icons/icon-calling.svg"}
            alt="phone_icon"
            width={25}
            height={25}
          />
        </div>
        {/* WhatsApp */}
        <div className="h-14 w-14 flex items-center justify-center rounded-full bg-app-blue">
          <Image
            src={"/assets/icons/icon-whatsapp.svg"}
            alt="whatsapp_icon"
            width={25}
            height={25}
          />
        </div>
        {/* Message */}
        <div className="h-14 w-14 hover:scale-125 transition-all flex items-center justify-center rounded-full bg-app-blue">
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
