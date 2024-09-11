import Link from 'next/link'
import React from 'react'

export default function Card({ heading, info, cta, target }) {
    //console.log(target)
    return (
        <div className=' p-6 max-w-[350px]  rounded-md'>
            <div className='flex flex-col'>
                <div className='inline-block font-extrabold md:h-[74px]  md:align-middle text-3xl md:text-4xl'> {heading}</div>
                <div className='py-4 md:h-[160px]'> {info}</div>
                <div className='relative'><Link href={cta.link}  target={target} className='bg-green-400 text-black font-medium w-52 hover:text-white text-center px-4 py-2'>{cta.text}</Link></div>
            </div>
        </div>
    )
}
