import React from 'react';

const Footer = () => {


  return (
    <footer className='w-[60%] mx-auto  md:justify-between 2xl:justify-between xl:justify-between sm:felx-col items-center gap-2 py-1  overflow-hidden mb-2'>
      <div className="w-full">
        <span className='font-medium text-zinc-200 text-md border-transparent' >
          Elsewhere
        </span>
        <ul className='border rounded-lg mt-5 border-zinc-700 bg-zinc-900 px-2 py-1 flex'>
          <li className='sm:w-[100%] md:w-[100%] xl:w-[100%] 2xl:w-[100%] text-sm my-2 text-zinc-100 p-2 border hover:bg-zinc-800 rounded-lg border-zinc-900 hover:border-zinc-700 mx-auto'>
            <a href="mailto:gautamlodwal17@gmail.com" className='flex gap-2 items-center justify-center'> <box-icon name='gmail' type='logo' color='#ffffff' ></box-icon> Email</a>
          </li>
          <li className='sm:w-[100%] md:w-[100%] xl:w-[100%] 2xl:w-[100%] text-sm my-2 text-zinc-100 p-2 border hover:bg-zinc-800 rounded-lg border-zinc-900 hover:border-zinc-700 mx-auto'>
            <a href="https://www.linkedin.com/in/gautam-lodwal-292682235/" className='flex gap-2 items-center justify-center'><box-icon name='linkedin-square' type='logo' color='#ffffff' ></box-icon> Linkedin</a>
          </li>
          <li className='sm:w-[100%] md:w-[100%] xl:w-[100%] 2xl:w-[100%] text-sm my-2 text-zinc-100 p-2 border hover:bg-zinc-800 rounded-lg border-zinc-900 hover:border-zinc-700 mx-auto'>
            <a href="https://github.com/GautamL17" className='flex gap-2 items-center justify-center'><box-icon name='github' type='logo' color='#ffffff' ></box-icon> Github</a>
          </li>
        </ul>
      </div>
      <div className="mx-auto w-[60%] flex justify-center items-center self-center gap-4 mt-4">
        <span>Made with 💖 by Gautam</span>
      </div>
    </footer>
  );
};

export default Footer;
