import React from 'react'

const Home = () => {
    return (
        <>
            <section className=' pt-9 flex flex-col mx-auto w-[70%]' >
                <div className="flex items-center gap-2  ">
                    <span className='w-[10px] h-[10px] bg-purple-500 rounded-full' >
                    </span>
                    <h3 className='font-semibold text-normal text-zinc-100' >Gautam Lodwal</h3>
                </div>
                <p className='text-sm text-zinc-400' >Developer based in India.</p>
            </section>
            <div className="fixed inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#101010_1px,transparent_1px),linear-gradient(to_bottom,#101010_1px,transparent_1px)] bg-[size:1rem_1rem]"></div>
        </>
    )
}

export default Home
