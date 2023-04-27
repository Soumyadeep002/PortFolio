import React from 'react'
import Typewriter from "typewriter-effect";
import { forwardRef } from 'react'


const Intro = forwardRef((props, ref) => {
    return (
        // <!-- intro start -->
        <div className="intro md:flex justify-between items-center md:mx-28 md:w-3/4 mt-11 " ref={ref}>
            {/* <!-- left --> */}
            <div className="left space-y-14 md:ml-20 px-7 mt-8">
                <div className="title font-bold text-5xl md:text-7xl space-y-5">
                    <div className="hi text-3xl md:text-5xl">Hello, It's Me</div>
                    <div className="hi ">Soumyadeep Ganguly </div>
                    <div className="hi flex text-3xl md:text-5xl mt-3">I'm a  <span className=' ml-3 multitext'>

                            <Typewriter
                                options={
                                    {
                                        autoStart: true,
                                        loop: true,
                                        delay: 40,                             
                                        strings:[" Data Analyst", " AI/ML Developer", " Tech Enthusiast"],
                        
                                    }
                                }
                            />

                        </span></div>
                </div>
              
                <div className="note ml-2 md:w-full">As a data science student with a strong passion for AI development and creative problem-solving, I am driven to create impactful solutions through innovative thinking and technical expertise. With a solid foundation in data analysis, machine learning, and programming languages such as Python and R, I am eager to apply my skills to real-world challenges and make a meaningful contribution to the field of data science.
                </div>
                <div className="btn ml-5">
                    <button type="button"
                        className="border-2 p-4 text-xl rounded-full border-black hover:bg-black hover:text-white  md:transition md:ease-in-out md:delay-150 md:hover:-translate-y-1 md:hover:scale-110 md:duration-200"><a href='MYCV.pdf' download="CV of Soumyadeep Ganguly">Downlod
                        CV</a></button>
                </div>
                <div className="hidden md:block">
                    <ul className=" flex space-x-4">
                        <li className="font-extrabold text-3xl"><a href="https://www.facebook.com/soumyadeep.ganguly.758" target="_blank"><img className='w-8 h-8 cursor-pointer' src="facebook.png" alt="F"/></a></li>
                        <li className="font-extrabold text-3xl"><a href="https://www.instagram.com/sg.arts_5181/" target="_blank"><img className='w-8 h-8 cursor-pointer' src="instagram.png" alt="I"/></a></li>
                        <li className="font-extrabold text-3xl"><a href="https://www.linkedin.com/in/soumyadeep-ganguly-76652822a/" target="_blank"><img className='w-8 h-8 cursor-pointer' src="linkedin.png" alt="L"/></a></li>
                        <li className="font-extrabold text-3xl"><a href="https://github.com/Soumyadeep002" target="_blank"><img className='w-8 h-8 cursor-pointer' src="github.png" alt="G"/></a></li>
                        
                    </ul>
                </div>
            </div>

            {/* <!-- right --> */}
            <div className="hero flex mt-6 ml-14 justify-between  ">
                <div className="socials  mt-24 md:hidden md:py-5">
                    <ul className="space-y-4 ">
                        <li className="font-extrabold text-3xl"><a href="https://www.facebook.com/soumyadeep.ganguly.758" target="_blank"><img  className=' w-8 h-8' src="facebook.png" alt="F"/></a></li>
                        <li className="font-extrabold text-3xl"><a href="https://www.instagram.com/sg.arts_5181/" target="_blank"><img  className=' w-8 h-8' src="instagram.png" alt="I"/></a></li>
                        <li className="font-extrabold text-3xl"><a href="https://www.linkedin.com/in/soumyadeep-ganguly-76652822a/" target="_blank"><img  className=' w-8 h-8' src="linkedin.png" alt="L"/></a></li>
                        <li className="font-extrabold text-3xl"><a href="https://github.com/Soumyadeep002" target="_blank"><img  className=' w-8 h-8' src="github.png" alt="G"/></a></li>
                    </ul>
                </div>
                <img className="h-96 md:h-[42rem] md:w-[95rem] md:pt-16 ml-2 md:ml-32 " src="hero.png" alt="hero" />

            </div>




        </div>



    );
});

export default Intro;