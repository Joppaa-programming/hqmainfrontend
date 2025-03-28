import React from 'react'
import Card from './cards'
import Image from 'next/image'
const cards = [
    {
        "heading": "H.Q's Delivery",
        "info": "We sometimes change our delivery areas based on demand - check if we’re delivering to you before ordering",
        "cta": {
            "text": "ORDER DELIVERY",
            "link": "https://www.pronto-food-online.com/ordering/restaurant/menu?restaurant_uid=175b2cdb-5680-4673-b025-59f548105410&glfa_cid=1694974390.1601939947&glfa_t=1601940069781"
        },
        "target": "_blank",
    },
    {
        "heading": "Eat-in with us!",
        "info": "Find your local and grab a seat at the table. Or booth.",
        "cta": {
            "text": "RESERVE A TABLE",
            "link": "https://www.pronto-food-online.com/ordering/restaurant/menu/reservation?restaurant_uid=175b2cdb-5680-4673-b025-59f548105410&reservation=true&glfa_cid=1277109742.1603227119&glfa_t=1603227121089"
        },
        "target": "_blank",
    },
    {
        "heading": "Call H.Q ",
        "info": "Plan ahead and get your Jollof to-go from H.Q. A checky skip of the queue.",
        "cta": {
            "text": "CALL US",
            "link": "tel:01617061472"
        },
        "target": "parent",
    },
    {
        "heading": "Our Menu ",
        "info": "View our H.Q menu on the go. Save time when ordering.",
        "cta": {
            "text": "VIEW MENU",
            "link": "/menu"
        },
        "target": "parent",
    },
]
export default function CardsList() {

    return (
        <>
            <div className="  relative  w-screen h-screen flex justify-center items-center ">
                <Image className="opacity-20" src="/nigeria.jpg" alt="nigeria streets" fill sizes="100vw"
                    style={{ objectFit: "cover" }} />
                <div className=" flex flex-col justify-center items-center gap-4">
                    <Image className=" " src="/ngflag.png" width={80} height={80} alt="nigeriaflag" />
                    <div className='flex gap-2   flex-col  md:flex-row'>
                        {cards.map((card, index) => (<div id={index} key={index}><Card heading={card.heading} target={card.target} cta={card.cta} info={card.info} /></div>))}
                    </div>
                </div>
            </div>

        </>
    )
}
