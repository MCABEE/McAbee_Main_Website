import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section id="home" className="py-6 sm:py-16 sm:px-8">
      <div className="flex flex-col-reverse lg:flex-row lg:justify-between gap-4 ">
        <div className="flex flex-col justify-center gap-6 md:gap-10">
          <h1 className="text-app-blue font-semibold md:text-[56px] max-w-xl leading-none text-[40px] font-oxygen">
            We digitalize your <span className="text-black">business.</span>
          </h1>
          <p className="text-2xl font-oxygen">
            You keep scaling up, <br /> let us deal with everything else.
          </p>
        </div>
        <div>
          <Image
            src={"/assets/images/01_main_banner.jpg"}
            alt="Banner_image"
            width={600}
            height={330}
            priority
            className="rounded-lg"
          />
        </div>
      </div>
      <div className="flex gap-x-4 lg:mt-0 mt-8">
        <Link
          href="/services"
          className="uppercase px-5 py-2.5  text-sm bg-app-blue text-white rounded-md font-semibold transition-all hover:scale-95"
        >
          Explore Services
        </Link>
        <Link
          href="/contact"
          className="uppercase px-5 py-2.5 text-sm text-app-blue border border-slate-300 rounded-md font-semibold transition-all hover:scale-95"
        >
          Contact Sales
        </Link>
      </div>
    </section>
  );
};

export default Banner;
