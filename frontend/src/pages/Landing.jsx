import React from 'react'

import audio1 from '../assets/songs/birthday.mp3'
import gif1 from '../assets/images/giphy3.gif'

const Landing = () => {
  return (
    <section>
        <div className="min-h-[100dvh] font-Poppins flex justify-center items-center bg-cover bg-center" style={{backgroundImage: `url(${gif1})`,}} alt="Attractive Background Birthday Gif Image" title="Attractive Background Birthday Gif Image" loading='lazy'>
            <div className="max-w-4xl mx-4 xl:mx-auto bg-transparent backdrop-blur-3xl shadow-2xl rounded-3xl">
                <div className="flex flex-col justify-center items-center text-white m-4">
                    <div className="flex flex-col items-center justify-center py-4 sm:px-16">
                        <h1 className="text-6xl md:text-7xl font-semibold font-Tangerine py-4">Happy Birthday</h1>
                        <p className="text-sm sm:text-lg">
                            Do you know whats gonna happen in this new year, a canvas painted with laughter, 
                            money, and endless possibilities. On this special day, I want to take a moment to 
                            celebrate the incredible person you are.<br/><br/>

                            Wishing you a Birthday filled with peace, tours, bank account statements, food and more food.
                            May you always be surrounded by love, happiness, and all the good things life has to offer.<br/><br/>

                            Good Vibes and Inshallah <span>&#128165;</span><br/>

                            <span className="font-Tangerine text-4xl font-semibold"><a href="https://momanyi-brian-portfolio.vercel.app" target="Portfolio Website">Momanyi_Brian</a></span>
                            
                        </p>
                    </div>
                    <div className="flex flex-col items-center py-8">
                        <p className="font-Poppins mb-4 font-semibold text-lg">Happy Birthday</p>
                        <audio controls className="rounded-3xl">
                            <source src={audio1} type="audio/mp3" />
                        </audio>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Landing;