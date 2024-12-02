// import React from 'react'
import Logo from "../assets/logo.png"
import FooterImg from "../assets/footer2.jpg"
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa"

const BannerImg = {
    backgroundImage: `url(${FooterImg})`,
    backgroundPosition: 'bottom',
    backgroundrepeat: 'no-repeat',
    backgroundsize: 'cover',
    height: '100%',
    width: '100%',
    // opcity: '0.2'
}

const FooterLinks = [
    {
        title: 'Home',
        link: "/#"
    },
    {
        title: 'About',
        link: "/#about"
    },
    {
        title: 'Contact',
        link: "/#contact"
    },
    {
        title: 'Blog',
        link: "/#blog"
    }
]

function Footer() {
    return (
        <div className="text-white py-16" style={BannerImg}>
            <div className="container">
                <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
                    {/* Company details */}
                    <div className="px-4 py-8">
                        <h1 className="
                                sm:text-3xl text-xl sm:text-left text-justify
                                font-bold 
                                flex items-center gap-3
                                mb-3
                            "
                        >
                            <img src={Logo} alt="Footer Logo" className="max-w-[50px]" />
                            Shopsy
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in beatae ea recusandae blanditiis veritatis.
                        </p>
                    </div>

                    {/* Footer Links */}
                    <div className="flex justify-around items-center">
                        <div>
                            <div className="px-4 py-8">
                                <h1 className="
                                        sm:text-3xl text-xl sm:text-left text-justify
                                        font-bold 
                                        flex items-center gap-3
                                        mb-3
                                    "
                                >
                                    Important Links
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {
                                        FooterLinks.map(
                                            (data) => (
                                                <li
                                                    className="
                                                        cursor-pointer 
                                                        hover:text-main_color
                                                        hover:translate-x-1 duration-300
                                                        text-gray-200
                                                    "
                                                    key={data.title}
                                                >
                                                    <span>{data.title}</span>
                                                </li>
                                            )
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="px-4 py-8">
                                <h1 className="
                                        sm:text-3xl text-xl sm:text-left text-justify
                                        font-bold 
                                        flex items-center gap-3
                                        mb-3
                                    "
                                >
                                    Links
                                </h1>
                                <ul className="flex flex-col gap-3">
                                    {
                                        FooterLinks.map(
                                            (data) => (
                                                <li
                                                    className="
                                                        cursor-pointer 
                                                        hover:text-main_color
                                                        hover:translate-x-1 duration-300
                                                        text-gray-200
                                                    "
                                                    key={data.title}
                                                >
                                                    <span>{data.title}</span>
                                                </li>
                                            )
                                        )
                                    }
                                </ul>
                            </div>
                        </div>

                    </div>

                    {/* Social Links */}
                    <div>
                        <div className="px-24 ">
                            <div className="flex items-center gap-3 mt-7 py-3">
                                <a href="#">
                                    <FaInstagram className="text-3xl hover:text-main_color" />
                                </a>
                                <a href="#">
                                    <FaFacebook className="text-3xl hover:text-main_color" />
                                </a>
                                <a href="#">
                                    <FaLinkedin className="text-3xl hover:text-main_color" />
                                </a>

                            </div>
                            <div className="flex items-center gap-3 py-3 cursor-default hover:text-main_color">
                                <FaLocationArrow />
                                <span>Menoufia, Shebin elkom</span>
                            </div>
                            <div className="flex items-center gap-3 py-3 cursor-default hover:text-main_color">
                                <FaMobileAlt />
                                <span>01022873555</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer