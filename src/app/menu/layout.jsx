import React from 'react'
import Hero from '../components/hero'
import Menuhero from '../components/menuhero'
import Menubar from '../components/menubar'

export default function layout({children}) {
  return (
    <div className=" flex flex-col justify-between w-screen">
        <Menuhero/>
     
        {children}
        </div>
  )
}
