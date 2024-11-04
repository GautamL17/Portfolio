import React, { useEffect, useState } from 'react';

const Navbar = () => {
  const [time, setTime] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });
  const salutationsArray = ['नमस्ते', 'Hello', 'Bonjour', 'こんにちは', '你好', 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ', '안녕하세요'];
  const [salutationIndex, setSalutationIndex] = useState(0);

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

      // Update salutation every 2 seconds
    };
    function salutationFunction(){
      setSalutationIndex((prevIndex) => (prevIndex + 1) % salutationsArray.length);
    }

    updateClock();
    salutationFunction();
    const intervalId = setInterval(updateClock, 1000); // Adjust interval time as needed
    const salutationInterval = setInterval(salutationFunction,2000)
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <header>
        <div className='bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-[2px] w-full'></div>
        <div className="max-w-[60%] xl:flex md:flex lg:flex 2xl:flex sm:block items-center justify-between mx-auto mt-8">
          <div className="flex items-center gap-2 border border-zinc-700 px-2 py-1 rounded-lg bg-zinc-800">
            <span className='w-[10px] h-[10px] bg-green-500 rounded-full'></span>
            <p className='text-white'>Open for work</p>
          </div>

          <div className={`font-medium text-xl bg-gradient-to-r from-blue-600 via-fuchsia-500  to-pink-600 inline-block text-transparent bg-clip-text px-2 py-1 salutation animate-scaleUp sm:self-center sm:flex sm:justify-center sm:`}>
            {salutationsArray[salutationIndex]}
          </div>

          <div className="border border-zinc-700 px-2 py-1 rounded-lg bg-zinc-800 text-white ">
            {time.hour ? (time.hour < 10 ? `0${time.hour}` : time.hour) : time.hour === 0 ? 12 : ''}
            :{time.minute < 10 ? `0${time.minute}` : time.minute}
            :{time.second < 10 ? `0${time.second}` : time.second}
          </div>
        </div>
        <div className="flex justify-center items-center sm:hidden mt-10 mx-auto w-[60%] text-red-500">Best viewed in laptop/computer</div>
      </header>
    </>
  );
}

export default Navbar;
