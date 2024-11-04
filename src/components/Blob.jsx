import React from 'react'
const Blob = () => {
    return (
        <div
            className={`rounded-full -z-10 h-[500px]
                absolute aspect-square bg-gradient-to-r from-pink-500 to-purple-500
                animate-rotate blur-[200px]
                left-1/3 top-0
            `}
        />
    );
};

export default Blob;
