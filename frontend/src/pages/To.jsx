import React, { useState, useEffect } from 'react'

import audio1 from '../assets/songs/birthday.mp3'
import blob from '../assets/images/blob-scene.svg'

const To = () => {
    const [currentTime, setCurrentTime] = useState(new Date()); // Get current time

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update the time every second

        return () => clearInterval(timer); // Clean up the interval on component unmount
    }, []);

    const handleWhatsAppShare = () => {
        // Get the article header and content
        const articleName = document.getElementById('articleName').innerText;

        // Get the current page URL
        const currentPageUrl = window.location.href;

        // Customize the font
        const boldArticleName = `*${articleName}*`;
        const assistText = 'A Special Message Just For You, ';
        const assistText2 = 'Find Out More';
        const boldAssistText2 = `*${assistText2}*`;

        // Encode the article information for the URL
        const encodedArticle = encodeURIComponent(assistText + boldArticleName + '\n\n' + boldAssistText2 + '\n' + currentPageUrl);

        // Generate the WhatsApp share URL
        const whatsappUrl = 'https://wa.me/?text=' + encodedArticle;

        // Open the share dialog
        window.open(whatsappUrl, '_blank');
    };

  return (
    <div className="min-h-[100dvh] font-Poppins text-white bg-cover bg-center" style={{backgroundImage: `url(${blob})`,}} alt="Attractive Background Birthday Image" title="Attractive Background Birthday Image" loading='lazy'>
        <div className='max-w-7xl lg:mx-auto mx-4'>
            <div className='grid lg:grid-cols-4 gap-4 items-center py-8 xl:py-0'>
                {/* left */}
                <div className='lg:col-span-2 xl:col-span-1 border-0 border-b-2 lg:border-x-2 lg:border-b-0 py-16 px-2 xl:h-[100dvh]'>
                    <div className='flex flex-col'>
                        {/* Name */}
                        <h5 id='articleName' className='font-bold text-xl py-4 uppercase text-center'><span className='font-light'>Brian</span> - Momanyi</h5>

                        {/* Image */}
                        <div className="px-14 py-36 lg:py-40 rounded-3xl bg-center bg-cover shadow-2xl" style={{backgroundImage: `url(${blob})`,}}></div>

                        {/* Audio */}
                        <a href='https://www.youtube.com/watch?v=NyrTzwEN_fU' target='_blank' className="flex flex-col items-center py-8">
                            <p className="mb-4 font-semibold text-sm">Happy Birthday- Busy Signal</p>
                            <audio controls className="rounded-3xl">
                                <source src={audio1} type="audio/mp3" />
                            </audio>
                        </a>

                        {/* Date */}
                        <div className='text-center font-semibold text-lg'>
                            <p>THURSDAY 7</p>
                            <p>{currentTime.toLocaleTimeString()}</p> {/* Display dynamic time */}

                            <p className="font-thin text-xs italic">Share</p>
                            <button onClick={handleWhatsAppShare} aria-label="social icons" className="transition duration-200 transform hover:scale-150 text-xs">
                                <svg xmlns="http://www.w3.org/2000/svg" width='1rem' fill='#128C7E' viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                            </button>
                        </div>

                    </div>
                </div>

                {/* center */}
                <div className='lg:hidden xl:block xl:col-span-1 xl:rotate-90'>
                    <div className='text-center'>
                        <h1 className='text-3xl font-semibold'>HAPPY - BIRTHDAY</h1>
                    </div>
                </div>

                {/* right */}
                <div className='lg:col-span-2'>
                    <div className='bg-whity text-secondary rounded-3xl'>
                        <p className="text-md p-8 italic font-medium">
                            Do you know whats gonna happen in this new year, a canvas painted with laughter, 
                            money, and endless possibilities. On this special day, I want to take a moment to 
                            celebrate the incredible person you are.<br/><br/>

                            Wishing you a Birthday filled with peace, tours, bank account statements, food and more food.
                            May you always be surrounded by love, happiness, and all the good things life has to offer.<br/><br/>

                            Good Vibes and Inshallah <span>&#128165;</span><br/>

                            <span className="font-Tangerine text-4xl font-semibold"><a href="https://momanyi-brian-portfolio.vercel.app" target="Portfolio Website">Momanyi_Brian</a></span>
                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default To