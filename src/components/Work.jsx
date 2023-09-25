import React from 'react'
import PolyCalc from '../assets/PolynomialCalculator.png'
import TMS from '../assets/TuringMachineSimulator.png'
import RSG from '../assets/RandomSentenceGenerator.png'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-white bg-[black]'>

        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-white border-pink-600'>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-10'>
                <div style={{backgroundImage: `url(${PolyCalc})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    <div className='opacity-0 group-hover:opacity-100 '>
                        
                        <p className='text-2xl font-bold text-white text-center tracking-wider'>
                            Polynomial Calculator
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/riikacharya-code/PolynomialCalculator">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>

                    </div>
                </div>

                <div style={{backgroundImage: `url(${TMS})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    <div className='opacity-0 group-hover:opacity-100 '>
                        
                        <p className='text-2xl font-bold text-white text-center tracking-wider'>
                            Turing Machine Simulator
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/riikacharya-code/TuringMachineSimulator">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>

                    </div>
                </div>

                <div style={{backgroundImage: `url(${RSG})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                    <div className='opacity-0 group-hover:opacity-100 '>
                        
                        <p className='text-2xl font-bold text-white text-center tracking-wider'>
                            Random Sentence Generator
                        </p>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="https://github.com/riikacharya-code/Random-Sentence-Generator">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work