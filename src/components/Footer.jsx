import React, { useEffect, useState } from 'react';

const Footer = () => {
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });

  useEffect(() => {
    const updateClock = () => {
      let date = new Date();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();
      if (hour > 12) {
        hour -= 12;
      }
      setTime({ hour, minute, second });
    };

    updateClock(); 
    const intervalId = setInterval(updateClock, 1000); 

    return () => clearInterval(intervalId); 
  }, []); 

  return (
    <footer className='w-[70%] mx-auto flex md:justify-between 2xl:justify-between xl:justify-between sm:felx-col items-center gap-2 py-1 mt-10 overflow-hidden '>
      <div className="flex items-center 2xl:gap-10 xl:gap-10 md:gap-10 sm:gap-6 gap-2 ">
        <a target='#' className='bg-black border border-zinc-800 py-1 px-2 hover:bg-purple-300 hover:border-purple-600 hover:text-zinc-900 text-zinc-400 font-semibold' href="https://github.com/GautamL17">
          Github
        </a>
        <a target='#' className='bg-black border border-zinc-800 py-1 px-2 hover:bg-purple-300 hover:border-purple-600 hover:text-zinc-900 text-zinc-400 font-semibold' href="https://www.linkedin.com/in/gautam-lodwal-292682235/">
          LinkedIn
        </a>
      </div>
      <div className="border-zinc-800 border font-mono text-purple-400 py-1 px-2 items-center">
        {time.hour}:{time.minute < 10 ? `0${time.minute}` : time.minute}:{time.second < 10 ? `0${time.second}` : time.second}
      </div>
    </footer>
  );
};

export default Footer;
