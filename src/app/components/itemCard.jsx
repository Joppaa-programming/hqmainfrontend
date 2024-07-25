"use client"
import React, { useState } from 'react'

export default function ItemCard({key,item}) {
   
    return (
        <div key={key} id='itemcard' className='w-1/2'>
            <div id='itemInfo' className='w-full'>
                <div id='itemTitle' className='w-1/2'>{item.title}</div>
                <div id='itemPrice' className='w-1/2'>{item.price}</div>
                </div>
                 <div id='itemDesc' className='w-full'>{item.description}</div>
        </div>
    )
}
