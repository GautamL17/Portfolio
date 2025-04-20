import React from 'react'

const OuterLayout = () => {
  let right_scale_css = 'border-t-2 flex-grow flex border-dotted border-zinc-800 justify-center items-center text-center text-xs'
  let left_scale_css = "border-t-2 flex-grow flex border-dotted border-zinc-800 justify-center items-center text-center text-xs "
  let top_scale_css = "border-r-2 border-dotted border-zinc-800 flex-grow text-center text-xs "
  let bottom_scale_css = "border-r-2 border-t-2 border-dotted border-zinc-800 flex-grow text-center text-xs "
  return (
    <>
      {/* top-scale */}
      <div className="fixed w-full top-0 bg-[#f1faee] text-zinc-900 hidden h-[4%] md:flex font-sapcemnono">
        <div className="flex justify-center w-full mx-auto ">
          <div className={`${top_scale_css}`}>1</div>
          <div className={`${top_scale_css}`}>2</div>
          <div className={`${top_scale_css}`}>3</div>
          <div className={`${top_scale_css}`}>4</div>
          <div className={`${top_scale_css}`}>5</div>
          <div className={`${top_scale_css}`}>6</div>
          <div className={`${top_scale_css}`}>7</div>
          <div className="flex-grow text-center text-xs">8</div>
        </div>
      </div>

      {/* bottom-scale */}
      <div className="fixed w-screen bottom-0 bg-[#f1faee] text-zinc-900">
        <div className="flex justify-center w-full h-[4%] mx-auto  items-center self-center ">
          <div className={`${bottom_scale_css}`}>1</div>
          <div className={`${bottom_scale_css}`}>2</div>
          <div className={`${bottom_scale_css}`}>3</div>
          <div className={`${bottom_scale_css}`}>4</div>
          <div className={`${bottom_scale_css}`}>5</div>
          <div className={`${bottom_scale_css}`}>6</div>
          <div className={`${bottom_scale_css}`}>7</div>
          <div className="flex-grow text-center text-xs ">8</div>
        </div>
      </div>

      {/* left-scale */}
      <div className="fixed left-0 h-screen w-[1%] bg-[#f1faee] text-zinc-900">
        <div className="flex flex-col h-full ">
          <div className="flex-grow flex justify-center border-dotted border-zinc-600 items-center text-center text-xs">A</div>
          <div className={`${left_scale_css}`}>B</div>
          <div className={`${left_scale_css}`}>C</div>
          <div className={`${left_scale_css}`}>D</div>
          <div className={`${left_scale_css}`}>E</div>
        </div>
      </div>

      {/* right-scale */}
      <div className="fixed right-0 h-screen w-[1%] bg-[#f1faee] text-zinc-900">
        <div className="flex flex-col h-full ">
          <div className="flex-grow flex justify-center border-dotted border-zinc-600 items-center text-center text-xs">A</div>
          <div className={`${right_scale_css}`}>B</div>
          <div className={`${right_scale_css}`}>C</div>
          <div className={`${right_scale_css}`}>D</div>
          <div className={`${right_scale_css}`}>E</div>
        </div>
      </div>
    </>
  )
}

export default OuterLayout
