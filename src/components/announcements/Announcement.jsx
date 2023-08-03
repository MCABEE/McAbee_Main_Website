import Image from "next/image";

const Announcement = ({ text, image }) => {
  return (
    <div className="w-[370px] border grid grid-cols-3 shrink-0 border-gray-300 rounded-md p-3">
      <div className="col-span-2 text-sm font-medium">
        <p>{text}</p>
      </div>
      <div className="col-span-1">
        <Image
          src={image}
          alt="cover-image"
          height={40}
          width={40}
          className="h-full w-full rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default Announcement;
