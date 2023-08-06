import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { FaFacebookF } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';
import { BsVimeo } from 'react-icons/bs';

import "./footer.css"

export default function Footer() {
    return (
        <div className='container-footer'>
            <div className='child-container-footer'>
                <div>
                    <Image width={200} height={70} src="https://stimulusvr.com/images/logoloco.svg" />
                    <ul class="social-networks">
                        <li><a href="https://www.facebook.com/stimulusvr/"><FaFacebookF /></a></li>
                        <li><a href="https://twitter.com/stimulusvr"><BsTwitter /></a></li>
                        <li><a href="https://www.youtube.com/watch?v=rgxx-g8stTU"><BsYoutube /></a></li>
                        <li><a href="https://vimeo.com/395997583"><BsVimeo /></a></li>
                    </ul>
                    <a className='btn-navbar email' href='mailto:info@stimulusvr.com'>info@stimulusvr.com</a>
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
                <div className='child-container-down-footer'>
                    <p>© 2023 Stimulus. All Rights Reserved. </p>
                </div>
            </div>
        </div>
    )
}
