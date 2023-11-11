
// @ts-ignore
import Slider from "react-slick";
import Image from "next/image";
import React from "react";
import "./MySlider.css"

export default function MySlider() {
   var photos = [
        {
            src: "https://flowbite.com/docs/images/carousel/carousel-1.svg",
        },
        {
            src: "https://flowbite.com/docs/images/carousel/carousel-2.svg",
        },
        {
            src: "https://flowbite.com/docs/images/carousel/carousel-3.svg",
        },
        {
            src: "https://flowbite.com/docs/images/carousel/carousel-4.svg",
        },
        {
            src: "https://flowbite.com/docs/images/carousel/carousel-5.svg",
        }]



    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1

    };
    return (

        <div className={"slider"}>
        <Slider {...settings}  >
            {photos.map((ph, index) => (
                <Image
                    width={50}
                    height={50}
                    key={ph.src}
                    src={ph.src}
                    alt=""
                />
            ))}
        </Slider>
        </div>
    );
}
