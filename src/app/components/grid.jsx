import React from 'react'
import ItemCard from './itemCard'

export default function Grid() {

    const items = [{
        title: "Chicken",
        price: "£2.00", descripion: "Savory minced chicken or meat or fish filling with potatoes and carrots baked in crispy dough."

    },{
        title: "Minced Chickene",
        price: "£2.00", descripion: "Savory minced chicken or meat or fish filling with potatoes and carrots baked in crispy dough."

    },{
        title: "Beef",
        price: "£2.00", descripion: "Savory minced chicken or meat or fish filling with potatoes and carrots baked in crispy dough."

    },{
        title: "Fish Pie",
        price: "£2.00", descripion: "Savory minced chicken or meat or fish filling with potatoes and carrots baked in crispy dough."

    },{
        title: "Peppered Puff Puff (V) ",
        price: "£2.00", descripion: "Deep fried sweet pepper dough."

    }]
    return (
        <div className='w-screen'>
            { items&& items.map((item,index)=> <ItemCard key={index} item={item}/> )   }
        </div>
    )
}
