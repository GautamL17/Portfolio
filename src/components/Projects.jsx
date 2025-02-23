import React from 'react';
import ProjectsData from '../utils/ProjectsData';
import Navbar from './Navbar';
import OuterLayout from './OuterLayout';
import BottomInfo from './BottomInfo';

const Projects = () => {
    return (
        <>
            <OuterLayout />
            <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="w-[98%] h-[96%] border-[2px] border-zinc-800 overflow-y-auto scroll-hidden bg-black font-mono">
                    <Navbar />
                    <div className="flex mb-30 text-white">
                        <div className=" w-[100%] ">
                            <div className=" mt-30 ">
                                <div className="mx-20 border-2 border-dotted border-zinc-700 px-2 py-3">
                                    <div className="">
                                        <h2 className="text-2xl font-spacemono py-5 px-3 border-dotted border-zinc-700 ">
                                            Projects✨
                                        </h2>
                                        <div className="gap-[5%]">
                                            {
                                                ProjectsData.map((data, index) => (
                                                    <div key={index} className="relative flex flex-col justify-center group w-full my-2 py-8 px-1 border-2 border-dotted border-zinc-700 ">
                                                        {/* Project Content */}
                                                        <div className="flex  gap-3 items-center ml-3">
                                                            {/* <div className="w-10 h-10 rounded-3xl flex justify-center items-center bg-red-500">
                                            <box-icon color='#FFFF' name={data.icon}></box-icon>
                                        </div> */}
                                                            <div className="">
                                                                <p className="text-xl">{data.projectName}</p>
                                                            </div>
                                                        </div>
                                                        <p className="pl-3">
                                                            {data.detail}
                                                        </p>

                                                        {/* Hover Box */}
                                                        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                            {/* <p className="text-lg text-black">More Details</p> */}
                                                            <a
                                                                href={data.projectLink}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-white-500 mt-2"
                                                            >
                                                                Visit Projects
                                                            </a>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BottomInfo/>
                </div>
            </div>
        </>
    );
};

export default Projects;