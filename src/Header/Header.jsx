import React from 'react'
import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMagnifyingGlass, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { Routes, Route, Link } from "react-router-dom";
import All from '../All/All'
import InternationalChild from '../InternationalChild/InternationalChild'
import Dashboard from '../Dashboard/Dashboard'
import Admin from '../Admin/Admin'



function Header() {
    return (
        <>
            <div className="header">
                <div className="header-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-sm-6 col-xs-6">
                                <div className="social-icons">
                                    <ul className='d-flex'>
                                        <li className='me-2 fb'><a href="https://www.facebook.com/wowmandu"><FontAwesomeIcon className='icons' icon={faFacebookF} /></a></li>
                                        <li className='mx-2 inst'><a href=""><FontAwesomeIcon className='icons' icon={faInstagram} /></a></li>
                                        <li className='mx-2 twt'><a href=""><FontAwesomeIcon className='icons' icon={faXTwitter} /></a></li>
                                        <li className='mx-2 gg'><a href=""><FontAwesomeIcon className='icons' icon={faGoogle} /></a></li>
                                        <li className='ms-2 lkd'><a href=""><FontAwesomeIcon className='icons' icon={faLinkedin} /></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6 col-xs-6">
                                <div className="logo">
                                    <img className='w-100' src="\logo.png" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4 col-xs-4">
                                <div className="search">
                                   <input type="text" placeholder='Search Here..'/><span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="header-bottom">
                    <div className="container">
                        <div className="navbar text-center">
                            <div className="d-flex mx-auto">
                                <li className='me-4'><Link to="/"><a href="">Home</a></Link></li>
                                {/* <li className='mx-4'><a href="">Categories</a></li> */}
                                <li className='mx-4'>
                                    <div className="dropdown">
                                        <button className="dropbtn">Category</button>
                                        <div className="dropdown-content">
                                            <a href="#sports">Sports</a>
                                            <a href="#national">National</a>
                                            <a href="#politics">Politics</a>
                                            <a href="#international">International</a>
                                        </div>
                                    </div>
                                </li>
                                <li className='mx-4'><a href="">Archive</a></li>
                                <li className='mx-4'><a href="#blog">Blog</a></li>
                                <li className='mx-4'><a href="#trending">Latest news</a></li>
                                <li className='me-4'><a href="">Contact us</a></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Routes>
                <Route path="/" element={<All />} />
                <Route path="/interChild" element={<InternationalChild />} />
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/login" element={<Admin />} />
            </Routes>
        </>
    )
}

export default Header