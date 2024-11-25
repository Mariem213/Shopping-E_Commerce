// import React from 'react'
import Img1 from '../assets/women.png'
import Img2 from '../assets/women2.jpg'
import Img3 from '../assets/women3.jpg'
import Img4 from '../assets/women4.jpg'
import Img5 from '../assets/women2.jpg'
import { FaStar } from 'react-icons/fa'

const ProductData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethnic",
        rating: 5.0,
        color: "White",
        aosDelay: 0
    },
    {
        id: 2,
        img: Img2,
        title: "Women western",
        rating: 4.8,
        color: "Red",
        aosDelay: 0
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        rating: 4.5,
        color: "Brown",
        aosDelay: 0
    },
    {
        id: 4,
        img: Img4,
        title: "Printed T-Shirt",
        rating: 3.2,
        color: "Yellow",
        aosDelay: 0
    },
    {
        id: 5,
        img: Img5,
        title: "Fashin T-Shirt",
        rating: 3.9,
        color: "Pink",
        aosDelay: 0
    }
]

const Products = () => {
    return (
        <div className="mt-14 mb-12">
            <div className="container">
                {/* Head Section */}
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-main_color">Top Selling Products for you</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold mt-3">Products</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400 mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
                </div>

                {/* Body Section */}
                <div>
                    <div className="
                            grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
                            place-items-center gap-5"
                    >
                        {/* Card Section */}
                        {
                            ProductData.map((data) => (
                                <div 
                                    data-aos="fade-up"
                                    data-aos-delay = {data.aosDelay}
                                    key={data.id} 
                                    className='space-y-3'
                                >
                                    <img src={data.img} alt="woman image card"
                                        className='
                                            h-[220px] w-[150px]
                                            object-cover rounded-md
                                        '
                                    />
                                    <div>
                                        <h3 className='font-semibold'>{data.title}</h3>
                                        <p className='text-sm text-gray-600'>{data.color}</p>
                                        <div className='flex items-center gap-1'>
                                            <FaStar className='text-yellow-400' />
                                            <span>{data.rating}</span>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                    <div 
                        data-aos="fade-up" 
                        className='
                            flex items-center justify-center
                            mt-10 mb-10'
                    >
                        <button 
                            className='
                            bg-main_color text-white hover:bg-second_color
                            font-bold
                            rounded-md 
                            px-5 py-2'
                        >
                            View All Products
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products