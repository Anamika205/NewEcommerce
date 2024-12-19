"use client"
import React from 'react'
import Slider from "react-slick";
import Slide from "./Slide"

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
        img: "https://static.vecteezy.com/system/resources/previews/005/569/278/non_2x/online-shopping-store-on-website-and-mobile-phone-design-smart-business-marketing-valentine-s-day-concept-horizontal-view-illustration-vector.jpg",
        // title: "Trending Items",
        // mainTitle: "WOMEN'S LATEST FASHION SALE",
        // price: "$20",
    },
    {
        id: 1,
        img: "https://static.vecteezy.com/system/resources/previews/027/440/257/non_2x/smartphone-with-shop-app-shopping-online-on-website-in-mobile-application-vector.jpg",
        // title: "Trending Items",
        // mainTitle: "WOMEN'S LATEST FASHION SALE",
        // price: "$20",
    },
    {
        id: 2,
        img: "https://static.vecteezy.com/system/resources/previews/003/136/861/non_2x/online-shopping-store-on-website-and-mobile-phone-design-vector.jpg",
        // title: "Trending Items",
        // mainTitle: "WOMEN'S LATEST FASHION SALE",
        // price: "$20",
    },
    {
        id: 3,
        img: "https://static.vecteezy.com/system/resources/previews/007/505/089/non_2x/online-shopping-store-on-website-and-mobile-phone-design-smart-business-marketing-concept-horizontal-view-illustration-vector.jpg",
        // title: "Trending Items",
        // mainTitle: "WOMEN'S LATEST FASHION SALE",
        // price: "$20",
    }
    ]
    return (
        <div>
            <div className='container pt-6 lg:pt-0'>
                <Slider {...settings}>{slideData.map((item) => (
                    <Slide
                        key={item.id}
                        img={item.img} 
                        title={''} 
                        mainTitle={''} 
                        price={''} />

                ))}</Slider>
                {/* // title={item.title}
                // mainTitle={item.mainTitle}
                // price={item.price} */}


            </div>
        </div>
    )
}

export default Hero