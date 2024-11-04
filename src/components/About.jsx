import React from 'react'
const About = () => {
    return (
        <>
            <section className='w-[60%] my-5 mx-auto ' >
                <h1 className='sm:w-[80%] md:w-[50%] xl:w-[70%] 2xl:w-[70%] text-xl mt-5 text-zinc-100 font- font-mono'>
                    Crafting detailed interfaces which creates impacts.
                </h1>   
               <div className="flex justify-between items-center">
               <p className='sm:w-[80%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] text-md mt-5 mb-2 text-zinc-300' >
                    I'm Gautam an India based developer and a creative designer specializing in fullstack development[MERN] with a focus on making interfaces simple and usable. 
                    I'm passionate about design and technology and how these two can create good user resources.
                </p>
                <img className='hidden 2xl:w-[100px] xl:w-[100px] lg:w-[100px] md:w-[100px] md:block xl:block 2xl:block lg:block' src="./assets/eye.svg" width={100} alt="" />

               </div>
                <section className='flex gap-10 items-center my-5' >
                    <button className='border border-zinc-700 px-2 py-1 rounded-lg bg-zinc-800 text-white'>
                        <a href="mailto:gautamlodwal17@gmail.com">Email me</a>
                    </button>
                    <button className='border border-zinc-700 px-2 py-1 rounded-lg bg-zinc-800 text-white hover:shadow-[10px_35px_60px_-15px_rgba(127,17,224,0.5)]'
                    >
                        <a href='/assets/Gautam Lodwal.pdf'>
                            Resume
                        </a>
                    </button>
                </section>

            </section>
            <hr class="h-px w-[60%] mx-auto my-8 bg-gray-200 border-0 dark:bg-zinc-800" />

            <section className='w-[60%] mx-auto my-5' >
                <h2 className='font-medium text-zinc-200 text-md'>Currently</h2>
               <div className="flex justify-between items-center">
               <p className='sm:w-[80%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] text-md mt-5 text-zinc-300' >
                    I'm in my final year of engineering and
                    looking for an internship and early career opportunities for sde roles.
                    And everyday learning something new about web and machine learning.
                </p>
                <img className='hidden sm:hidden md:block xl:block 2xl:block lg:block' src="./assets/drop.svg" width={100} alt="" />

               </div>
                <p className='sm:w-[80%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] text-md  mb-2 text-zinc-300' >
                I'm trying to learn more about AI and to make more sustainable apps.
                </p>
            <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-zinc-800" />
            </section>
        </>
    )
}

export default About
