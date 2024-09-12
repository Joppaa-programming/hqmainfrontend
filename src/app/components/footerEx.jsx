'use client'
import React from 'react'
import { useState } from 'react';
import addData from '../data/firebase';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const info = {
                name: name,
                email: email,
                message: "Subscribe to New letter",
                createdAt: new Date(),
            }
            // const id = 'digitalethics' + idNumber;
            await addData(info);
            setName('');
            setEmail('');
            setMessage('');
            setSubmitted(true);
            console.log('Submission worked');
        } catch (err) {
            setError(err);
        }
    };
    return (
        < div className='footer px-5 mb-6 '>
            <div id='footer-main' className='pt-20 pb-12  gap-16 items-start content-center py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 lg:py-16 lg:px-6" '>
                <div className=''>
                    <h2 className='text-3xl text-green-400 font-bold sm:text-5xl'>
                        Subscribe
                    </h2>
                    <p className='text-base'>
                        Subscribe to our newsletter to
                        stay in touch with the latest.
                    </p>
                    {submitted == false ? (<form className='flex flex-col mb-5 ' onSubmit={handleSubmit}>
                        <label className=' pt-3 text-xs'>
                            Your Fullname
                        </label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="block w-full py-3 px-4  bg-transparent    border-black-600 border-b-2 "
                            placeholder=""
                        />
                        <label className=' pt-3 text-xs'>
                            Your Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="block w-full py-3 px-4  bg-transparent    border-black-600 border-b-2 "
                            placeholder=""
                        />
                        <div className=" buttons py-5 mt-3 mb-3">
                            <button
                                type="submit"
                                className=" justify-center text-xs h-9   px-8 mb-5  font-bold rounded-full text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-green-500 focus:ring-offset-green-200 active:bg-green-600 transition duration-150 ease-in-out">
                                Sign up Now!
                            </button></div>
                    </form>) : <div className="my-4 text-green-200">Thank you for Subscribing</div>
                    }
                    {error && <div className="mt-6 text-red-600">Error: {error.message}</div>}
                </div>
                <div className='md:pl-10'>
                    <h2 className='text-3xl sm:text-5xl text-green-400 font-bold'>GET IN TOUCH</h2>
                    <p className='mt-3'> H.Q <br /> 317 Wilmslow Rd, Fallowfield, <br />
                        Manchester
                        <br />M14 6NW </p>
                    <span className='mt-3'><p>H.Q</p>
                        0161 425 5080
                    </span>
                    <div className='flex pt-3 justify-start text-center text-green-400'>
                        <Link href={'https://www.facebook.com/hqmanchester'}><FaFacebookF className='text-xl mr-5' /></Link>
                        <Link href={'https://www.instagram.com/hqmanchester/'}><FaInstagram className='text-xl mr-5 ' /></Link>  <Link href={'https://www.tiktok.com/@hqmanchester/'}><FaTiktok className='text-xl mr-5' /></Link>
                    </div>
                </div>
            </div>
            <div id='footer-bottom' className='border-t-2 lg:flex text-gray-500  lg:text-center'>

                <div className='text-xs my-4 flex flex-col lg:flex px-2 gap-1 align-top items-start  justify-center'>
                    {/*                   
                    <Link href="#contactus">
                        <div className='flex md:px-5 content-center md:align-middle text-green-400' >
                            <h2 className='text-xl text-center font-bold'>
                                H.Q
                            </h2>
                            <span className='text-xl font-bold lg:grid p-1 lg:grid-cols-2 '>
                                |
                            </span>
                            <p className='text-xl font-bold'>
                                Be Ready
                            </p>
                        </div>
                    </Link> */}
                    <p className=''> H.Q © 2024 </p>
                    {/* <span className=''> WhatsApp : 07424622616 </span> */}
                    <Link href={'https://zabbu.org/'} className=''> Developed By Zabbu Marketing </Link>
                    <Link href="/"><h2 className='text-xs '>Privacy Policy
                    </h2 > </Link>

                    <Link href="https://www.originally.black">
                        <h2 className='text-xs uppercase pt-2  text-white  '>
                            www.Originally.Black
                        </h2>
                    </Link>
                </div>





            </div></div>
    )
}
