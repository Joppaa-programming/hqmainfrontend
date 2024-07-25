import React from 'react'
import Card from './cards'
   const cards = [
        {
            "heading": "Order for Collect",
            "info": "Plan ahead and get your Jollof to-go, from HQ to skip queue.",
            "cta": {
                "text": "ORDER COLLECT",
                "link": "OPENS IN A NEW WINDOW"
            }
        },
        {
            "heading": "HQ's Delivery",
            "info": "We sometimes change our delivery areas based on demand - check if we’re delivering to you.",
            "cta": {
                "text": "ORDER DELIVERY",
                "link": "https://www.pronto-food-online.com/ordering/restaurant/menu?restaurant_uid=175b2cdb-5680-4673-b025-59f548105410&glfa_cid=1694974390.1601939947&glfa_t=1601940069781"
            }
        },
        {
            "heading": "Eat-in with us!",
            "info": "Find your local and grab a seat at the table. Or booth.",
            "cta": {
                "text": "RESERVE A TABLE",
                "link": "https://www.pronto-food-online.com/ordering/restaurant/menu/reservation?restaurant_uid=175b2cdb-5680-4673-b025-59f548105410&reservation=true&glfa_cid=1277109742.1603227119&glfa_t=1603227121089"
            }
        }
    ]
export default function CardsList() {
 
    return (
        <div>

            <div className='flex flex-col md:flex-row'>
                {cards.map((card, index) => (<div key={index}><Card heading={card.heading} cta={card.cta} info={card.info}  /></div>))}
            </div></div>
    )
}
