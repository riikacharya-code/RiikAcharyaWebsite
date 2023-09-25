import { useState } from 'react'
import Loader from 'react-loaders'

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    return (
        <>
        <div name='about' className='w-full h-screen bg-[black] text-white'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'> About</p>
                    </div>
                    <div></div> 
                    </div>
                    <div className='max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4 text-2xl'>
                        <div>
                            <p>
                                Hi, my name is Riik Acharya. I am a senior at Vassar College, and I am double majoring in Physics and Computer Science.
                                I am planning on landing a software engineering job after I graduate. I have several projects currently in 
                                development, and a few that I have completed. I have a list below.
                            </p>
                            <br />
                        </div>
                        <div>
                            <p>
                                I am fluent in several languages such as Python, Java, Racket, C, Cython, OCaml, Dart, Swift, HTML and CSS, and even some 
                                Assembly. I have experience building apps in Android, Flutter, and iOS, as well as Flask and React. Over the summer 
                                of 2022, I assisted Vassar College Proffessor Luke Hunsberger in his research regarding Simple Temporal Networks. 
                            </p>
                            <br />
                            <p>
                                I also have much experience testing software and running apps others have built on Android, iOS, and web simulators.
                                I also am experienced with Firebase and Firestore.
                            </p>
                        </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" /> 
        </>
        
    )
    
}

export default About