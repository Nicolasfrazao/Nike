import Image from "next/image";

/*eslint-disable */
const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg } : any) => {
  
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg === imgURL.bigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={() => {
        if(bigShoeImg !== imgURL.bigShoe) {
          changeBigShoeImage(imgURL.bigShoe)
        }}
      }
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <Image
          src={imgURL.thumbnail}
          alt='shoe collection'
          width={127}
          height={103.34}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default ShoeCard;
