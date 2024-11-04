import React from 'react'

const SkillsAndEducation = () => {
  return (
    <>
      <div className="w-[60%] mx-auto">
        <section>
          <span className='font-medium text-zinc-200 text-md border-transparent'>Education</span>
          <ul className='text-zinc-200 mt-5'>
            <li className=' items-center mb-2'>
              <div className="xl:flex xl:justify-between 2xl:flex 2xl:justify-between
                lg:flex lg:justify-between md:block md:justify-between 
                sm:block
              ">
                <p>➖ Bachelor's of Engineering & Technology</p>
                <p>Electronics & Telecommunication</p>
              </div>
              <div className="xl:flex xl:justify-between 2xl:flex 2xl:justify-between
                lg:flex lg:justify-between md:block md:justify-between 
                sm:block">
                <p className='md:ml-0 lg:ml-[27px] 2xl:ml-[27px] xl:ml-[27px] sm:ml-0'>Institute of Engineering & Technology, Indore</p>
                <p>2021-2025</p>
              </div>
            </li>
            <li className=' items-center mb-2'>
              <div className="xl:flex xl:justify-between 2xl:flex 2xl:justify-between
                lg:flex lg:justify-between md:block md:justify-between 
                sm:block">
                <p>➖ 12th-Senior secondary</p>
                <p>Science[Physics-Chemistry-Math]</p>
              </div>
              <div className="xl:flex xl:justify-between 2xl:flex 2xl:justify-between
                lg:flex lg:justify-between md:block md:justify-between 
                sm:block">
                <p className='md:ml-0 lg:ml-[27px] 2xl:ml-[27px] xl:ml-[27px] sm:ml-0'>S.G.S A.M.N.E.M School, Indore</p>
                <p>2020-2021</p>
              </div>
            </li>
            <li className=' items-center mb-2'>
              <div className="xl:flex xl:justify-between 2xl:flex 2xl:justify-between
                lg:flex lg:justify-between md:block md:justify-between 
                sm:block">
                <p>➖ 10th-Higher secondary</p>
                <p>Matriculation</p>
              </div>
              <div className="xl:flex xl:justify-between 2xl:flex 2xl:justify-between
                lg:flex lg:justify-between md:block md:justify-between 
                sm:block">
                <p className='md:ml-0 lg:ml-[27px] 2xl:ml-[27px] xl:ml-[27px] sm:ml-0'>S.G.S A.M.N.E.M School, Indore</p>
                <p>2018-2019</p>
              </div>
            </li>
          </ul>
        </section>

        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-zinc-800" />
      </div>
    </>
  )
}

export default SkillsAndEducation
