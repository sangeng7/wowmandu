import React from 'react'
import './header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle, faInstagram, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


function Header() {
    return (
        <>
            <div className="header">
                <div className="header-top">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-4">
                                <div className="social-icons">
                                    <ul className='d-flex'>
                                        <li className='me-2'><a href=""><FontAwesomeIcon className='icons' icon={faFacebookF} /></a></li>
                                        <li className='mx-2'><a href=""><FontAwesomeIcon className='icons' icon={faInstagram} /></a></li>
                                        <li className='mx-2'><a href=""><FontAwesomeIcon className='icons' icon={faXTwitter} /></a></li>
                                        <li className='mx-2'><a href=""><FontAwesomeIcon className='icons' icon={faGoogle} /></a></li>
                                        <li className='ms-2'><a href=""><FontAwesomeIcon className='icons' icon={faLinkedin} /></a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="logo">
                                    <img className='w-100' src="\logo.png" alt="" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="search text-end">
                                    <div className="search-icon me-3">
                                        <FontAwesomeIcon className='icons' icon={faSearch} />
                                    </div>
                                    <a href=""><p>About</p></a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="header-bottom">
                    <div className="container">
                        <div className="navbar text-center">
                            <div className="d-flex mx-auto">
                                <li className='me-4'><a href="">Home</a></li>
                                <li className='mx-4'><a href="">Categories</a></li>
                                <li className='mx-4'><a href="">Archive</a></li>
                                <li className='mx-4'><a href="">Blog</a></li>
                                <li className='mx-4'><a href="">Latest news</a></li>
                                <li className='me-4'><a href="">Contact us</a></li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header