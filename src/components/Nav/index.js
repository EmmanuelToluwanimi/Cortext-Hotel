import React, { useState } from 'react';
import './style.css'
// import { Link } from 'react-router-dom';
import { Link as Linkscroll } from 'react-scroll';
import { FaCartPlus } from 'react-icons/fa';
import { BsBookmarkPlus } from 'react-icons/bs';
import Badge from 'react-bootstrap/Badge'
// import {Navbar, Container} from 'react-bootstrap';

function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleBar() {
        setIsOpen(!isOpen);
    }


    const Sidebar = (
        <div className="sidebar">
            <div className="navItems_sm">
                <div className="navLink_sm">
                    <Linkscroll to="rooms">Home</Linkscroll>
                </div>

                <div className="navLink_sm">
                    <Linkscroll to="about">About</Linkscroll>
                </div>

                <div className="navLink_sm">
                    <Linkscroll to="rooms">Rooms</Linkscroll>
                </div>

                <div className="navLink_sm">
                    <Linkscroll to="services">Services</Linkscroll>
                </div>

                <div className="navLink_sm">
                    <Linkscroll to="features">Features</Linkscroll>
                </div>

                <div className="navBtn_sm">
                    <button className="bookBtn_sm">Book now <BsBookmarkPlus className="icn" /></button>
                </div>
            </div>
        </div>
    )

    return (
        <>
            <nav className="navContainer">
                <div className="navLogo">
                    <Linkscroll to="rooms">
                        <span>C</span>ortex
                    </Linkscroll>
                </div>

                <div className="navItems">
                    <div className="navLink">
                        <Linkscroll to="rooms">Home</Linkscroll>
                    </div>

                    <div className="navLink">
                        <Linkscroll to="about">About</Linkscroll>
                    </div>

                    <div className="navLink">
                        <Linkscroll to="rooms">Rooms</Linkscroll>
                    </div>

                    <div className="navLink">
                        <Linkscroll to="services">Services</Linkscroll>
                    </div>

                    <div className="navLink">
                        <Linkscroll to="features">Features</Linkscroll>
                    </div>
                </div>

                <div className="navActions">
                    <div className="navCart btn">
                        <Linkscroll to="rooms">
                            <FaCartPlus /><Badge bg="danger">0</Badge>
                        </Linkscroll>
                    </div>
                    <div className="menuBar btn border" onClick={toggleBar}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                    <div className="navBtn">
                        <button className="bookBtn">Book now <BsBookmarkPlus className="icn" /></button>
                    </div>
                </div>

            </nav>

            {isOpen && Sidebar}
        </>
    )
}

export default Nav;
