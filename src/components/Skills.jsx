import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import REACT from '../assets/react.png';
import FLUTTER from '../assets/flutter.png';
import PYTHON from '../assets/python.png';
import JAVA from '../assets/java.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[black] text-white'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Experience</p>
                <p className='py-4'>These are the technologies I've worked with:</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='hover:scale-110 duration-500'> 
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={REACT} alt="React icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={FLUTTER} alt="Flutter icon" />
                    <p className='my-4'>Flutter</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={PYTHON} alt="Python icon" />
                    <p className='my-4'>Python</p>
                </div>
                <div className='hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JAVA} alt="Java icon" />
                    <p className='my-4'>Java</p>
                </div>
            </div>
        </div>
    </div>
  )   
}

export default Skills