// import React from 'react'
import Banner from '../assets/orange.jpeg'

const BannerImage = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: 'center',
    backgroundrepeat: 'no-repeat',
    backgroundsize: 'cover',
    height: '100%',
    width: '100%'
}

function NewProduct() {
    return (
        <div
            data-aos = "zoom-in"
            style={BannerImage}
            className='
                bg-gray-100 dark:bg-gray-800
                text-white 
                mb-20
            '
        >
            <div className='container backdrop-blur-sm py-10'>
                <div className='space-y-6 max-w-xl mx-auto'>
                    <h1 className='text-2xl !text-center sm:text-left sm:text-4xl font-semibold'>Get Notified About New Products</h1>
                    <input 
                        type='text'
                        placeholder='Enter Your Email Address'
                        className='w-full p-3'
                        data-aos='fade-up'
                    />
                </div>
            </div>
        </div>
    )
}

export default NewProduct