import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import "./footer.css"

export default function Footer() {
    return (
        <div className='container-footer'>
            <div className='child-container-footer'>
                <div>
                    <Image width={185} height={60} src="https://stimulusvr.com/images/logoloco.svg" />
                </div>
                <div className='container-links'>
                    <div>
                        <Link className="btn-navbar" href="#" onClick={() => setMenuOpen(false)}>Home </Link>
                        <Link className="btn-navbar" href="#" onClick={() => setMenuOpen(false)}>Feature </Link>
                        <Link className="btn-navbar" href="#" onClick={() => setMenuOpen(false)}>About</Link>
                        <Link className="btn-navbar" href="#" onClick={() => setMenuOpen(false)}>Pricing</Link>
                        <Link className="btn-navbar" href="#" onClick={() => setMenuOpen(false)}>Contact</Link>
                        <Link className="btn-download" href="#" onClick={() => setMenuOpen(false)}>Download</Link>
                    </div>
                    <p>As devoted Artists and Developers we believe in Innovation through new visual experiences that push the perception of the Human Being into new forms of Being Digital</p>
                </div>
            </div>
            <div className='container-down-footer'>
                <p>©2023 Stimulus. All Rights Reserved. </p>
            </div>
        </div>
    )
}
