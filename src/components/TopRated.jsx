// import React from 'react'
import Img1 from '../assets/shirt.png'
import Img2 from '../assets/shirt2.png'
import Img3 from '../assets/shirt3.png'
import { FaStar } from 'react-icons/fa'

const TopRatedProduct = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 2,
        img: Img2,
        title: "Printed shirt",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        img: Img3,
        title: "Women shirt",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
]

const TopRated = ( { handleOrderPopup }) => {
    return (
        <div className="mt-14 mb-12">
            <div className="container">
                {/* Header Section */}
                <div className="text-left mb-24">
                    <p data-aos="fade-up" className="text-sm text-main_color">Top Rated Products for you</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold mt-3">Best Products</h1>
                    <p data-aos="fade-up" className="text-xs text-gray-400 mt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi</p>
                </div>

                {/* Body Section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                            place-items-center gap-20 md:gap-5'>
                    {
                        TopRatedProduct.map(
                            (data) => (
                                <div 
                                    key={data.id} 
                                    className='
                                        rounded-2xl
                                        bg-white dark:bg-gray-800 
                                        hover:bg-black/80 dark:hover:bg-main_color hover:text-white
                                        relative shadow-xl duration-300 group max-w-[300px]
                                    '
                                    data-aos = "zoom-in"
                                >
                                    {/* Image */}
                                    <div className='h-[100px]'>
                                        <img src={data.img} alt="Top rated image card"
                                            className='
                                                max-w-[140px]
                                                block mx-auto
                                                transform -translate-y-20
                                                group-hover:scale-105 duration-300
                                                drop-shadow-md
                                            '
                                        />
                                    </div>

                                    {/* Details */}
                                    <div className='p-4 text-center'>
                                        <div className='w-full flex items-center justify-center gap-1'>
                                            <FaStar className='text-yellow-500 mb-2 dark:group-hover:text-gray-600' />
                                            <FaStar className='text-yellow-500 mb-2 dark:group-hover:text-gray-600' />
                                            <FaStar className='text-yellow-500 mb-2 dark:group-hover:text-gray-600' />
                                            <FaStar className='text-yellow-500 mb-2 dark:group-hover:text-gray-600' />
                                        </div>
                                        <h1 className='
                                                font-bold tex-xl 
                                                dark:text-white/80 dark:group-hover:text-gray-800
                                            '
                                        >
                                            {data.title}
                                        </h1>
                                        <p className='
                                                text-sm 
                                                text-gray-600 dark:text-white/50 
                                                group-hover:text-white dark:group-hover:text-gray-600 
                                                duration-300 line-clamp-2
                                            '
                                        >
                                            {data.description}
                                        </p>
                                        <button className='
                                                    bg-main_color text-white 
                                                    group-hover:bg-white group-hover:text-main_color
                                                    dark:group-hover:bg-gray-600 dark:group-hover:text-white
                                                    hover:scale-105 duration-300
                                                    py-1 px-4 mt-4
                                                    rounded-full
                                                '
                                                onClick={handleOrderPopup}
                                        >
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default TopRated