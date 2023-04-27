import React, { forwardRef } from 'react'

const MyProjects = forwardRef((props, ref) => {
    return (
        <div ref={ref}> {/* // <!-- projects  --> */}

            {/* // <!-- project for pc --> */}
            <div className="projects-graphix hidden md:block " >
                <div className="head flex mt-7 items-center justify-center my-8">
                    <div className="title font-bold text-7xl p-10 mt-28" >My Projects</div>
                </div>

                <div className="section flex justify-center mt-6">
                    <div className="c mt-16 w-96 space-y-10">
                        <div className="box border-4 border-black p-20 text-3xl font-bold w-80 h-80 rounded-full">
                            {/* <!-- <div className="sb-t font-bold text-3xl flex "></div> --> */}
                            Fake News Detection

                        </div>
                        <div className="w-14 h-3 bg-black relative translate-x-80 -translate-y-48"></div>
                        <div className="box w-80 h-80 ">
                            <div className="labels font-bold text-4xl pr-10 relative translate-y-32 translate-x-28">September, 2022 <div
                                className="text-lg "><a href="https://github.com/Soumyadeep002/Face_Recognition_Attendance_System" target="_blank">Click here for Details</a></div>
                            </div>
                        </div>
                        <div className="box border-4 border-black p-20 text-3xl font-bold w-80 h-80 rounded-full">
                            Performance Analysis of Indian Railway Zones
                        </div>
                        <div className="w-14 h-3 bg-[#808080] relative translate-x-80 -translate-y-48"></div>
                        <div className="box w-80 h-80 ">
                            <div className="labels font-bold text-4xl pr-10 relative translate-y-32 translate-x-28"> February, 2023 <div
                                className="text-lg "><a href="https://github.com/Soumyadeep002/Facial_Emotion_Detection" target="_blank">Click here for Details</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="backbone w-3 h-[200vh] bg-gradient-to-b from-black to-white rounded-full"></div>

                    <div className="c mt-16 w-96 ml-16 space-y-10">
                        <div className="box w-80 h-80 ">
                            <div className="labels font-bold text-4xl relative translate-y-32 -translate-x-2">April, 2022 <div
                                className="text-lg "><a href="https://github.com/Soumyadeep002/Fake-News-Detection" target="_blank">Click here for Details</a></div>
                            </div>
                        </div>
                        <div className="box border-4 border-black p-20 text-3xl font-bold w-80 h-80 rounded-full">
                            Smart Attendance System
                        </div>
                        <div className="h-3 w-14 bg-[#6b6b6b] relative -translate-x-16 -translate-y-48"></div>
                        <div className="box w-80 h-80 ">
                            <div className="labels font-bold text-4xl relative translate-y-32 -translate-x-2">January, 2023 (Working) <div
                                className="text-lg "><a href="#" target="_blank">Click here for Details</a></div>
                            </div>
                        </div>
                        <div className="box border-4 border-black p-20 text-3xl font-bold w-80 h-80 rounded-full">
                            Facial Emotion Detection
                        </div>
                        <div className="h-3 w-14 bg-[#e7e7e7] relative -translate-x-16 -translate-y-48"></div>
                    </div>
                </div>


            </div>
            {/* // <!-- project for mobile  --> */}
            <div className="font-bold text-4xl py-8 px-6 md:hidden">My Projects</div>
            <div className="block md:hidden space-y-5 mx-6 mb-9">
                <div className="project1">
                    <div className="title font-bold text-2xl pl-6"><a href="https://github.com/Soumyadeep002/Fake-News-Detection" target="_blank"> Fake-News-Detection</a></div>
                    <div className="date font-semibold pl-6">April, 2022</div>
                </div>
                <div className="project2">
                    <div className="title font-bold text-2xl pl-6"> <a href="https://github.com/Soumyadeep002/Face_Recognition_Attendance_System" target="_blank">Smart Attendance System</a></div>
                    <div className="date font-semibold pl-6">September, 2022</div>
                </div>
                <div className="project3">
                    <div className="title font-bold text-2xl pl-6"><a href="/" target="_blank">Performance Analysis of Indian Railway Zones</a></div>
                    <div className="date font-semibold pl-6">January, 2023 (Working)</div>
                </div>
                <div className="project4">
                    <div className="title font-bold text-2xl pl-6"><a href="https://github.com/Soumyadeep002/Facial_Emotion_Detection" target="_blank">Facial_Emotion_Detection</a></div>
                    <div className="date font-semibold pl-6">February, 2023</div>
                </div>
            </div>
        </div>
       

        //  <!-- end of projects -->
     
    );
});

export default MyProjects;