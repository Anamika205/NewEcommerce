"use client"
import React from 'react'
import Slider from "react-slick";
import Slide from "./Slide"
import banner1 from '../../../public/Assets/Imges/banner1.jpg'
import banner2 from '../../../public/Assets/Imges/banner2.jpg'
import banner3 from '../../../public/Assets/Imges/banner3.jpg'
import banner6 from '../../../public/Assets/Imges/banner6.jpg'
import banner5 from '../../../public/Assets/Imges/banner5.jpg'
const Hero = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        pauseOnHover: false,
    }
    const slideData = [{
        id: 0,
        img: banner1,
        title: "Trending Items",
         mainTitle: "WOMEN'S LATEST FASHION SALE",
         price: "$20",
    },
    {
        id: 1,
        img: banner2,
         title: "Trending Items",
         mainTitle: "WOMEN'S LATEST FASHION SALE",
         price: "$20",
    },
    {
        id: 2,
        img: banner3,
        title: "Trending Items",
        mainTitle: "WOMEN'S LATEST FASHION SALE",
        price: "$20",
    },
    {
        id: 3,
        img: banner6,
        title: "Trending Items",
        mainTitle: "WOMEN'S LATEST FASHION SALE",
        price: "$20",
    },
    {
        id: 3,
        img: banner5,
        title: "Trending Items",
        mainTitle: "WOMEN'S LATEST FASHION SALE",
        price: "$20",
    }
    ]
    return (
        <div>
            <div className='container pt-6 lg:pt-0'>
                <Slider {...settings}>{slideData.map((item) => (
                    <Slide
                        key={item.id}
                        img={item.img} 
                        title={item.title}
                        mainTitle={item.mainTitle}
                        price={item.price}


                        
                        />

                ))}</Slider>
             


            </div>
        </div>
    )
}

export default Hero