import Image from "next/image";
import { star } from "../assets/icons";

interface ReviewCardProps {
  imgURL: string;
  customerName: string;
  rating: number;
  feedback: string;
}

const ReviewCard = ({ imgURL, customerName, rating, feedback } : ReviewCardProps) => {
  return (
    <div className='flex justify-center items-center flex-col'>
      <Image
        src={imgURL}
        alt='customer'
        className='rounded-full object-cover w-[120px] h-[120px]'
        width={120}
        height={120}
      />
      <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5'>
        <Image
          src={star}
          width={24}
          height={24}
          alt='rating star'
          className='object-contain m-0'
        />
        <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
      </div>
      <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
