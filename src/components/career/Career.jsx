import Image from "next/image";
import OpeningsCard from "./OpeningsCard";
import SectionHeading from "../SectionHeading";
import Link from "next/link";

const Career = () => {
  return (
    <section className="sm:px-8 py-8">
      <SectionHeading text={"Career"} />
      <h1 className="text-2xl mt-3 md:text-3xl font-bold text-app-blue">
        Life at <span className="text-black">Mcabee.</span>
      </h1>

      <div className="grid grid-cols-2 gap-4 justify-between">
        <div className="col-span-2 lg:col-span-1 pt-8 flex flex-col justify-between gap-6">
          <p className="max-w-xl sm:text-sm">
            We are always looking for a diverse range of talented people with
            innovative ideas, who can contribute to what we do. Maybe all along,
            it was you...
          </p>
          <Link
            href={"/careers"}
            className="hover:translate-x-1 transition-all min-w-sm max-w-lg rounded-md bg-[#F4F4F4] p-3 sm:p-4 flex gap-4"
          >
            <Image
              src={"/assets/images/12_Career_life_at_mcabee.jpg"}
              alt="Smile-image"
              height={60}
              width={120}
              className="rounded-md object-cover"
            />
            <div>
              <p className="font-semibold sm:text-sm text-xs mb-2">
                A Great place to work : know more about our work culture and
                principles.
              </p>
              <p className="sm:text-sm text-xs">
                When you join Mcabee, you will know...
              </p>
            </div>
          </Link>
          <div className="flex flex-wrap gap-4 min-w-sm max-w-lg">
            <Link
              href={"/careers"}
              className="sm:px-5 sm:py-2.5 w-full text-center sm:w-auto px-4 py-2 uppercase rounded-md bg-app-blue text-white font-semibold text-sm transition-all hover:scale-95"
            >
              Explore all openings
            </Link>
            <Link
              href={"/careers"}
              className="sm:px-5 sm:py-2.5 w-full text-center sm:w-auto px-4 py-2 uppercase rounded-md text-app-blue border border-gray-300 font-semibold text-sm transition-all hover:scale-95"
            >
              Reserve your chair
            </Link>
          </div>
        </div>
        <div className="col-span-2 lg:col-span-1 flex flex-col gap-3 lg:items-end mt-8 lg:mt-0">
          <OpeningsCard
            image={"/assets/images/13_Job_Flutter.png"}
            position={"Flutter Developer"}
            description={"Build highly scalable apps using flutter and..."}
            number={"01"}
          />
          <OpeningsCard
            image={"/assets/images/14_Job_Devops_Network.jpg"}
            position={"DevOps Engineer"}
            description={"Planning and designing data communication..."}
            number={"01"}
          />
          <OpeningsCard
            image={"/assets/images/15_Job_Soft_tester.jpg"}
            position={"Software Tester"}
            description={"Involved in the QA stage before deployment..."}
            number={"01"}
          />
        </div>
      </div>
    </section>
  );
};

export default Career;
