import React from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';

interface propsType {
  img: string | StaticImageData;
  title: string;
  mainTitle: string;
  price: string;
}

const Slide: React.FC<propsType> = ({ img, title, mainTitle }) => {
  return (
    <div className="outline-none border-none relative">
    <div className='absolute left-[30px] md:left-[70px] max-w-[250px] sm:max-w-[350px] top-[50%]-transtale-y-[50%] space-y-4 bg-[#ffffffa2] sm:bg-transparent p-4 sm:p-0 rounded-lg sm:rounded-none'>
        <h3 className='text-accent text-[24px] lg:text-[28px]'>{title}</h3>
        <h2 className='text-blackish text-[26px] md:text-[38px] lg:text-[44px] font-bold leading-[1.2]'>{mainTitle}</h2>
        {/* <h3 className='text-[24px] text-gray-500'>starting at{""}<b className='text-[20px] md:text-[24px] lg:text-[30px]'>{price}</b>.00</h3> */}
        <div className='bg-accent text-white text-[14px] md:text=[16px] p-2 px-4 rounded-lg inline-block cursor-pointer hover:bg-blackish'>Shop now</div>
    </div>
    <Image className='w-[100%] h-[50%] md:h-1/2 rounded-xl object-cover object-right md:object-center-buttom'
    src={img}
    alt='banner'
    width={800}
    height={50}/>
    </div>
   
  );
};

export default Slide;
