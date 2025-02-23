import React from 'react'
import Spline from '@splinetool/react-spline';
const SplineTemplate = () => {
  return (
    <>
      <div className="relative w-full h-full pointer-events-one">
      <div className="w-full h-full">
      <Spline scene="https://prod.spline.design/qAGq1sJUoQq8dn1a/scene.splinecode" />
      </div>
      <div className="absolute right-0 bottom-0 w-full bg-black text-white z-50 h-[20%] pointer-events-none"></div>
      </div>
    </>
  )
}

export default SplineTemplate



