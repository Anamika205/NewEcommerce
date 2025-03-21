 
//  "use client"
 import React from 'react'
 import { BsSearch  } from 'react-icons/bs'
 import { BiUser } from "react-icons/bi";
import {FiHeart} from 'react-icons/fi' 
import { HiOutlineShoppingBag } from 'react-icons/hi'

import Link from 'next/link';
// import { useRouter } from 'next/navigation';


 export default function Headermain() {

  // const router = useRouter();
   return (
     <div className='border-b border-gray-200 py-6'>
        <div className='container sm:flex justify-between items-center'>
            <div className='font-bold text-4xl text-center pb-4 sm:pb-0'>Shopper Shopping</div>
            <div className='w-full sm:w-[300px] md:w-[70%] relative '>
                <input className='border-gray-300 border p-2 px-4 rounded-lg w-full' type='text' placeholder='Enter any product itmes'/>
                <BsSearch className='absolute right-0 top-0 mr-3 mt-3 text-gray-400' size={20}/>
            </div>
            <Link href="\register" className='mobile-hide lg-flex gap-4 text-gray-500 text-[30px]' >
            
                <BiUser/>
              
                </Link>
                <div className='mobile-hide relative lg-flex gap-4 text-gray-500 text-[30px]'>
                    <FiHeart/>
                    <div className=' bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1'>0</div>

                    </div>
            
            <div className=' mobile-hide relative lg-flex gap-4 text-gray-500 text-[30px]' >
                    <HiOutlineShoppingBag/>
                    <div className=' bg-red-600 rounded-full absolute top-0 right-0 w-[18px] h-[18px] text-[12px] text-white grid place-items-center translate-x-1 translate-y-1'>0</div>
                    
                    </div>
            
        </div>
     </div>
   )
 }
 
