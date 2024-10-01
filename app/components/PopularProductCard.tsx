import Image from "next/image";
import { star } from "../assets/icons";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PopularProductCard = ({ imgURL, name, price } : any) => {
  return (
    <div className='flex flex-1 flex-col w-full max-sm:w-full'>
      <Image src={imgURL} alt={name} className='w-[282px] h-[282px]' width={282} height={282} />
      <div className='mt-8 flex justify-start gap-2.5'>
        <Image src={star} alt='rating icon' width={24} height={24} />
        <p className='font-montserrat text-xl leading-normal text-slate-gray'>
          (4.5)
        </p>
      </div>
      <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
        {name}
      </h3>
      <p className='mt-2 font-semibold font-montserrat text-red-600 text-2xl leading-normal'>
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard;
