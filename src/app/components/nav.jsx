import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Nav() {

  const orderlink = "https://www.pronto-food-online.com/ordering/restaurant/menu?restaurant_uid=175b2cdb-5680-4673-b025-59f548105410&glfa_cid=1694974390.1601939947&glfa_t=1601940069781"
  const reserveLink = "https://www.pronto-food-online.com/ordering/restaurant/menu/reservation?restaurant_uid=175b2cdb-5680-4673-b025-59f548105410&reservation=true&glfa_cid=1277109742.1603227119&glfa_t=1603227121089"
  return (
    <div className='px-6 overflow-hidden shadow-lg bg-navImage flex flex-row h-[70px] relative w-full items-center justify-between'>
   <Link href={"/"} className=' h-[55px] w-[55px] relative'> 
             <Image
      src="/hqlogo.png"
      fill="true"
      objectFit='cover'
      alt="Picture of the author"
    /> 
   </Link>
   <Link href={orderlink} target="_blank" className=' bg-red-600 mx-3 w-44 h-6 uppercase text-center'   > Order online</Link>
   <div className=' h-[40px] w-[40px] relative'> 
             <Image
      src="/ngflag.png"
      fill="true"
      objectFit='cover'
      alt="Picture of the author"
    /> 
   </div>
   
    </div>
  )
}
