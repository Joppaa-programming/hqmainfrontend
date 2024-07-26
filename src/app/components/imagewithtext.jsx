import Image from 'next/image'
import React from 'react'

export default function Imagetext({imgSrc}) {
    return (
        <div>        
             <Image
            src={imgSrc}
            fill
            objectFit='cover'
            alt="Picture of the author"
        />
        </div>
    )
}
