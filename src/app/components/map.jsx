import Image from 'next/image'
import React from 'react'

export default function MapElemt() {

    const openingTimes = {
        Monday: "4:00 PM - 11:00 PM",
        Tuesday: "4:00 PM - 11:00 PM",
        Wednesday: "4:00 PM - 11:00 PM",
        Thursday: "4:00 PM - 11:00 PM",
        Friday: "4:00 PM - 11:00 PM",
        Saturday: "4:00 PM - 11:00 PM",
        Sunday: "4:00 PM - 11:00 PM",
    };
    const closingText = "Opening times"

    const heading = "We're HQ"
    const para = "At H.Q, we believe in the power of food to bring people together. We proudly serve authentic Nigerian dishes from all corners of Nigeria, offering a unique experience that’s more than just a meal. It’s a journey into the rich culinary traditions of Nigeria.  Come eat with us"
    return (
        <div className=" relative bg-green-800  flex flex-col sm:flex-col items-center max-w-fit w-screen lg:flex-row  h-full" >
            <div className=" flex flex-col md:flex-row items-center w-full h-full ">

                <div className=" flex flex-col items-center w-full max-w-fit h-[450px] p-6 " >
                    <h1 className="text-2xl pb-4">{closingText}</h1>
                  
                        <table className="table-auto border-collapse  m-auto border border-green-600">
                          
                            <tbody>
                                {Object.entries(openingTimes).map(([day, times]) => (
                                    <tr key={day}>
                                        <td className="border border-green-300 px-4 py-2">{day}</td>
                                        <td className="border border-green-300 px-4 py-1">{times}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                  
                </div>
                <div className="bg-green-800  text-center max-w-fit w-full  h-[300px] p-8 " >
                    <h1 className="text-2xl pb-4">{heading}</h1>
                    <p className=" w-[300px]" >{para}</p>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9505.966881078995!2d-2.2184155!3d53.4417958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb35765d45043%3A0xfa9825f6f246358d!2sH.Q.!5e0!3m2!1sen!2suk!4v1726008859332!5m2!1sen!2suk" width="360" height="450" style={{ border: 0, padding: 20, }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            {/* <div className=" relative flex flex-col w-[300px] h-[300px]"> 
        <Image src="/mapradius.png" fill  alt="test" /></div>
        */}
        
        </div>
    )
}
