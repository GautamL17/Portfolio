import React from 'react'
import OuterLayout from './OuterLayout'
import Navbar from './Navbar'
import BottomInfo from './BottomInfo'
const About = () => {
  return (
    <>
      <OuterLayout />
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[98%] h-[96%] border-[2px] border-zinc-800 overflow-y-auto scroll-hidden bg-black font-mono">
          <Navbar />
          <div className="mx-20 mt-20 ">
            <div className="flex justify-between">
              <div className="bg-b0 w-[70%] flex flex-col text-white text-lg bg border-dotted border-2 border-zinc-700 pb-2">
                <h1 className='text-xl font-spacemono border-dotted border-b-2 border-zinc-700 py-2 px-3'>
                  About Me<span className='translate-y-2'>👀</span>
                </h1>
                <div className="px-3 py-1 text-zinc-400">
                  <p className='hover:text-zinc-100' >Hello, first of all thanks for stoping by🙃</p>
                  <p className='hover:text-zinc-100' >
                    I'm Gautam, and my name means <span className='text-zinc-100'>"bright light" or "one who dispels darkness"</span>, symbolizing wisdom, compassion, and kindness—the same energy I bring to my work 💪🏻
                  </p>
                  <p className='hover:text-zinc-100' >Since my school days, I’ve been fascinated by computers. The moment I was introduced to them, I knew I wanted to be a software developer 🤖. That passion has only grown stronger over the years.
                  </p>
                  <p className='hover:text-zinc-100' >
                    Beyond coding, I have a deep appreciation for design—whether it's architecture, UI/UX, or anything creative 🙈. I've always been a creative person, and I believe creativity is what makes each of us unique 🧐
                  </p>
                  <p className='hover:text-zinc-100' >
                    Apart from this I also love to watch animes, web series, and sometimes I read mangas.
                    My favouraite manga/anime is One Piece 🤌🏻
                  </p>
                  <p className='hover:text-zinc-100' >
                    I also prioritize fitness, reading, and exploring new places. As an ambivert, I can be a bit socially awkward, but I believe change is the only constant—so I’m working on being more socially active and enthusiastic ✨
                  </p>
                  <p className='hover:text-zinc-100' >
                    Got something on your mind? Let’s chat 💬 over a cup of chai ☕ and dive into fun, meaningful conversations!
                  </p>
                </div>
              </div>
              <div className="border-y-2 border-r-2 border-zinc-700 border-dotted w-[30%] flex justify-center items-center">
                <div className="w-[50%] relative h-[50%] border-2 border-zinc-700 border-dotted rotate2 group">
                  <div className="absolute z-30 group-hover:z-0">
                    <img src="/assets/website_profile_1.jpg" alt="website_profile_1" />
                  </div>
                  <div className="absolute group-hover:transition-all group-hover:transform group-hover:scale-105 hover:z-50 hover:transition hover:border-2 hover:border-dotted hover:border-zinc-700">
                    <img src="/assets/website_profile_2.jpg" alt="website_profile_2" />
                  </div>
                </div>

              </div>
            </div>
          </div>
          <BottomInfo />
        </div>
      </div>
    </>
  )
}

export default About
