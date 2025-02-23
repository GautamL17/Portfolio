import { useState } from 'react'
import './App.css'
import Home from './components/Home';
import Education_CurrentEvents from './components/Education_CurrentEvents';
import FeaturedProjects from './components/FeaturedProjects';
import Navbar from './components/Navbar';
import OuterLayout from './components/OuterLayout';
import BottomInfo from './components/BottomInfo';

function App() {


  return (
    <>
      <OuterLayout />
      {/* center div */}
      <div className="absolute inset-0 flex items-center justify-center z-0">
        <div className="w-[98%] h-[96%] border-[2px] border-zinc-800 overflow-y-auto scroll-hidden bg-black font-mono">
          <Navbar />
          <div className="">
            {/* Scrollable Content */}
            <div className="h-[1300px] mt-10"
            >
              <div className=" inset-0 z-0 h-full w-full  bg-[linear-gradient(to_right,#c6c5c5a_1px,transparent_1px),linear-gradient(to_bottom,#8080800b_1px,transparent_1px)] bg-[size:24px_24px]">
                <div className=" w-full">
                  <Home />
                  <Education_CurrentEvents />
                  <FeaturedProjects />
                  <BottomInfo />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
