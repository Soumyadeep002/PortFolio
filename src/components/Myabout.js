import React, { forwardRef } from 'react'


const Myabout = forwardRef((props, ref) => {
    return (
        <div className='' ref={ref}>
            <hr />
            {/* <!-- about  --> */}
            <div className="about my-28  pl-7 mx-14" >
                <div className="title font-bold text-5xl md:text-7xl">About me</div>      {/* when Experience is available, md:justify-between will be added here*/}
                <div className="section mt-8 md:flex px-3 space-y-5 md:space-x-28">
                    <div className="edu ">
                        <h3 className="font-bold text-3xl">Education</h3>
                        <div className="sub_section mx-2">
                            <ul className='space-y-3'>
                                <li className="font-semibold text-xl"><div>
                                    <div className="course">B.Sc in IT (Data Science)</div>
                                    <div className="institute hidden md:block text-slate-500">Maulana Abul Kalam Azad University of Technology, West Bengal</div>
                                    <div className="institute hidden md:block text-slate-500">2021 to 2024</div>
                                    <div className="institute md:hidden text-slate-500">MAKAUT, WB (2021 to 2024)</div>
                                    </div></li>
                                <li className="font-semibold text-xl"><div>
                                    <div className="course">Higher Secondary</div>
                                    <div className="institute hidden md:block text-slate-500">West Bengal Council of Higher Secondary Education</div>
                                    <div className="institute hidden md:block text-slate-500">2019 to 2021</div>
                                    <div className="institute md:hidden text-slate-500">WBBCHSE (2019 to 2021)</div>
                                    </div></li>
                                <li className="font-semibold text-xl"><div>
                                    <div className="course">10th Standard </div>
                                    <div className="institute hidden md:block text-slate-500">West Bengal Board of Secondary Education </div>
                                    <div className="institute hidden md:block text-slate-500">2019</div>
                                    <div className="institute md:hidden text-slate-500">WBBSE (2019)</div>
                                    </div></li>
                                
                            </ul>
                        </div>
                    </div>

                    <div className="edu ">
                        <h3 className="font-bold text-3xl">Skills</h3>
                        <div className="sub_section mx-5">
                            <ul className='ss space-y-3'>
                                <li className="font-semibold text-xl">Git<div className='text-slate-500'>Gitbash, Github</div></li>
                                <li className="font-semibold text-xl">SQL<div className='text-slate-500'>MySQL</div></li>
                                <li className="font-semibold text-xl">Python<div className='text-slate-500'>Numpy, Pandas, OpenCV</div></li>
                                <li className="font-semibold text-xl">C & C++<div className='text-slate-500'>Compititive coding, DSA</div></li>
                                <li className="font-semibold text-xl">Data Analitics<div className='text-slate-500'>Jupyter Notebook</div></li>
                                <li className="font-semibold text-xl">Data Visualisation<div className='text-slate-500'>Matplotlib, Seaborn, PowerBI</div></li>
                            </ul>
                        </div>
                    </div>
                    <div className="edu hidden">
                        <h3 className="font-bold text-3xl">Experience</h3>
                        <div className="sub_section mx-5">
                            <ul>
                                <li className="font-semibold text-xl">items</li>
                                <li className="font-semibold text-xl">items</li>
                                <li className="font-semibold text-xl">items</li>
                                <li className="font-semibold text-xl">items</li>
                                <li className="font-semibold text-xl">items</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <hr></hr>
        </div>
    );
});

export default Myabout;