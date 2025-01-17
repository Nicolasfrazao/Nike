import Image from "next/image"

const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}: { label: string; iconURL?: string; backgroundColor?: string; textColor?: string; borderColor?: string; fullWidth?: boolean }) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
      ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-red-600 text-white border-black"
      } rounded-full ${fullWidth && "w-full"}`}
    >
      {label}

      {iconURL && (
        <Image
          src={iconURL}
          alt='arrow right icon'
          className='ml-2 rounded-full bg-white w-5 h-5'
        />
      )}
    </button>
  );
};

export default Button;
