
"use client"
import React from 'react'
import data from '../data/menu.json'
import { menu } from '../data/hq.json'
export default function Menubar() {
    const menuHeading = Object.keys(data.menu)
    const getMenu = function (item) {
        console.log(item)
        //clicking the item will navigate to the menu by id  on the same page
    }
    return (
        <div className='bg-black mt-2 h-11 w-screen flex flex-row items-center  justify-center overflow-y-hidden shadow-lg'>

            {menuHeading.map((item, index) =>
            (
                <div onClick={() => (getMenu(item))} className='w-auto p-2  text-sm' key={index}>{item}</div>)
            )}


        </div>
    )
}
