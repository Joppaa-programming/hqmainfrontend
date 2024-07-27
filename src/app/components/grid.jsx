'use client'
import React from 'react'
import ItemCard from './itemCard'

export default function Grid({items}) {
 
   
    return (
        <div className='w-screen items-center justify-center flex flex-col'>
            {items && items.map((item, index) => <ItemCard key={index} item={item} />)}
        </div>
    )
}
