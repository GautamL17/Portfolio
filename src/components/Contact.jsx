import React from 'react'
import OuterLayout from './OuterLayout'
import Navbar from './Navbar'
import BottomInfo from './BottomInfo'

const Contact = () => {
  return (
    <>
      <OuterLayout />
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[98%] h-[96%] border-[2px] border-zinc-800 overflow-y-auto scroll-hidden bg-black font-mono">
          <Navbar />
          <BottomInfo />
        </div>
      </div>
    </>
  )
}

export default Contact
