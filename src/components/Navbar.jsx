import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
    let text_color = 'text-zinc-900 ';

    return (
        <>
            <nav>
                <div className="w-[97.8%] border-b-[2px] xl:top-auto 2xl:top-auto md:top-0 sm:top-0  border-zinc-800 z-50  fixed bg-[#f1faee]">
                    <div className="flex justify-between items-center ">
                        <div className={`ml-5 text-xl flex gap-2 justify-center ${text_color}`}>
                            <img src="/assets/astronaut 1.svg" alt="" />
                            <NavLink to='/'>GL17</NavLink></div>
                        <div className="flex justify-center  items-center ">
                            <div className={`px-10 border-x-[2px] border-zinc-800 border-dotted flex flex-grow cursor-pointer
                                justify-center items-center py-2 text-zinc-300 hover:text-red-500 ${text_color}`} >
                                <NavLink to='/projects' > Projects </NavLink>
                            </div>
                            <div className={`px-10 border-r-[2px] border-dotted border-zinc-800 flex flex-grow cursor-pointer
                                justify-center items-center py-2 text-zinc-300 hover:text-red-500 ${text_color}`}>
                                <a
                                    href="/assets/Gautam Lodwal (3).pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Resume
                                </a>

                            </div>
                            <div className={`px-10 2xl:border-none xl:border-none md:border-r-[2px] sm:border-r-[2px] md:border-zinc-700 sm:border-zinc-700 flex flex-grow cursor-pointer
                                justify-center items-center py-2 text-zinc-300 hover:text-red-500 ${text_color}`}>
                                <NavLink to='/about' >
                                    About
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
