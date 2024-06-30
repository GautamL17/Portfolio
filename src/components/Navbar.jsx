import React from 'react'

const Navbar = () => {
  return (
    <>
      <header className='w-[70%] h-10 mx-auto z-10  bg-gradient-to-br from-pink-500 via-fuchsia-400 to-purple-500 box-shadow-lg box-shadow-[#e3e3e3] flex items-center justify-center rounded-sm mt-4'>
        <nav className='relative flex gap-10 overflow-hidden items-center justify-center'>
          <div className='flex whitespace-nowrap animate-loop-scroll text-base text-black items-center justify-center'>
            Currently open for SDE internships and roles.
          </div>
          <div className='flex whitespace-nowrap animate-loop-scroll text-base text-black ' aria-hidden='true'>
            Currently open for SDE internships and roles.
          </div>
          <div className='flex whitespace-nowrap animate-loop-scroll text-base text-black ' aria-hidden='true'>
            Currently open for SDE internships and roles.
          </div>
          <div className='flex whitespace-nowrap animate-loop-scroll text-base text-black ' aria-hidden='true'>
            Currently open for SDE internships and roles.
          </div>
          <div className='flex whitespace-nowrap animate-loop-scroll text-base text-black ' aria-hidden='true'>
            Currently open for SDE internships and roles.
          </div>
          <div className='flex whitespace-nowrap animate-loop-scroll text-base text-black' aria-hidden='true'>
            Currently open for SDE internships and roles.
          </div>
          <div className='flex whitespace-nowrap animate-loop-scroll text-base text-white' aria-hidden='true'>
            Currently open for SDE internships and roles.
          </div>
        </nav>
        {/* <div className="w-32 absolute  h-[24px] bg-black top-0"></div> */}
      </header>
    </>
  )
}

export default Navbar
