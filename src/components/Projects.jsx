import React from 'react'
import 'boxicons'

const Projects = () => {
  return (
    <>
      <section className='w-[60%] mx-auto' >
        <span className='font-medium text-zinc-200 text-md border-transparent' >Projects</span>
        <div className="border rounded-lg mt-5 border-zinc-700 bg-zinc-900">
          <div className='sm:w-[100%] md:w-[100%] xl:w-[100%] 2xl:w-[100%] text-sm mt-2 text-zinc-100 p-2 border-transparent hover:border-zinc-700'> 
            <a className="flex gap-2 px-2 py-1 hover:bg-zinc-800 border border-zinc-900 hover:border-zinc-700 rounded-lg group" href="https://github.com/GautamL17/NoteWave">             {/* parent */}
              <div className="group-hover:bg-gradient-to-tr group-hover:from-blue-500 group-hover:to-fuchsia-500 bg-zinc-800 border rounded-lg border-zinc-700 p-2 flex justify-center items-center">{/* child */}
              <box-icon name='book-open' color='#ffffff' />
              </div>
              <a href="https://github.com/GautamL17/NoteWave">
                <a className='mr-1 font-semibold' href="https://github.com/GautamL17/NoteWave">
                Notewave
                </a>
                <p>
                It is a note storing app, it stores all the data (pdfs,images,texts) 
                in one note. Techstack here used is MERN stack
                </p>
              </a>
            </a>
          </div>
          <hr class="h-px w-[80%] mx-auto bg-gray-200 border-0 dark:bg-zinc-800" />
          <div className='sm:w-[100%] md:w-[100%] xl:w-[100%] 2xl:w-[100%] text-sm mb-5 text-zinc-100 p-2' > 
            <a className="flex gap-2 px-2 py-1 hover:bg-zinc-800 border border-zinc-900 hover:border-zinc-700 rounded-lg group" href="https://github.com/GautamL17/VotingApp-Backend/">             {/* parent */}
              <div className="group-hover:bg-gradient-to-tr group-hover:from-green-500 group-hover:to-emerald-600 bg-zinc-800 border rounded-lg border-zinc-700 p-2 flex justify-center items-center">{/* child */}
                <box-icon name='scatter-chart' color='#ffffff' />
              </div>
              <a href="https://github.com/GautamL17/VotingApp-Backend/">
                <a className='mr-1 font-semibold' href="https://github.com/GautamL17/VotingApp-Backend/">
                  Voting App
                </a>
                <p>
                  It is a voting application that allows users to vote various candidates
                </p>
              </a>
            </a>
          </div>
        </div>
        {/* <p className='sm:w-[80%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] text-sm my-5 text-zinc-100' >
                    <a className=' border-b border-purple-300 hover:bg-purple-300 hover:text-black mr-1 font-semibold' href="https://github.com/GautamL17/NoteWave">Notewave</a>
                     is a note storing app, it stores all the data (pdfs,images,texts) 
                    in one note. Techstack here used is MERN stack
                </p> */}
      </section>
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-zinc-800 w-[60%] mx-auto mt-10" />
    </>
  )
}

export default Projects
