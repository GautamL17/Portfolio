import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
const Navbar = () => {
    let text_color = 'text-white';

    return (
        <>
            <nav>
                <div className="w-[97.8%] border-b-[2px] border-zinc-800 z-100  fixed bg-black">
                    <div className="flex justify-between items-center ">
                        <div className={`ml-5 text-xl ${text_color}`}><NavLink to='/'>GL17</NavLink></div>
                        <div className="flex justify-center  items-center ">
                            <div className={`px-10 border-x-[2px] border-zinc-800 border-dotted flex flex-grow cursor-pointer
                                justify-center items-center py-2 text-zinc-300 hover:text-zinc-100 ${text_color}`} >
                                <NavLink to='/projects' > Projects </NavLink>
                            </div>
                            <div className={`px-10 border-r-[2px] border-dotted border-zinc-800 flex flex-grow cursor-pointer
                                justify-center items-center py-2 text-zinc-300 hover:text-zinc-100 ${text_color}`}>
                                <a href="/assets/Gautam Lodwal.pdf">
                                    Resume
                                </a>
                            </div>
                            <div className={`px-10 border-r-[2px] border-dotted border-zinc-800 flex flex-grow cursor-pointer
                                justify-center items-center py-2 text-zinc-300 hover:text-zinc-100 ${text_color}`}>
                                <NavLink to='/about' >
                                    About
                                </NavLink>
                            </div>
                            {/* <div className={`px-10 flex flex-grow text-zinc-300 hover:text-zinc-100 justify-center items-center py-2 cursor-pointer
                                ${text_color}`}>
                                <NavLink to='/contact'>
                                    Contact
                                </NavLink>

                            </div> */}
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
