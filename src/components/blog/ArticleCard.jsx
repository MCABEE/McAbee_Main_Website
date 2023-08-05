import Image from "next/image";
const ArticleCard = ({ image, heading, text, date }) => {
  return (
    <div className="w-[350px] flex flex-col shrink-0 gap-2">
      <div>
        <Image
          src={image}
          alt="cover-image"
          width={100}
          height={100}
          className="w-full h-[200px] object-cover rounded-md"
        />
      </div>
      <div className="">
        <h3 className="text-xl font-semibold">{heading}</h3>
        <p className="text-sm">{text}</p>
        <p className="text-xs mt-2">{date}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
