'use client'

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

import { FaHeadset } from 'react-icons/fa';
import { RiMenu3Fill } from 'react-icons/ri';
import './navbar.css'

export default function Navigation() {

    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className="container-navigation">
            <Navbar expand="xl" className="bg-body-tertiary">
                <Container fluid>
                    <div className="container-nav-brand">
                        <Link href="/">
                            <Image className="img-logo-nav" width={60} height={60}
                                src="https://imagedelivery.net/Mag7Wvw4aqPxUrAH8_Tfkw/e8816703-684a-45ab-8101-50f128b37c00/mobile" alt="Logo Maxiviajes" />
                        </Link>
                        <div className="container-nav-login">
                            <Navbar.Toggle className="btn-toggle-navbar" onClick={toggleMenu}>
                                <RiMenu3Fill style={{ fontSize: "36px" }} />
                            </Navbar.Toggle>
                        </div>
                    </div>

                    <Navbar.Offcanvas className="container-offcanvas" show={menuOpen}>
                        <Offcanvas.Header closeButton onClick={() => setMenuOpen(false)}>
                            <Link href="/">
                                <Image className="img-logo-nav" width={60} height={60}
                                    src="https://imagedelivery.net/Mag7Wvw4aqPxUrAH8_Tfkw/e8816703-684a-45ab-8101-50f128b37c00/mobile" alt="Logo Maxiviajes" />
                            </Link>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Nav className="nav-offcanvas flex-grow-1 nav-container" >
                                <Link className="btn-navbar" href="#" onClick={() => setMenuOpen(false)}>Home </Link>
                                <Link className="btn-navbar" href="#" onClick={() => setMenuOpen(false)}>Feature </Link>
                                <Link className="btn-navbar" href="#" onClick={() => setMenuOpen(false)}>About</Link>
                                <Link className="btn-navbar" href="#" onClick={() => setMenuOpen(false)}>Pricing</Link>
                                <Link className="btn-navbar" href="#" onClick={() => setMenuOpen(false)}>Contact</Link>
                                <Link className="btn-download" href="#" onClick={() => setMenuOpen(false)}>Download</Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}
