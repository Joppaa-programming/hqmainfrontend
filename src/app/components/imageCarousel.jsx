"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

export default function ImageCarousel({data}) {

   
        const [currentImg, setCurrentImg] = useState(0)
        const [carouselSize, setCarouselSize] = useState({ width: 0, height: 0 })
        const carouselRef = useRef(null)

data.map((v,i) =>{
   // console.log(v,i)
})
        useEffect(() => {
            let elem = carouselRef.current
            let { width, height } = elem.getBoundingClientRect()
            if (carouselRef.current) {
              setCarouselSize({
                width,
                height,
              })
            }
          }, [])
        return (
            <>
              <div className="relative h-full w-full overflow-hidden rounded-md">
                <div
                  ref={carouselRef}
                  style={{
                    left: -currentImg * carouselSize.width,
                  }}
                  className="absolute flex h-full w-full transition-all duration-300"
                >
                  {data.length > 1 && data.map((v, i) => (
                    <div key={i} className="relative h-screen w-screen shrink-0">
                      <Image className="pointer-events-none" alt="random image" fill  sizes="100vw"
                style={{ objectFit: "cover" }} src={v.image} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-3 z-10 w-full absolute flex justify-between px-8 md:px-14">
                <button
                  disabled={currentImg == 0}
                  onClick={() => setCurrentImg((prev) => prev - 1)}
                  className={` text-2xl px-4 py-2 rounded-md font-bold ${currentImg == 0 && 'opacity-50'}`}
                >
                  {'<'}
                </button>
                <button
                  disabled={currentImg == data.length - 1}
                  className={`text-2xl px-4 py-2 font-bold ${currentImg == data.length - 1 && 'opacity-50'}`}
                  onClick={() => setCurrentImg((prev) => prev + 1)}
                >
                  {'>'}
                </button>
              </div>
            </>
          )
}
