import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row md:justify-between gap-4 py-6 sm:py-16 sm:px-8">
      <div className="mt-10 flex flex-col gap-10">
        <h1 className="text-app-blue font-semibold md:text-[56px] leading-none text-[40px] font-oxygen">
          We digitalize your <br />{" "}
          <span className="text-black">business.</span>
        </h1>
        <p className="text-2xl font-oxygen">
          You focus on scale up ! <br /> watch the on-demand webinar.
        </p>
        <div>
          <Link
            href={"#"}
            className="uppercase px-5 py-2.5  text-sm sm:text-base bg-app-blue text-white rounded-md font-semibold"
          >
            Explore Services
          </Link>
          <Link
            href={"#"}
            className="uppercase px-5 ml-4 py-2.5 text-sm sm:text-base text-app-blue border border-slate-300 rounded-md font-semibold"
          >
            Contact Sales
          </Link>
        </div>
      </div>
      <div>
        <Image
          src={"/assets/images/img-banner.png"}
          alt="Banner_image"
          width={600}
          height={330}
        />
      </div>
    </section>
  );
};

export default Banner;
