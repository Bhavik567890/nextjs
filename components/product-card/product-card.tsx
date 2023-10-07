import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Props {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
  price: number;
  key: number;
}

const ProductCard = ({ id:blogid, title, image, description, category, price, key }: Props) => {
  return (
    <Link href={`/blog/${blogid}`}>
    <Card className="w-[380px] max-w-fit border-0 !bg-transparent sm:max-w-[356px] p-4 mx-2" key={key}>
      <CardHeader className="flex-center flex-col gap-2.5 !p-0">
        <div className="h-[440px] w-full relative">
          <Image
            src={image}
            className="rounded-md object-cover"
            layout="fill" 
            alt={title}
            objectFit="cover"
          />
        </div>
        <CardTitle className="text-grey-500 paragraph-semibold line-clamp-1 w-full text-left">{title}</CardTitle>
        <p className="text-gray-400 line-clamp-3 mt-2">{description}</p>
      </CardHeader>
      <CardContent className="flex-between mt-4 p-0 grid grid-cols-3 gap-2">
        <div className="text-white">
          <p className="text-sm font-semibold text-gray-500">Price:</p>
          <p className="text-lg text-gray-500">{price}</p>
        </div>
        <div className="text-white">
          <p className="text-sm font-semibold text-gray-500">Category:</p>
          <p className="text-gray-500">{category}</p>
        </div>
      </CardContent>
    </Card>
    </Link>
  );
};

export default ProductCard;
