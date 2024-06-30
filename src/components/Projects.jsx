import React from 'react'

const Projects = () => {
  return (
    <>
        <section className='w-[70%] mx-auto  mb-5' >
                <span className='font-semibold text-zinc-200 text-sm  border-transparent' >PROJECTS</span>
                <p className='sm:w-[80%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] text-sm my-5 text-zinc-100' >
                    <a className=' border-b border-purple-300 hover:bg-purple-300 hover:text-black mr-1 font-semibold' href="https://github.com/GautamL17/NoteWave">Notewave</a>
                     is a note storing app, it stores all the data (pdfs,images,texts) 
                    in one note. Techstack here used is MERN stack
                </p>
                <p className='sm:w-[80%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] text-sm my-5 text-zinc-100' >
                    <a className=' border-b border-pink-300 hover:bg-pink-300 hover:text-black mr-1 font-semibold' href="https://github.com/GautamL17/NoteWave">Voting App</a>
                    is a voting application that allows users to vote various candidates
                </p>
                </section>
    </>
  )
}

export default Projects
