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
                    <lottie-player src="./visor.json" speed="1" loop autoplay direction="1" mode="normal"></lottie-player>
                </div>
            </div>
        </div >
    )
}
