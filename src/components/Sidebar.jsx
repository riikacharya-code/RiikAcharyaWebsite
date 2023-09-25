import { FaLinkedin } from 'react-icons/fa'
import React, { useState } from 'react'
import '.././index.css'
import {Link} from 'react-scroll'

const Sidebar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed h-full w-[80px] flex justify-between items-center px-4 bg-[blue] text-white'>

            <div>
                <ul className='absolute top-0 left-0 w-full h-screen bg-[blue] flex flex-col justify-center items-center'>
                    <li>
                        <Link to="home" smooth={true} offset={50} duration={500}>
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="about" smooth={true} offset={50} duration={500}>
                        About
                        </Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} offset={50} duration={500}>
                        Skills
                        </Link>
                    </li>
                    <li>
                        <Link to="work" smooth={true} offset={50} duration={500}>
                        Work
                        </Link>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} offset={50} duration={500}>
                        Contact
                        </Link>
                    </li>
                </ul>
            </div>
            
            <div className='flex fixed flex-col top-[65%] left-4'>
                <ul>
                    <li className='w-[164px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
                        <a className='flex justify-between items-center w-full text-white'
                            href="https://www.linkedin.com/in/riik-acharya-8114a8201/">
                            LinkedIn <FaLinkedin size={40}/>
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar