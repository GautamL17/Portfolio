import React from 'react'
import FeaturedProjectData from '../utils/FeaturedProjectData'
const FeaturedProjects = () => {
    return (
        <>
            <div className="flex mt-60 mb-30 text-white">
                <div className=" w-[100%] ">
                    <div className=" mt-30 border-y-2 border-dotted border-zinc-700">
                        <div className="mx-20 borer-x-2 borer-dotted border-zinc-700 ">
                            <div className="">
                                <h2 className="text-2xl font-spacemono py-5 px-3 border-b-2 border-x-2 border-dotted border-zinc-700 ">
                                    Featured Projects
                                </h2>
                                <div className="flex justify-between gap-[5%]">
                                    {
                                        FeaturedProjectData.map((data, index) => (
                                            <div key={index} className="text-white relative flex flex-col justify-center group  w-[50%] py-8 px-1 border-x-2 border-dotted border-zinc-700 ">
                                                {/* Project Content */}
                                                <div className="flex text-white gap-3 items-center ml-3">
                                                    <div className="">
                                                        <p className="text-xl ">{data.projectName}</p>
                                                    </div>
                                                </div>
                                                <p className="ml-3 text-whi">
                                                    {data.detail}
                                                </p>

                                                {/* Hover Box */}
                                                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 text-white flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">

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
                    {/* salutations */}
                    <div className="flex flex-col items-center justify-center mb-15 mt-70">
                        <p>Made with love by Gauti💖</p>
                        <p>See y'all later👋🏻</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FeaturedProjects
