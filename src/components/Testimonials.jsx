// import React from 'react'
import Img1 from "../assets/card1.jpg"
import Img2 from "../assets/card2.jpg"
import Img3 from "../assets/card3.jpg"
import Img4 from "../assets/card4.jpg"
import Img5 from "../assets/card5.jpg"
import Slider from "react-slick"

const TestimonialsData = [
    {
        id: 1,
        name: " Victoria Secrit ",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio ",
        img: Img1
    },
    {
        id: 2,
        name: " Mariem Mohamed ",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio ",
        img: Img2
    },
    {
        id: 3,
        name: " Amrita Jeson ",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio ",
        img: Img3
    },
    {
        id: 4,
        name: " Salma Mohy ",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio ",
        img: Img4
    },
    {
        id: 5,
        name: " Nour Ahmed ",
        text: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio ",
        img: Img5
    }
]

function Testimonials() {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
                breakpoint: 10000,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 1
                }
            },
        ]
    }

    return (
        <div className="py-10 mb-10">
            <div className="container">
                {/* Header Section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-main_color">What our customers are saying</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold mt-3">Testimonials</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400 mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
                </div>

                {/* Body Section */}
                <div data-aos="zoom-in">
                    <Slider {...settings}>
                        {
                            TestimonialsData.map(
                                (data) => (
                                    <div key={data.id} className="my-6">
                                        <div
                                            className="
                                            flex flex-col gap-4 
                                            shadow-lg 
                                            py-8 px-6 mx-4 
                                            rounded-xl
                                            relative
                                            bg-main_color/10 dark: bg-gray-800
                                        "
                                        >
                                            <div className="mb-4">
                                                <img
                                                    src={data.img}
                                                    alt="Testimonials Image"
                                                    className="rounded-full w-20 h-20"
                                                />
                                            </div>
                                            <div className="flex flex-col items-center gap-4">
                                                <div className="space-y-3">
                                                    <p className="text-xs text-gray-500 dark:text-gray-400">{data.text}</p>
                                                    <h1 className="text-xl font-bold text-black/80 dark:text-main_color/70">{data.name}</h1>
                                                </div>
                                            </div>
                                            <p className="
                                                absolute top-0 right-0
                                                text-black/20 text-9xl
                                                font-serif
                                                "
                                            >,,</p>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </Slider>
                </div>

            </div>
        </div>
    )
}

export default Testimonials