import React from 'react'
// import Banner from "../../../public/Assets/Imges/banner1.png";
// import Banner1 from "../../../public/Assets/Imges/banner2.png";


function Testimonial() {
  return (
    <div>
        <div className='container pt-1 pb-16 grid-cols-2'>
            <h2 className='text-2xl font-medium pb-4'>Testimonials</h2>
            <div className='grid lg:grid-cols-[300px, 1fr] gap-4'>
                {/* <div className='border border-gray-300 rounded-2xl grid place-items-center p-6 lg:p-0'>
                    <div className='text-center flex flex-col items-center gap-1'>
                    <Image 
                    className="rounded-full inline-block"
                    src={Banner}
                    alt="dp"
                    height={400}
                    width={400}/>
                    <h2 className='text-gray-500 font-black text-[20px]'>Else Doe</h2>
                    <p>CEO & Founder Invision</p>
                    <Image 
                    className="rounded-full inline-block"
                    src={Banner1}
                    alt="dp"
                    height={400}
                    width={400}/>
                    <h2 className='text-gray-500 font-black text-[20px]'>Else Doe</h2>
                    <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor</p>

                    </div>
                    </div> */}

                    <div className='bg-red-600 bg-[url(/bg.jpg)] bg-cover h-[500px] rounded-2xl grid place-items-center'>
                        <div className='bg-[#ffffffab] min-w-[270px] sm:min-w-[500px] rounded-xl py-8 sm:px-2 grid place-items-center gap-3'>
                            <button className='bg-blackish text-white p-2 rounded-md'>
                                25% DISCOUNT
                                </button>
                            <h2 className='font-extrabold text-2xl text-[#272727]'>
                                Summer Collection
                            </h2>
                            <p  className='text-gray-500 text-[20px]'>
                                Staring @ $20<b>Shop Now</b>
                            </p>
                        </div>
                    </div>
                 </div>
            </div> 
    </div>
  )
}

export default Testimonial