import React from 'react'
const About = () => {
    return (
        <>
            <section className='w-[70%] my-5 mx-auto' >
                <span className='font-semibold text-zinc-200 text-sm' >ABOUT ME</span>
                <p className='sm:w-[80%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] text-sm mt-5 text-zinc-300' >
                    Crafting detailed interfaces which creates impacts.
                    <br />
                    Pursuing Electronics & Telecommunication Engineering from IET, Indore.
                    Currently in final year.
                    <br />
                    I'm interested in React Js, Node Js, Python,
                    Machine Learning.
                </p>
                <section className='flex gap-10 items-center my-5' >
                    <button className='bg-zinc-950 hover:border-purple-600 hover:bg-purple-300 text-zinc-400 px-2 py-1 hover:text-zinc-900 border border-zinc-800 font-semibold' > <a href="mailto:gautamlodwal17@gmail.com">Email me</a> </button>
                    <button className='bg-zinc-950 hover:border-purple-600 hover:bg-purple-300 text-zinc-400 px-2 py-1 hover:text-zinc-900 border border-zinc-800 font-semibold' ><a href='/assets/resume.pdf' download >Resume</a></button>
                </section>
            </section>
                <section className='w-[70%] mx-auto my-5' >
                <span className='font-semibold text-zinc-200 text-sm'>CURRENTLY</span>
                <p className='sm:w-[80%] md:w-[50%] xl:w-[50%] 2xl:w-[50%] text-sm my-5 text-zinc-300' >
                    Learning Machine Learning and focusing on fullstack web development.
                    <br />
                    I'm trying to learn more about AI and to make more sustainable apps.
                    <br />
                    Currently looking for internships.
                </p>
                </section>
        </>
    )
}

export default About
