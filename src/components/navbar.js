import React, { useState } from 'react'
// import PropTypes from 'prop-types'


const Navbar = ({ homeref, aboutref, proref, conref, props }) => {

    // const ref =useRef(null)

    const handleclick1 = (e) => {
        e.preventDefault();
        aboutref.current.scrollIntoView({ behavior: "smooth" });
    };

    const handleclick2 = (e) => {
        e.preventDefault();
        proref.current.scrollIntoView({ behavior: "smooth" });
    };
    const handleclick3 = (e) => {
        e.preventDefault();
        conref.current.scrollIntoView({ behavior: "smooth" });
    };
    const handleclick4 = (e) => {
        e.preventDefault();
        homeref.current.scrollIntoView({ behavior: "smooth" });
    };
    // let burgur = document.getElementById('hamburgur')
    // let mobnav=document.getElementById('mobnav')
    // const [burger, setBurger] =useState("burger")
    const [mode, setMode] = useState('-translate-x-80')

    const toggleStyle=()=>{
        if (mode === '-translate-x-80') {
            setMode('-translate-x-0')
            
          }
        //   else {
        //     setMode('-translate-x-80')
        //     
        //   }

    }
    const close=()=>{
        if (mode === '-translate-x-0') {
            setMode('-translate-x-80')
            
          }
    }


    return (

        <div className="navbar bg-white  w-screen sticky top-0">
            <nav className="h-24">
                <div className="flex justify-between">
                    {/* <!-- logo --> */}
                    <div className="logo font-bold mx-7 text-5xl md:text-6xl cursor-pointer" onClick={handleclick4}>PortFolio</div>

                    {/* <!-- hamburgur for mobile--> */}
                    <div className="c flex justify-center items-center">
                        <div className=" mx-5 border-2 border-black p-2 rounded-md space-y-1 md:hidden cursor-pointer " onClick={toggleStyle}>
                            <div className="bg-black h-0.5 w-5"></div>
                            <div className="bg-black h-0.5 w-5"></div>
                            <div className="bg-black h-0.5 w-5"></div>
                            
                        </div>

                        {/* <input
                            class="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault" /> */}
                    </div>

                    {/* <!-- mobile nabbar  mode: -translate-x-80 --> */}

                    <div className={`fixed w-80 h-screen bg-white border-8  ${mode}`}>
                        <span className="material-symbols-outlined m-10 p-2 cursor-pointer border-2 border-black rounded-md" onClick={close}>
                            close
                        </span>
                        <ul className="mainMenu flex flex-col  space-y-4 justify-center items-center ">
                            <li className="font-sans text-2xl hover:font-semibold py-2" onClick={handleclick4}>Home</li>
                            <li className="font-sans text-2xl hover:font-semibold py-2" onClick={handleclick1}>About Me</li>
                            <li className="font-sans text-2xl hover:font-semibold py-2" onClick={handleclick2}>Projects</li>
                            <li className="font-sans text-2xl hover:font-semibold py-2" onClick={handleclick3}>Contact</li>
                        </ul>
                    </div>

                    {/* <!-- end of mobile nabbar --> */}

                    {/* <!-- navitems for large screen --> */}
                    <div className="navitems hidden md:flex mx-52 pt-6">
                        <ul className=" space-x-12 flex">
                            <li className="font-sans text-2xl hover:font-bold active:font-semibold cursor-pointer" onClick={handleclick4}>Home</li>
                            <li className="font-sans text-2xl hover:font-bold active:font-semibold cursor-pointer" onClick={handleclick1}>About Me</li>
                            <li className="font-sans text-2xl hover:font-bold active:font-semibold cursor-pointer" onClick={handleclick2}>Projects</li>
                            <li className="font-sans text-2xl hover:font-bold active:font-semibold cursor-pointer" onClick={handleclick3}>Contact</li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>

    );
};


export default Navbar;