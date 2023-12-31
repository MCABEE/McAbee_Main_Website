import Image from "next/image";
import Link from "next/link";
const ArticleCard = ({ image, heading, text, date }) => {
  return (
    <div className="w-[350px] flex flex-col shrink-0 gap-2">
      <Link href={"/blogs"}>
        <Image
          src={image}
          alt="cover-image"
          width={100}
          height={100}
          unoptimized={true}
          className="w-full h-[200px] object-cover rounded-md"
        />
      </Link>
      <div className="">
        <Link href={"/blogs"} className="text-xl font-semibold">
          {heading}
        </Link>
        <p className="text-sm">{text}</p>
        <p className="text-xs mt-2">{date}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
