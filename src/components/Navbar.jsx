// import React from 'react'
import Logo from '../assets/logo.png'
import { IoSearch } from "react-icons/io5";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/#"
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#"
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "/#"
    },
    {
        id: 4,
        name: "Mens Wear",
        link: "/#"
    },
    {
        id: 5,
        name: "Electronics",
        link: "/#"
    },
]

const DropdownLists = [
    {
        id: 1,
        name: "Tranding Products",
        link: "/#"
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#"
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#"
    }
]

const Navbar = () => {
    return (
        <div className='
                shadow-md 
                bg-white 
                dark:bg-gray-900 dark:text-white
                duration-200
                relative z-40
            '>
            {/* Upper Navbar */}
            <div className='bg-main_color/40 py-2'>
                <div className='container flex justify-between items-center'>
                    {/* Logo Image */}
                    <div>
                        <a
                            href='#'
                            className='
                                font-bold
                                text-2xl sm:text-3xl
                                flex gap-2
                            '>
                            <img
                                src={Logo}
                                alt='Logo'
                                className='w-10 uppercase' />
                            Shopsy
                        </a>
                    </div>

                    <div className='flex justify-between items-center gap-4'>
                        {/* Search Bar */}
                        <div className='relative group hidden sm:block'>
                            <input type='text'
                                placeholder='Search'
                                className='
                                    w-[200px] sm:w-[200px] 
                                    group-hover:w-[300px] 
                                    transition-all duration-300 
                                    rounded-full border border-gray-300
                                    px-2 py-1
                                    focus:outline-none focus:border-1 focus:border-main_color
                                    dark:border-gray-500 dark:bg-gray-800'
                            />
                            <IoSearch className='
                                    text-gray-500 
                                    group-hover:text-main_color
                                    absolute
                                    top-1/2
                                    -translate-y-1/2
                                    right-3'
                            />
                        </div>
                        {/* Order Button */}
                        <button
                            onClick={() => alert("Hellooo")}
                            title='Order'
                            className='
                                bg-gradient-to-r from-main_color to-second_color
                                transition-all duration-200
                                text-white
                                py-1 px-4
                                rounded-full
                                flex items-center
                                gap-3 group'
                        >
                            {/* <span 
                                className='
                                    group-hover:block
                                    hidden
                                    transition-all duration-200
                                    font-bold'
                            >Order</span> */}

                            {/* Cart Icon */}
                            <FaCartShopping
                                className='
                                    text-xl text-white
                                    drop-shadow-sm
                                    cursor-pointer'
                            />
                        </button>

                        {/* DarkMode Switch */}
                        <div>
                            <DarkMode />
                        </div>

                    </div>
                </div>
            </div>

            {/* Lower Navbar */}
            <div className='flex justify-center'>
                <ul className='sm:flex hidden items-center gap-4'>
                    {
                        Menu.map((data) => (
                            <li key={data.id}>
                                <a
                                    href={data.link}
                                    className=' 
                                        inline-block px-4 
                                        hover:text-main_color
                                        duration-200'
                                >{data.name}</a>
                            </li>
                        ))
                    }
                    {/* Dropdown Links */}
                    <li className='group relative cursor-pointer'>
                        <a
                            href='#'
                            className='flex items-center gap-[2px] py-2 hover:text-main_color'
                        >
                            Trending
                            <span>
                                <FaCaretDown
                                    className='
                                        transition-all duration-200
                                        group-hover:rotate-180'
                                />
                            </span>
                        </a>
                        <div
                            className='
                                absolute z-[1000] w-[200px] p-2
                                hidden group-hover:block
                                rounded-md 
                                bg-white text-black
                                shadow-md'
                        >
                            <ul>
                                {
                                    DropdownLists.map((data) => (
                                        <li key={data.id}>
                                            <a
                                                href={data.link}
                                                className=' 
                                                    inline-block p-2 w-full
                                                    hover:bg-main_color/20
                                                    duration-200
                                                    rounded-md'
                                            >{data.name}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar