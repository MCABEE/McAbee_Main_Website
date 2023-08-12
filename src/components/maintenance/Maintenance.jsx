import Image from "next/image";

const Maintenance = () => {
  return (
    <section className="py-6 sm:py-12 sm:px-8">
      <div className="flex lg:flex-row flex-col-reverse lg:justify-between gap-4">
        <div className="flex flex-col justify-center gap-6 md:gap-10">
          <h1 className="font-semibold md:text-[56px] text-4xl text-app-blue font-oxygen">
            We are <span className="text-black">Sorry!</span>
          </h1>
          <p className="text-2xl font-oxygen">
            The page is updating. <br />
            please be patient for a while.
          </p>
        </div>
        <Image
          src={"/assets/images/maintenance.png"}
          alt=""
          height={500}
          width={500}
        />
      </div>
    </section>
  );
};

export default Maintenance;
