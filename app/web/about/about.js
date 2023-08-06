import React from 'react'

import Image from 'next/image'
import { BsWindows } from 'react-icons/bs';
import { SiOculus } from 'react-icons/si';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

import "./about.css"

export default function About() {
    return (
        <div className="container-about">
            <div className="child-container-about">
                <div className='container-box-about'>
                    <h2>Need a custom solution for simulating your own training environments?</h2>
                    <div className='box-about'>
                        <video autoPlay muted loop src="https://stimulusvr.com/video/polina.mp4"></video>
                        <div className='background-video'></div>
                    </div>
                </div>
                <div className='child-card-about left'>
                    <p>We can offer on demand custom training modules to fit your needs, so your
                        Trainees get to safely experience situations that may normally be unsafe,
                        and most importantly, they can practice in these virtual simulations as
                        often as needed to feel prepared and confident.</p>
                </div>
                <div className='container-card-about'>
                    <div>
                        <h2>No need for obsolete <br></br> e-learning tools</h2>
                    </div>
                    <div className='card-about'>
                        <p>VR reduced the training from long periods of time to minutes,
                            with no drop in efficacy and the most important thing:
                            time & budget cost effective. You can do the math as to what
                            the savings would be.
                        </p>
                    </div>
                </div>
                <div className='child-card-about left'>
                    <p>Before VR and Interactive, each person spent an entire day
                        on training inside specifically designated places, with some
                        hands-on training and some e-learning.
                    </p>
                </div>
                <div className='child-card-about right'>
                    <p>Don't have a VR device?
                        No worries, our app also works in Desktop and mobile devices.
                    </p>
                </div>

                <a className='btn button-hero'>
                    PURCHASE NOW <IoIosArrowDroprightCircle style={{ fontSize: "22px" }} />
                </a>
            </div>
        </div>
    )
}
