import Link from "next/link";

const BottomSection = () => {
  return (
    <div className="flex flex-col pb-5 md:flex-row justify-center gap-4 items-center md:justify-between h-20">
      <div className="flex gap-6">
        <Link href="/company" className="inline-block text-sm">
          About Mcabee
        </Link>
        <Link href="/privacypolicy" className="inline-block text-sm">
          Privacy
        </Link>
        <Link href="/maintenance" className="inline-block text-sm">
          Terms
        </Link>
      </div>
      <div className="">
        <p className="text-sm">Copyright MCABEE 2023</p>
      </div>
    </div>
  );
};

export default BottomSection;
