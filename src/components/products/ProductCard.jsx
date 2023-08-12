import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ image, heading, text }) => {
  return (
    <div className="w-[350px] flex flex-col shrink-0 gap-2">
      <Link href={"/products"}>
        <Image
          src={image}
          alt="cover-image"
          width={100}
          height={100}
          className="w-full h-[200px] object-cover rounded-md"
        />
      </Link>
      <div>
        <Link href={"/products"} className="text-xl font-semibold uppercase">{heading}</Link>
        <p className="text-sm">{text}</p>
      </div>
      <div>
        <Link href={"/products"} className="text-app-blue text-sm font-semibold">
          Read the case study
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
