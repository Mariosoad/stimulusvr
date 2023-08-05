import React from 'react'

import "./about.css"
import Image from 'next/image'

export default function About() {
    return (
        <div className="container-about">
            <div className="child-container-about">
                <div className='container-card-about'>
                    <div>
                        <h2>No need for obsolete <br></br> e-learning tools</h2>
                        {/* <Image width={150} height={150} src="https://assets.website-files.com/6193c9dbb809764879877eec/61a4b22765af7a9b88f8c42d_visit_elem-01.png" /> */}
                    </div>
                    <div className='card-about'>
                        <p>Before VR and Interactive, each person spent an entire day
                            on training inside specifically designated places, with some
                            hands-on training and some e-learning. VR reduced the training
                            from long periods of time to minutes, with no drop in efficacy
                            and the most important thing: time & budget cost effective.
                            You can do the math as to what the savings would be. Don't have a VR device?
                            No worries, our app also works in Desktop and mobile devices.
                        </p>
                    </div>
                </div>
                <div className='container-box-about'>
                    <div className='box-about'>
                        <h2>Need a custom solution for simulating your own training environments?</h2>
                        <p>We can offer on demand custom training modules to fit your needs, so your
                            Trainees get to safely experience situations that may normally be unsafe,
                            and most importantly, they can practice in these virtual simulations as
                            often as needed to feel prepared and confident.</p>
                        {/* <Image width={300} height={300} src="https://assets.website-files.com/6193c9dbb809764879877eec/61a4b22765af7a9b88f8c42d_visit_elem-01.png" /> */}
                        <video autoPlay muted loop src="https://stimulusvr.com/video/polina.mp4"></video>
                        <div className='background-video'></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
