"use client"

import React from 'react'

import Link from 'next/link'
import Image from 'next/image'
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { useMediaQuery } from 'react-responsive'

import './hero.css';

export default function Hero() {

    const isTabletOrMobile = useMediaQuery({ maxWidth: 768 })

    return (
        <div className='container-hero'>
            <div className='child-container-hero'>
                <div className='tittle-hero'>
                    <h1>STIMULUS</h1>
                    <div>
                        <span></span> <h1>VR</h1>
                    </div>
                    <p>
                        Stimulus is a captivating and immersive virtual world.
                        It invites everyone to reveal and showcase content,
                        allowing you to create your own events, workshops, meetings,
                        and hangouts within a secure environment.
                    </p>
                    <div>
                        <a className='btn button-hero'>
                            START FREE TRIAL <IoIosArrowDroprightCircle style={{ fontSize: "22px" }} />
                        </a>
                    </div>
                </div>
                <div className='video-hero'>
                    {/* <Image width={500} height={500} src="https://assets.website-files.com/6193c9dbb809764879877eec/619b900211243f85f8489ee9_media_illustr-p-800.png" /> */}
                    {/* <div className="container">

                        <Image className="svg-container" width={260} height={260}
                            src="https://imagedelivery.net/Mag7Wvw4aqPxUrAH8_Tfkw/e8816703-684a-45ab-8101-50f128b37c00/mobile" alt="Logo Maxiviajes" />

                        <video className="video" loop autoPlay muted>
                            <source src="https://stimulusvr.com/video/polina.mp4" type="video/mp4" />
           
                        </video>
                    </div> */}

                    <lottie-player src="https://lottie.host/b0d573ab-fd01-4663-9b70-6d4ff01dca7b/LUMOG4JQJ1.json" 
                     speed="1" loop autoplay direction="1" mode="normal"></lottie-player>
            </div>
        </div>
        </div >
    )
}
