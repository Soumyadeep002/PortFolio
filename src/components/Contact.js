import React, { forwardRef } from 'react'

const Contact = forwardRef((props, ref) => {
    return (
        <div>
            {/* <!-- contact  --> */}
            <hr />
            <div className="contact text-5xl font-bold px-10 pt-16" ref={ref}>Contact Me</div>
            <div className="ind mx-10 my-8 md:flex items-center md:space-x-3">
                <div className="title text-4xl font-bold">Email:</div>
                <div className="sub-title text-xl md:text-4xl ">soumyadeepganguly1922@gmail.com</div>
            </div>
            <div className="ind mx-10 my-8 md:flex items-center md:space-x-3">
                <div className="title text-4xl font-bold">Phone:</div>
                <div className="sub-title text-xl md:text-4xl">+91 6290785895</div>
            </div>
            <div className="ind mx-16 my-8 md:flex items-center md: space-x-3">

                <div className=" flex md:block sub-title text-xl md:text-4xl justify-center items-center"><div className="">
                    <ul className=" flex space-x-4 md:space-x-10  ">
                        <li className="font-extrabold text-3xl"><a href="https://www.facebook.com/soumyadeep.ganguly.758" target="_blank"><img className='w-8 h-8 cursor-pointer' src="facebook.png" alt="F" /></a></li>
                        <li className="font-extrabold text-3xl"><a href="https://www.instagram.com/sg.arts_5181/" target="_blank"><img className='w-8 h-8 cursor-pointer' src="instagram.png" alt="I" /></a></li>
                        <li className="font-extrabold text-3xl"><a href="https://www.linkedin.com/in/soumyadeep-ganguly-76652822a/" target="_blank"><img className='w-8 h-8 cursor-pointer' src="linkedin.png" alt="L" /></a></li>
                        <li className="font-extrabold text-3xl"><a href="https://github.com/Soumyadeep002" target="_blank"><img className='w-8 h-8 cursor-pointer' src="github.png" alt="G" /></a></li>

                    </ul>
                </div></div>
            </div>
            {/* copyright */}
            <div className='w-screen h-10 bg-black mb-10 items-center'>
                <div className=" py-2">
                    <div className="icon flex justify-center items-center space-x-2">
                        <span class="material-symbols-outlined text-white">
                            copyright
                        </span>
                        <div className=" text-white">Soumyadeep, 2023</div>

                    </div>
                </div>
            </div>

            {/* <!-- end of contact  --> */}

        </div>
    );
});

export default Contact;
