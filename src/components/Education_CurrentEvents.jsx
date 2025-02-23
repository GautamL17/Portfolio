import React from 'react'
// import FillerComponent2 from './FillerComponent2'
import FillerComponent1 from './FillerComponent1'
// import TextPressure from './TextPressure'
const Education_CurrentEvents = () => {
  return (
    <>
      <div className="flex text-zinc-300">
        <div className=" mt-3 w-full">
          {/* Currently Section */}
          <div className=" text-zinc-100">
            <div className=" mt-30 border-y-2 border-dotted border-zinc-700">
              <div className="mx-20 border-x-2 border-dotted border-zinc-700 ">
                <section className="bg ">
                  <div className="py-5 px-3 border-b-2 border-dotted border-zinc-700">
                    <h2 className='text-2xl font-spacemono'>Currently</h2>
                  </div>
                  <p className='mt-4 w-full font-mono text-lg py-5 px-3'>
                    Started my technical journey as an
                    intern at <a href='https://www.cognizant.com/' className='text-red-500' >Cognizant</a>.
                    <br />
                    And last month relocated in Bangalore, besides this I'm in my final year of engineering and looking for full time SDE roles.
                    <br />
                    While learning about making pixel perfect interfaces I am also focusing on learning AI and Machine Learning.
                  </p>
                </section>
              </div>
            </div>
          </div>
          {/* filler */}
          <FillerComponent1/>
          {/* Education Section */}
          <div className="border-y-2 border-dotted border-zinc-700">
            <div className="mx-20 border-x-2 border-dotted border-zinc-700 ">
              <section className=''>
                <div className="py-5 px-3 border-b-2 border-dotted border-zinc-700">
                  <span className='font-medium text-2xl font-monospace '>Education</span>
                </div>
                <ul className='py-5 '>
                  {/* Graduation */}
                  <li className=' items-center mb-2 border-dotted border-b-2 border-zinc-700 pb-2 px-3'>
                    <div className="xl:flex xl:justify-between 2xl:flex 2xl:justify-between
                lg:flex lg:justify-between md:block md:justify-between  2xl:items-center
                sm:block">
                      <section className='flex items-center' >
                        {/* <hr className="mr-1 w-5 rounded-lg border-zinc-500 border-2 " /> */}
                        <p>Bachelor's of Engineering</p>
                      </section>
                      <p className='mr-1'>Electronics & Telecommunication</p>
                    </div>
                    <div>
                      <section className='flex flex-start items-center justify-between'>
                        <div className="flex">
                          {/* <hr className="mr-1 w-5 rounded-lg border-black border-2 " /> */}
                          <p>Institute of Engineering & Technology, DAVV</p>
                        </div>
                        <p className='mr-1'>2020-2021</p>
                      </section>
                    </div>
                  </li>
                  {/* Science-12th */}
                  <li className=' items-center mb-2 border-dotted border-b-2 border-zinc-700 pb-2 px-3'>
                    <div className="xl:flex xl:justify-between 2xl:flex 2xl:justify-between
                lg:flex lg:justify-between md:block md:justify-between  2xl:items-center
                sm:block">
                      <section className='flex items-center' >
                        {/* <hr className="mr-1 w-5 rounded-lg border-zinc-500 border-2 " /> */}
                        <p>12th-Senior secondary</p>
                      </section>
                      <p className='mr-1'>Science[Physics-Chemistry-Math]</p>
                    </div>
                    <div>
                      <section className='flex flex-start items-center justify-between' >
                        <div className="flex">
                          {/* <hr className="mr-1 w-5 rounded-lg border-black border-2 " /> */}
                          <p>S.G.S A.M.N.E.M School, Indore</p>
                        </div>
                        <p className='mr-1'>2020-2021</p>
                      </section>
                    </div>
                  </li>
                  {/* Matriculation-10th */}
                  <li className=' items-center px-3 '>
                    <div className="xl:flex xl:justify-between 2xl:flex 2xl:justify-between
                lg:flex lg:justify-between md:block md:justify-between  2xl:items-center
                sm:block">
                      <section className='flex items-center' >
                        {/* <hr className="mr-1 w-5 border-zinc-500 border-2 rounded-lg" /> */}
                        <p>10th-Higher secondary</p>
                      </section>
                      <p className='mr-1'>Matriculation</p>
                    </div>
                    <div>
                      <section className='flex flex-start items-center justify-between' >
                        <div className="flex">
                          {/* <hr class="mr-1 w-5 border-black border-2 rounded-lg" /> */}
                          <p>S.G.S A.M.N.E.M School, Indore</p>
                        </div>
                        <p className='mr-1'>2018-2019</p>
                      </section>
                    </div>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
      {/* <FillerComponent2/> */}
    </>
  )
}

export default Education_CurrentEvents
