import React, { useEffect, useState, useRef } from 'react';
import 'boxicons';
import SplineTemplate from './SplineTemplate';
import axios from 'axios'
const Home = () => {
  const originalText = 'GAUTAM LODWAL';
  const [artData,setArtData] = useState(null);
  const [displayText, setDisplayText] = useState(originalText);
  const letters = 'ABCDE%F_+GHIJ$KL*MN^OPQRST!UVWXYZ';
  const intervalRef = useRef(null);

  useEffect(()=>{
    const fetchArtWork = async() => {
      try{
        const res = await axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/7')
        setArtData(res.data);
        console.log(res.data);
      }
      catch(error){
        console.log(error);
      }
    };
    fetchArtWork();
    return () => clearInterval(intervalRef.current);
},[])

  const socials = [
    {
      href: "https://www.linkedin.com/in/gautamlodwal/",
      icon: "linkedin",
    },
    {
      href: "https://github.com/GautamL17",
      icon: "github",
    },
    {
      href: "https://x.com/LodwalGautam",
      icon: "twitter",
    },
    {
      href: "mailto:gautamlodwal17@gmail.com",
      icon: "gmail",
    },
  ]
  const handleMouseEnter = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText((prevText) =>
        originalText
          .split('')
          .map((char, index) =>
            index < iteration ? originalText[index] : letters[Math.floor(Math.random() * letters.length)]
          )
          .join('')
      );

      iteration += 1 / 3;
      if (iteration > originalText.length) {
        clearInterval(intervalRef.current);
      }
    }, 50);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between mx-4 md:mx-10 lg:mx-20 text-zinc-300 mb-30 mt-30">
      <div className="mt-10 w-full md:w-[80%] text-zinc-900">
        <div className="cursor-pointer transition-all duration-300">
          <p onMouseEnter={handleMouseEnter} className="text-xl text-red-500 font-spacemono">
            {displayText}
          </p>
          <p className="text-xs">Developer based in India</p>
        </div>
        <h1 className="w-full md:w-[80%] xl:w-[70%] 2xl:w-[80%] text-xl mt-5 font-spacemono">
          Crafting detailed interfaces which create impact.
        </h1>
        <div className="flex flex-col lg:flex-row justify-between items-center font-spacemono">
          <p className="w-full md:w-[70%] xl:w-[50%] text-lg mt-5 mb-2">
            I'm Gautam, an India-based developer and creative designer specializing in fullstack development (MERN),
            focusing on making interfaces simple and usable.
          </p>
        </div>
        <div className="flex items-center gap-2 border border-zinc-700 px-2 py-1 rounded-sm w-[80%] sm:w-[50%] md:w-[40%] lg:w-[35%] text-black mt-5">
          <span className="relative flex size-2">
            <span className="absolute z-10 inline-flex h-full w-full animate-ping rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex size-2 rounded-full bg-red-500"></span>
          </span>
          <p className="text-zinc-900">Looking for new opportunities</p>
        </div>
        {/* Social Media Icons */}
        <div className="flex justify-between items-center w-[80%] sm:w-[50%] md:w-[40%] lg:w-[35%] mt-5">
          {socials.map(({ href, icon }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center"
            >
              {/* Icon wrapper */}
              <div className="transition-all duration-300 group-hover:blur-sm group-hover:opacity-50">
                <box-icon name={icon} type="logo" color="#fb2c36"></box-icon>
              </div>

              {/* Arrow icon appears on hover */}
              <div className="absolute transition-all duration-300 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100">
                <box-icon name="right-top-arrow-circle" color="#fb2c36"></box-icon>
              </div>
            </a>
          ))}
        </div>

      </div>

      {/* Right Section */}
      <div className="border border-zinc-800 border-dotted w-full lg:w-[40%] sm:w-[80%] md:w-[80%] mt-10 flex justify-center items-center">
        <SplineTemplate />
      </div>
    </div>
  );
};

export default Home;
