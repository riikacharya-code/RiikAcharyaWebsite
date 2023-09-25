import { Link } from 'react-scroll'
import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {

    return (
        <div name='home' className='sm:w-half md:w-full h-screen bg-[black]'>
            <div className='max-w-[800px] mx-auto flex flex-col justify-center h-full text-white'>
                <p className='text-2xl'>
                    Hi, I'm
                </p>
                <h1 className='text-4xl sm:text-7xl font-bold text-pink-500'>Riik Acharya</h1>
                <h2 className='text-2xl sm:text-4xl text-white max-w-[700px]'>I'm a computer science and physics double major at Vassar College</h2>
                <div>
                    <Link to="work" smooth={true} offset={50} duration={500}>
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
                            Projects
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3 '/>
                            </span>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home